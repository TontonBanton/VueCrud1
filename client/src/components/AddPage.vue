<template>
  <HeaderPage />
  <form class="add">
    <input type="text" name="brand" placeholder="Brand" v-model="Vehicle.brand">
    <input type="text" name="model" placeholder="Model" v-model="Vehicle.model">
    <input type="text" name="plateno" placeholder="Plate No." v-model="Vehicle.plateno">
    <button type="button" v-on:click="addVehicle">ADD ON DATABASE</button>
  </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'

export default {
  name: 'AddPage',

  components: {
    HeaderPage
  },

  data() {
    return {
      Vehicle: { brand:'', model:'', plateno:'' }
    }
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    }
  },

  methods: {

    async addVehicle() {
      const vehicleInfo = { brand: this.Vehicle.brand, model: this.Vehicle.model,  plateno: this.Vehicle.plateno }
      const userAccess = { headers: { accessToken: localStorage.getItem("accessToken") }}
      try {
        const response = await axios.post("http://localhost:3001/vehicles", vehicleInfo, userAccess)
        if (response.data.error) {
          console.log(response.data.error)
        } else {
          this.$router.push({ name: 'HomePage' })
        }
      } catch (error) {
        console.log("error brad hahaha")
      }

    }
  }
}

</script>

<style>
  .add {
    margin: 50px;
  }
</style>