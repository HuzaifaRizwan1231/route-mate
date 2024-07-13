const db = require("../config/db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signInCustomer = async (req, res) => {
  try {
    const { email, password } = req.body.customer;

    // Check if user exists
    db.query("SELECT * FROM User WHERE email = ?", [email], (err, result) => {
      if (err) {
        return res.json(err);
      }
      // if no user found
      if (result.length == 0) {
        return res.json("Incorrect email or password");
      }
      //if correct email
      const validPassword = bcryptjs.compareSync(password, result[0].password);
      if (validPassword) {
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
        return res.json("Kamaal");
        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          .send({ success: true, message: `Wellcome ${result[0].name}` });
      }
    });
  } catch (error) {
    res.send(400, error.message);
  }
};

const signUpCustomer = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body.customer;

    // Check if user already exists
    db.query("SELECT * FROM User WHERE email = ?", [email], (err, result) => {
      if (err) {
        return res.json(err);
      }

      if (result.length > 0) {
        return res.json("User Already Exists");
      } else {
        // Insert if user is unique

        const salt = parseInt(process.env.SALT);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        db.query(
          "INSERT INTO User(name, email, password, phone, role, image) VALUES(?,?,?,?,'customer', 'default')",
          [name, email, hashedPassword, phone],
          (err, result) => {
            if (err) {
              return res.json(err);
            }
            const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
            res
              .cookie("access_token", token, { httpOnly: true })
              .status(201)
              .send({ success: true, message: "User Registered" });
          }
        );
      }
    });
  } catch (error) {
    res.send(400, error.message);
  }
};

module.exports = { signInCustomer, signUpCustomer };
