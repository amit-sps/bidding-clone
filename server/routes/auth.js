const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authmiddleware");
const {
  validateRegister,
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
  updateEmailValidation,
} = require("../Validations/auth-validation");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  updateEmail,
  getProfile,
} = require("../controllers/auth");

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/profile", verifyToken, getProfile);
router.post("/forgotPassword", validateForgotPassword, forgotPassword);
router.post("/:token", validateResetPassword, resetPassword);

// update the logged user email
router.put("/update_email", updateEmailValidation, verifyToken, updateEmail);

module.exports = router;
