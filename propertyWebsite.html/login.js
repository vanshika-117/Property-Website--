const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

document.querySelector("form").addEventListener("submit", function (e) {
  // Save email to localStorage before submitting
  const email = document.getElementById("email").value;
  localStorage.setItem("userEmail", email);
});

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vanshika@2007",
  database: "property",
});

db.connect((err) => {
  if (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM details WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.send("Invalid username or password.");
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }

      if (result) {
        res.redirect("index.html");
      } else {
        res.send("Invalid username or password.");
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
