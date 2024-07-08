const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");

const db = require("./config/db.js");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Queries
app.post("/signup", (req, res) => {
  const { name, email, password, phone } = req.body.customer;
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
        "INSERT INTO User(name, email, password, phone, role, image) VALUES(?,?,?,?,'customer', 'default')",
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

app.post("/signin", (req, res) => {
  const { email, password } = req.body.customer;
  let numOfRows;

  // Check if user already exists
  db.query(
    "SELECT * FROM User WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        return res.json(err);
      }
      numOfRows = result.length;
      if (numOfRows == 1) {
        return res.json(result);
      } else {
        //if incorrect credentials
        return res.json("Incorrect email or password");
      }
    }
  );
});

app.post("/uploadimage", (req, res) => {
  const { email, oldFileName } = req.body;
  const file = req.files.file;
  const destinationFolder = "../Client/src/assets/images/profilePics";

  // Delete old file if exists
  if (fs.existsSync(path.join(destinationFolder, oldFileName))) {
    fs.unlinkSync(path.join(destinationFolder, oldFileName));
  }

  //Renaming the file according to the current timestamp
  const originalFileName = file.name;
  const timeStamp = Date.now();
  const newFileName = `${timeStamp}_${originalFileName}`;

  // Moving the file to the destination folder
  file.mv(path.join(destinationFolder, newFileName), (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    //Inserting the file name into the database
    db.query(
      "UPDATE User SET image = ? WHERE email = ?",
      [newFileName, email],
      (err, result) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(newFileName);
        }
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
