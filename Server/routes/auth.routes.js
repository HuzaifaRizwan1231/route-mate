const { Router } = require("express");
const {
  signInUser,
  signUpPassenger,
} = require("../controllers/auth.controllers");

const router = Router();
// route to sign in customer
router.post("/signin", signInUser);
router.post("/signup", signUpPassenger);

module.exports = router;
