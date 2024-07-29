const authRoutes = require("../routes/auth.routes");
const profileRoutes = require("../routes/profile.routes");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const db = require("../config/db.js");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(fileUpload());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
