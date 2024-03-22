const express = require('express')
const router = express.Router()
const { Vehicles } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')


router.get("/", async (req, res) => {
  const listOfVehicles = await Vehicles.findAll({
    order: [
      [ 'brand', 'ASC' ]
    ]
  })
  res.json(listOfVehicles)
})

router.post("/", validateToken ,async (req, res) => {
  const newVehicle = req.body
  await Vehicles.create(newVehicle)
  res.json(newVehicle);
});


module.exports = router