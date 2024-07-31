const { Router } = require("express");
const {
  signUpPassenger,
  signInPassenger,
  signUpDriver,
  signInDriver,
} = require("../controllers/auth.controllers");

const router = Router();
// route to sign in customer
router.post("/signInPassenger", signInPassenger);
router.post("/signInDriver", signInDriver);
router.post("/signUpPassenger", signUpPassenger);
router.post("/signUpDriver", signUpDriver);

module.exports = router;
