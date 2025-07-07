const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");
const db = require("./db");
const twilio = require("twilio");
const nodemailer = require("nodemailer");

const twilioClient = twilio(
  "AC2bfb9a8b22db9fa895ee1e8ad4dd7e85",
  "4ffc5ab4e4de5648a2cf69392e816b44"
);
const TWILIO_PHONE = "+15076981427";

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Configure your email transporter (use your real email and app password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vanshikakayeetha117@gmail.com", // <-- your Gmail address
    pass: "kjbd lalv aixo tzwy", // <-- your Gmail app password (not your Gmail login password)
  },
});

const app = express();
const port = 3000;

const otps = {};

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files are allowed!"), false);
  },
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1020499986381-75d0as5r5qmpum7hab4e0f8n4t8u6t7g.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Find or create user in your DB
      db.query(
        "SELECT * FROM details WHERE email = ?",
        [profile.emails[0].value],
        (err, results) => {
          if (results && results.length > 0) {
            return done(null, results[0]);
          } else {
            // Insert new user
            db.query(
              "INSERT INTO details (name, email) VALUES (?, ?)",
              [profile.displayName, profile.emails[0].value],
              (err, result) => {
                if (err) return done(err);
                db.query(
                  "SELECT * FROM details WHERE id = ?",
                  [result.insertId],
                  (err, users) => {
                    return done(null, users[0]);
                  }
                );
              }
            );
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  db.query("SELECT * FROM details WHERE id = ?", [id], (err, results) => {
    done(err, results[0]);
  });
});

// Google auth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login.html" }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/index.html");
  }
);

// Serve HTML pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "login.html"))
);
app.get("/signup", (req, res) =>
  res.sendFile(path.join(__dirname, "signup.html"))
);
app.get("/add-property", (req, res) =>
  res.sendFile(path.join(__dirname, "add-property.html"))
);

// Signup
app.post("/submit", (req, res) => {
  const { name, email, phoneno, password } = req.body;
  db.query("SELECT * FROM details WHERE email = ?", [email], (err, results) => {
    if (results && results.length > 0) {
      return res.send(
        "Email already exists. Please use another email or login."
      );
    }
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).send("Server error");
      }

      const sql = `INSERT INTO details (name, email,phoneno, password) VALUES (?, ?, ? ,?)`;
      db.query(sql, [name, email, phoneno, hashedPassword], (err, result) => {
        if (err) {
          console.error("Error inserting into database:", err);
          return res.status(500).send("Database error");
        }
        res.redirect("/login.html");
      });
    });
  });
});

// Phone signup
app.post("/phone-signup", (req, res) => {
  const { name, phoneno } = req.body;
  // Check if phone already exists
  db.query(
    "SELECT * FROM details WHERE phoneno = ?",
    [phoneno],
    (err, results) => {
      if (results && results.length > 0) {
        return res.send(
          "Phone number already exists. Please use another or login."
        );
      }
      // Insert user with phone (no email/password)
      db.query(
        "INSERT INTO details (name, phoneno) VALUES (?, ?)",
        [name, phoneno],
        (err, result) => {
          if (err) {
            console.error("Error inserting into database:", err);
            return res.status(500).send("Database error");
          }
          res.redirect("/login.html");
        }
      );
    }
  );
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM details WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err || results.length === 0) return res.send("Invalid credentials");
    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        req.session.user = {
          id: user.id,
          email: user.email,
          name: user.name,
          phoneno: user.phoneno,
        };
        res.redirect("/index.html");
      } else {
        res.send("Invalid credentials");
      }
    });
  });
});

// Phone login
// Send OTP route
app.post("/send-otp", (req, res) => {
  const { phoneno } = req.body;
  db.query(
    "SELECT * FROM details WHERE phoneno = ?",
    [phoneno],
    (err, results) => {
      if (err || results.length === 0) return res.send("Phone not registered");
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      otps[phoneno] = otp;

      // Send OTP via Twilio SMS
      twilioClient.messages
        .create({
          body: `Your OTP for login is: ${otp}`,
          from: TWILIO_PHONE,
          to: phoneno.startsWith("+") ? phoneno : `+91${phoneno}`, // Adjust country code as needed
        })
        .then((message) => {
          res.send("OTP sent to your phone.");
        })
        .catch((error) => {
          console.error("Twilio error:", error);
          res.status(500).send("Failed to send OTP. Please try again.");
        });
    }
  );
});

