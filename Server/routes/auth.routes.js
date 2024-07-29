const { Router } = require("express");
const {
  signUpPassenger,
  signInPassenger,
} = require("../controllers/auth.controllers");

const router = Router();
// route to sign in customer
router.post("/signInPassenger", signInPassenger);
router.post("/signUpPassenger", signUpPassenger);

module.exports = router;
