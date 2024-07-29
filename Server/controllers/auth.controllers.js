const db = require("../config/db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signInUser = async (req, res) => {
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

const signUpPassenger = async (req, res) => {
  try {
    const { name, email, image, password, phone, cnic } = req.body.passenger;

    // Check if user already exists
    db.query(
      "SELECT * FROM Passenger WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          return res.json(err);
        }

        if (result.length > 0) {
          return res.json({ sucess: false, error: "User Already Exists" });
        } else {
          // Insert if user is unique

          const salt = parseInt(process.env.SALT);
          const hashedPassword = bcryptjs.hashSync(password, salt);
          db.query(
            "INSERT INTO Passenger(name, email, password, phone, image, CNIC) VALUES(?,?,?,?,?, ?)",
            [name, email, hashedPassword, phone, image, cnic],
            (err, result) => {
              if (err) {
                return res.json(err);
              }
              const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
              res
                .cookie("access_token", token, { httpOnly: true })
                .status(201)
                .send({
                  success: true,
                  message: "Passenger Registered",
                  passenger: { name, email, password, phone, image, cnic },
                });
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { signInUser, signUpPassenger };
