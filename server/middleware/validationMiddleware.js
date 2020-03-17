const { body, validationResult } = require("express-validator");

const validateRegister = () => {
  return [
    body('name', 'Please input your name.').not().isEmpty(),
    body('email', 'Please input a valid email.').isEmail(),
    body('password', 'Please input a password with 6 or more characters.').isLength({ min: 6 })
  ];
};

const validateLogin = () => {
  return [
    body('email', 'Please input a valid email.').isEmail(),
    body('password', 'Please input a password with 6 or more characters.').isLength({ min: 6 })
  ];
};

const validate = (req, res,next) => {
    console.log(req.body.email);
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(401).json({
      errors: extractedErrors,
    })
};

module.exports = {
    validateRegister,
    validateLogin,
    validate
}
