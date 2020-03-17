const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Register User

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

    user = new User({
      name,
      email,
      avatar,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user
        });
      }
    );
  } catch (err) {
    // TODO
    console.log(err.msg, "======");
    console.log(err);
  }
};

// Delete User

exports.deleteUser = async (req, res) => {
    await User.deleteOne({ _id: req.user.id });
    res.status(200).json({
        message: 'User Deleted!'
    })
};
