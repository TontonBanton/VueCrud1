<template>
  <HeaderPage />
  <table border="1">
    <tr v-for="item in vehicles" :key="item.id">
      <td>{{ item.brand }}</td>
      <td>{{ item.model }}</td>
      <td>{{ item.plateno }}</td>
      <td><img :src="require('../assets/' + item.photo)" alt="Vehicle Photo"></td>
      <td>
        <router-link :to="'/updatevehicle/' + item.id">UPDATE</router-link>
        <button v-on:click="confirmDelete(item.id)">REMOVE</button>
      </td>
    </tr>
  </table>

</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'

export default {
  name: 'HomePage',

  components: {
    HeaderPage
  },

  data() {
    return { vehicles: [] }
  },

  async mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    } else {
      let response = await axios.get('http://localhost:3001/vehicles')
      this.vehicles = response.data
    }
  },

  methods: {
    async confirmDelete(id) {
      const confirmed = window.confirm("Are you sure you want to delete this vehicle?");
        if (confirmed) {
          await this.deleteVehicle(id);
        } else {
          alert("Deletion canceled");
        }
    },
    async deleteVehicle(id) {
      const userAccess = { headers: { accessToken: localStorage.getItem("accessToken") }}
      try {
        const response = await axios.delete(`http://localhost:3001/vehicles/byid/` + id, userAccess)
        if (response.data.error) {
          alert(response.data.error)
          this.$router.push({ name: 'LogIn' })
        } else {
          //this.$router.push({ name: 'HomePage' })
          window.location.reload()
        }
      } catch (error) {
        console.log("error brad hahaha")
      }
    }
  }

}

</script>

<style>
  @import '../assets/css/home.css';
</style>