export const authenticatePassenger = async (req, res, next) => {
  try {
    const token = await req.cookies.passenger_token;
    if (token === undefined) {
      return res.status(401).send("Please Login to Continue");
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const passengerEmail = decode.email;
    const query = `SELECT * FROM Passenger WHERE email = ?`;
    connection.query(query, [passengerEmail], (err, result) => {
      if (err) {
        return res.status(401).send({ error: err.message });
      }
      if (result.length === 0) {
        return res.status(401).send("Please Login to Continue");
      }
      req.passengerId = result[0].passengerId;
      next();
    });
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};
