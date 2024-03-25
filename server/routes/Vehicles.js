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

router.get('/byid/:id', async (req, res) => {
  const id = req.params.id
  const vehicle = await Vehicles.findByPk(id)
  res.json(vehicle)
})


router.put('/byid/:id', async (req, res) => {
  const id = req.params.id
  const { brand, model, plateno } = req.body
  const editVehicle = await Vehicles.update( {brand: brand, model: model, plateno: plateno}, { where:{id:id}} )
  res.json(editVehicle);
});

module.exports = router