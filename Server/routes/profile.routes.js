const { Router } = require("express");
const { uploadImage } = require("../controllers/profile.controllers");

const router = Router();

router.post("/uploadImage", uploadImage);

module.exports = router;
