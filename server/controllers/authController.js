const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Get User by token

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

// Auth User

exports.authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    
    let user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

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
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err);
  }
};
