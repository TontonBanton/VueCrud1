<template>
  <HeaderPage />
  <form class="add">
    <input type="text" name="brand" placeholder="Brand" v-model="Vehicle.brand" required>
    <input type="text" name="model" placeholder="Model" v-model="Vehicle.model" required>
    <input type="text" name="plateno" placeholder="Plate No." v-model="Vehicle.plateno" required>
    <input type="file" name="photo" accept="image/jpeg,image/jpg" @change="handleFileChange" required>
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
      Vehicle: { brand:'', model:'', plateno:'', photo:'' }
    }
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    }
  },

  methods: {

    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.Vehicle.photo = selectedFile.name; // Update the data property with the selected file's name
      } else {
        this.Vehicle.photo = '';                // Clear the data property if no file is selected
      }
    },

    async addVehicle() {
      if (!this.Vehicle.brand || !this.Vehicle.model || !this.Vehicle.plateno || !this.Vehicle.photo) {
        alert('Please fill out all fields.')
        return
      }

      const vehicleInfo = {
        brand: this.Vehicle.brand,
        model: this.Vehicle.model,
        plateno: this.Vehicle.plateno,
        photo: this.Vehicle.photo
      }
      const userAccess = { headers: { accessToken: localStorage.getItem("accessToken") }}

      try {
        const response = await axios.post("http://localhost:3001/vehicles", vehicleInfo, userAccess)
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
  .add {
    margin: 50px;
  }
</style>