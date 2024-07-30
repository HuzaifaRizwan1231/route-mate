const db = require("../config/db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signInPassenger = async (req, res) => {
  try {
    const { email, password } = req.body.passenger;

    // Check if user exists
    db.query(
      "SELECT * FROM Passenger WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          return res.json({ success: false, error: err.message });
        }
        // if no user found
        if (result.length == 0) {
          return res.send({
            success: false,
            error: "Incorrect Email or Password",
          });
        }
        //if correct email
        const validPassword = bcryptjs.compareSync(
          password,
          result[0].password
        );
        if (validPassword) {
          const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
          res
            .cookie("passenger_token", token, { httpOnly: true })
            .status(200)
            .send({
              success: true,
              message: `Welcome ${result[0].name}`,
              passenger: {
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                phone: result[0].phone,
                image: result[0].image,
                cnic: result[0].CNIC,
              },
            });
        }
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: err.message });
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
          return res.send({ success: false, error: err.message });
        }

        if (result.length > 0) {
          return res.send({ sucess: false, error: "User Already Exists" });
        } else {
          // Insert if user is unique

          const salt = parseInt(process.env.SALT);
          const hashedPassword = bcryptjs.hashSync(password, salt);
          db.query(
            "INSERT INTO Passenger(name, email, password, phone, image, CNIC) VALUES(?,?,?,?,?, ?)",
            [name, email, hashedPassword, phone, image, cnic],
            (err, result) => {
              if (err) {
                return res.send({ success: false, error: err.message });
              }
              const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
              res
                .cookie("passenger_token", token, { httpOnly: true })
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
    res.status(400).send({ success: false, error: error.message });
  }
};

module.exports = { signInPassenger, signUpPassenger };
