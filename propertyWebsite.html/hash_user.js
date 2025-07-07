// hash_user.js
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vanshika@2007",
  database: "property",
});

db.connect();

// if (email.length === 0 || password.length === 0) {
//   console.error("Email or password is empty");
//   db.end();
//   return;
// }

app.post("/submit", (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  if (password !== confirmpassword) {
    return res.send("Passwords do not match.");
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).send("Server error");
    }

    const sql = "INSERT INTO details (name,email, password) VALUES (?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting into database:", err);
        return res.status(500).send("Database error");
      }
      res.send("User added successfully!");
    });
  });
});
