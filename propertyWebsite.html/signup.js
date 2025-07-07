//server.js
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const db = require("./db");

const app = express();
const port = 3001;

// Parse URL-encoded bodies (from forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., index.html)
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/signup.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).send("Server error");
    }

    const sql = `INSERT INTO details (name, email, password) VALUES (?, ?, ? )`;
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting into database:", err);
        return res.status(500).send("Database error");
      }
      res.redirect("/index.html");
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
