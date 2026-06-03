/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register User
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: User registered successfully
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login User
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login successful
 */

const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../Controllers/authControllers");

const {
  registerValidation,
  loginValidation,
} = require("../validate/authValidate");

const validate = require("../validate/Validates");

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  validate,
  loginUser
);

module.exports = router;