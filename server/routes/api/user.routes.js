const express = require("express");
const router = express.Router();
const User = require("../../Models/User.model");

router.post("/signup", (req, res) => {
  const newUser = new User({
    username: req.params.username,
    email: req.params.email,
    password: req.params.password,
  });
  newUser.save((err, data) => {
    if (err) console.error(err);
    res.send("New user created");
  });
});
