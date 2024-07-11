import db from "../config/db";

export const signInCustomer = async (req, res) => {
  try {
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
  } catch (error) {
    res.send(400, error.message);
  }
};

export const signUpCustomer = async (req, res) => {
  try {
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
            db.query(
              "SELECT * FROM User WHERE user_id = ?",
              [result.insertId],
              (err, response) => {
                if (err) {
                  return res.json(err);
                }
                return res.json(response);
              }
            );
          }
        );
      }
    });
  } catch (error) {
    res.send(400, error.message);
  }
};
