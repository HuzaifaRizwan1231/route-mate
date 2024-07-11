const { Router } = require("express");
const { uploadImage } = require("../controllers/profile.controller");

const router = Router();

router.post("/uploadImage", uploadImage);

export default router;
