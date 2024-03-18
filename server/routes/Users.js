const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll()
  res.json(listOfUsers)
})

router.post("/", async (req, res) => {
    const { username, email, password } = req.body
    const hash = await bcrypt.hash(password, 10)
    const newUser = await Users.create({
      username: username,
      email: email,
      password: hash
    });
    res.json(newUser);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      res.json({ error: 'User Does Not Exist' });
    } else {
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          res.json({ error: 'Wrong password' })
        } else {
          res.json({
            username: user.username,
            email: user.email,
            password: user.password
          })
        }
      })

    }
  }
)

module.exports = router