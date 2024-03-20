const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const db = require('./models')

//Routers
const usersRouter = require('./routes/Users')
app.use('/users', usersRouter)
const vehiclesRouter = require('./routes/Vehicles')
app.use('/vehicles', vehiclesRouter)

db.sequelize.sync().then(() =>[
  app.listen(3001, () => {
    console.log("server running at port 3001")
  })
])
