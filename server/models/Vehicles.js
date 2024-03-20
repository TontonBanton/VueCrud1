module.exports = (sequelize, DataTypes) => {

  const Vehicles = sequelize.define("Vehicles", {
    brand:{
      type: DataTypes.STRING,
      allownull: false
    },
    model:{
      type: DataTypes.STRING,
      allownull: false
    },
    plateno:{
      type: DataTypes.STRING,
      allownull: false
    },
    photo:{
      type: DataTypes.STRING,
      allownull: false
    }
  })

   return Vehicles
}