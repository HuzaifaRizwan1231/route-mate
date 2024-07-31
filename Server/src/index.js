const authRoutes = require("../routes/auth.routes");
const profileRoutes = require("../routes/profile.routes");
const passengerRoutes = require("../routes/passenger.routes");
const driverRoutes = require("../routes/driver.routes");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const db = require("../config/db.js");

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
  })
);
app.use(express.json());
app.use(fileUpload());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/passenger", passengerRoutes);
app.use("/api/driver", driverRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