// Verify OTP route
app.post("/verify-otp", (req, res) => {
  const { phoneno, otp } = req.body;
  if (otps[phoneno] && otps[phoneno] === otp) {
    // OTP correct, log user in
    db.query(
      "SELECT * FROM details WHERE phoneno = ?",
      [phoneno],
      (err, results) => {
        if (err || results.length === 0) return res.send("User not found");
        req.session.user = {
          id: results[0].id,
          name: results[0].name,
          email: results[0].email,
          phoneno: results[0].phoneno,
        };
        delete otps[phoneno]; // Remove OTP after use
        res.send("Login successful");
      }
    );
  } else {
    res.send("Invalid OTP");
  }
});

// Send OTP to email
app.post("/send-email-otp", (req, res) => {
  const { email } = req.body;
  db.query("SELECT * FROM details WHERE email = ?", [email], (err, results) => {
    if (err || results.length === 0) return res.send("Email not registered");
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otps[email] = otp;

    // Send OTP via email
    transporter.sendMail(
      {
        from: '"Dream Properties" <vanshikakayeetha117@gmail.com>',
        to: email,
        subject: "OTP for Dream Properties login",
        text: `Your OTP for login is: ${otp}`,
      },
      (error, info) => {
        if (error) {
          console.error("Email error:", error);
          return res.status(500).send("Failed to send OTP. Please try again.");
        }
        res.send("OTP sent to your email.");
      }
    );
  });
});

// Verify email OTP
app.post("/verify-email-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otps[email] && otps[email] === otp) {
    db.query(
      "SELECT * FROM details WHERE email = ?",
      [email],
      (err, results) => {
        if (err || results.length === 0) return res.send("User not found");
        req.session.user = {
          id: results[0].id,
          name: results[0].name,
          email: results[0].email,
          phoneno: results[0].phoneno,
        };
        delete otps[email];
        res.send("Login successful");
      }
    );
  } else {
    res.send("Invalid OTP");
  }
});

// Add property
app.post("/add-property", upload.single("image"), (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized: Please log in first.");
  }
  const { title, description, price, location, type } = req.body;
  const image = req.file ? req.file.filename : null;
  const owner_id = req.session.user.id;
  db.query(
    "INSERT INTO house (title, description, price, location, type, image, owner_id) VALUES (?, ?, ?, ?, ?, ?,?)",
    [title, description, price, location, type, image, owner_id],
    (err) => {
      if (err) {
        console.error("SQL Error:", err);
        return res.send("Error adding property");
      }
      res.redirect("/index.html");
    }
  );
});

// Add property to favorites
app.post("/api/favorites", (req, res) => {
  if (!req.session.user) return res.status(401).send("Login required");
  const { property_id } = req.body;
  db.query(
    "INSERT IGNORE INTO favorites (user_id, property_id) VALUES (?, ?)",
    [req.session.user.id, property_id],
    (err) => {
      if (err) return res.status(500).send("DB error");
      res.send("Added to favorites");
    }
  );
});

// Get user's favorite properties
app.get("/api/favorites", (req, res) => {
  if (!req.session.user) return res.status(401).send("Login required");
  db.query(
    `SELECT h.*, d.name AS owner_name, d.email AS owner_email, d.phoneno AS owner_phoneno
     FROM favorites f
     JOIN house h ON f.property_id = h.id
     JOIN details d ON h.owner_id = d.id
     WHERE f.user_id = ?`,
    [req.session.user.id],
    (err, results) => {
      if (err) return res.status(500).send("DB error");
      res.json(results);
    }
  );
});

// Get all properties (API)
app.get("/api/properties", (req, res) => {
  const { type, location } = req.query;
  let sql = `SELECT h.*, d.name AS owner_name,d.email AS owner_email, d.phoneno AS owner_phoneno
     FROM house h
     JOIN details d ON h.owner_id = d.id`;
  const params = [];
  const conditions = [];
  if (type) {
    conditions.push("h.type = ?");
    params.push(type);
  }
  if (location) {
    conditions.push("h.location LIKE ?");
    params.push(`%${location}%`);
  }
  if (conditions.length) {
    sql += " WHERE " + conditions.join(" AND ");
  }
  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).send("DB error");
    res.json(results);
  });
});
app.get("/api/me", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.json(null);
  }
});
app.delete("/api/favorites", (req, res) => {
  if (!req.session.user) return res.status(401).send("Login required");
  const { property_id } = req.body;
  db.query(
    "DELETE FROM favorites WHERE user_id = ? AND property_id = ?",
    [req.session.user.id, property_id],
    (err) => {
      if (err) return res.status(500).send("DB error");
      res.send("Removed from favorites");
    }
  );
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/index.html");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
