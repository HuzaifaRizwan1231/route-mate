const { Router } = require("express");
const {
  signInCustomer,
  signUpCustomer,
} = require("../controllers/auth.controller");

const router = Router();
// route to sign in customer
router.post("/signin", signInCustomer);
router.post("/signup", signUpCustomer);

export default router;
