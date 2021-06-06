const router = require("express").Router();
const User = require("../Models/User.model");
const bcrypt = require("bcryptjs");
const {
  registerValidation,
  loginValidation,
} = require("../config/validation/validation");

router.post("/register", async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already used");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const userSaved = await user.save();
    res.json({ userSaved });
  } catch (err) {
    res.status(400).send(err);
    console.log(err, "Error saving user");
  }
});

module.exports = router;
