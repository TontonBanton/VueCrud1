<template>
  <HeaderPage />
  <table border="1">
    <tr v-for="item in vehicles" :key="item.id">
      <td>{{ item.brand }}</td>
      <td>{{ item.model }}</td>
      <td>{{ item.plateno }}</td>
      <td><img :src="require('../assets/' + item.photo)" alt="Vehicle Photo"></td>
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
  }

}

</script>

<style>
table {
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
table img {
  max-height: 60px;
}
td {
  width: 200px;
}
</style>