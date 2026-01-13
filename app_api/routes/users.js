const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");
const { protect } = require("../middleware/auth");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Private routes
router.get("/me", protect, getMe);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;
