import authRoutes from "../routes/auth.route.js";
import profileRoutes from "../routes/profile.route.js";

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");

const db = require("../config/db.js");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/api/auth", authRoutes);
app.use("api/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
