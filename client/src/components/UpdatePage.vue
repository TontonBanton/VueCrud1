<template>
  <HeaderPage />
  <form class="add">
    <!---<img :src="require(`../assets/${this.Vehicle.photo}`)"> -->
    <img :src="vehiclePhoto" alt="Vehicle Photo">
    <input type="text" name="brand" placeholder="Brand" v-model="Vehicle.brand" required>
    <input type="text" name="model" placeholder="Model" v-model="Vehicle.model" required>
    <input type="text" name="plateno" placeholder="Plate No." v-model="Vehicle.plateno" required>
    <button type="button" v-on:click="updateVehicle">UPDATE DATA ON LIST</button>
  </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'

export default {
  name: 'UpdatePage',

  components: {
    HeaderPage
  },

  data() {
    return {
      Vehicle: { brand:'', model:'', plateno:''}
    }
  },

  computed: {
    vehiclePhoto() {
      if (this.Vehicle.photo) {
        return require(`../assets/${this.Vehicle.photo}`);
      } else {
        return require('../assets/no.jpg');
      }
    }
  },

  async mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    }
    let response = await axios.get('http://localhost:3001/vehicles/byid/' + this.$route.params.id)
    this.Vehicle = response.data
  },

  methods: {
    async updateVehicle(){
      if (!this.Vehicle.brand || !this.Vehicle.model || !this.Vehicle.plateno) {
        alert('Please fill out all fields.')
        return
      }

      const vehicleInfo = {
        brand: this.Vehicle.brand,
        model: this.Vehicle.model,
        plateno: this.Vehicle.plateno
      }
      const userAccess = { headers: { accessToken: localStorage.getItem("accessToken") }}
      try {
        const response = await axios.put('http://localhost:3001/vehicles/byid/' + this.$route.params.id, vehicleInfo, userAccess)
        if (response.data.error) {
          alert(response.data.error)
          this.$router.push({ name: 'LogIn' })
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
img {
  /* border: 1px solid green; */
  padding: 15px;
  max-width: 300px; /* Limit the maximum width of the image */
  max-height: 300px; /* Limit the maximum height of the image */
  width: auto; /* Allow the image width to adjust dynamically */
}
</style>