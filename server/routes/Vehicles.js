const express = require('express')
const router = express.Router()
const { Vehicles } = require('../models')


router.get("/", async (req, res) => {
  const listOfVehicles = await Vehicles.findAll()
  res.json(listOfVehicles)
})


module.exports = router