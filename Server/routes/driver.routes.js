const { Router } = require("express");
const { authenticateDriver } = require("../middlewares/authenticateDriver");
const { getDriver } = require("../controllers/driver.controllers");

const router = Router();

router.get("/get", authenticateDriver, getDriver);

module.exports = router;
