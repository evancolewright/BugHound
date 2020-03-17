const express = require("express");
const {
  validateRegister,
  validate
} = require("../../middleware/validationMiddleware");
const authController = require("../../controllers/authController");
const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

// @route    POST api/auth
// @desc     Get a user by token.
// @access   Private
router.get("/", authMiddleware, authController.getUser);

// @route    POST api/auth
// @desc     Authenticate a user.
// @access   Private
router.post('/', validateRegister(), validate, authController.authUser);

module.exports = router;