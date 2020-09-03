const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const checkToken = require("../config/config");

const User = require('../models/user');

/* 
    @route POST api/auth/login
    @desc login existing user
    @access public
*/

router.post('/login', async (req, res) => {
  console.log(req.body)
  let { email, password } = req.body;
  try {
    //search db for user with email
    let user = await User.findOne({ email });
    // check if user exists
    if (!user) {
      return res.status(400).json({ message: "user not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "wrong credentials" });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };
    //gives you a token on login
    jwt.sign(
      payload,
      "exploradora",
      { expiresIn: 360000000 },
      (err, token) => {
        if (err) throw err;     
        res
          .status(200)
          .json({ token, message: "logged in successfully!", user });
      }
    );
  } catch (error) {
    res.status(500).json({ 
        error: error, 
        message: "unable to login"
    })
  }
});

/* 
    @route POST api/auth/autologin
    @desc automatically login existing user if token is found
    @access public
*/
router.get('/autologin', checkToken, async (req, res) => {
  try {
    let user = await User.findById(req.user.id, "-password");

    res.status(200).json({
      message: "automatically logged in",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "NOT auto logged in",
    });
  }
});

/* 
    @route POST api/auth/register
    @desc register new user
    @access public
*/

router.post('/register', async (req, res) => {
  console.log(req.body)
  let { username, email, password, confirmPassword } = req.body;
  try {
    // check if user already exists
    let emailExists = await User.findOne({ email });
    let usernameExists = await User.findOne({ email });

    if (emailExists || usernameExists) {
      return res.status(400).json({ message: "username or email is already taken!" });
    }

    // confirm password input
    if (password === confirmPassword) {
      // hash password before saving user
      let hashedPassword = await bcrypt.hash(password, saltRounds);
      let user = new User({ username, email, password: hashedPassword, });
      // save user to database
      let savedUser = await user.save();
      // provide token once user is saved
      if (savedUser) {
          // res.status(201).json({ message: "user registered successfully!" });
          const payload = {
            savedUser: {
              id: savedUser._id,
            },
          };
          //gives you a token on login
          jwt.sign(
            payload,
            "exploradora",
            { expiresIn: 360000000 },
            (err, token) => {
              if (err) throw err;     
              res
                .status(200)
                .json({ token, message: "user registered successfully!", user });
            }
          );
      }
    } else {
      console.log("passwords do not match")
    }
  } catch (error) {
    res.status(500).json({ 
        error: error, 
        message: "unable to register"
    })
  }
});

module.exports = router
