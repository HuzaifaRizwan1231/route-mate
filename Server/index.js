const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const db = require("./config/db.js");

app.use(cors());
app.use(express.json());

// Queries
app.post("/signup", (req, res) => {
  const { name, email, password, phone } = req.body.user;
  let numOfRows;

  // Check if user already exists
  db.query("SELECT * FROM User WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.json(err);
    }
    numOfRows = result.length;
    if (numOfRows > 0) {
      return res.json("User Already Exists");
    } else {
      // Insert if user is unique
      db.query(
        "INSERT INTO User(name, email, password, phone, role) VALUES(?,?,?,?,'customer')",
        [name, email, password, phone],
        (err, result) => {
          if (err) {
            return res.json(err);
          }
          return res.json("Inserted Successfully");
        }
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
