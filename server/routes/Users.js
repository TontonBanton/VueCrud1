const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll()
  res.json(listOfUsers)
})

router.post("/", async (req, res) => {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      username: username,
      email: email,
      password: hash
    });
    res.json(newUser);
});

module.exports = router