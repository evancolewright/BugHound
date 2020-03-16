const express = require("express");
const {
  validateRegister,
  validate
} = require("../../middleware/validationMiddleware");
const userController = require("../../controllers/userController");
const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

// @route    POST api/users
// @desc     Create/Register a new user.
// @access   Public
router.post("/", validateRegister(), validate, userController.registerUser);

// @route    DELETE api/users
// @desc     Delete a user
// @access   Private
router.delete("/", authMiddleware, userController.deleteUser);

module.exports = router;
