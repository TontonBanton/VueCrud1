<template>
  <HeaderPage />
  <h2>Welcome: {{ username }}</h2>

  <table border="1">
    <tr>
      <td>Brand</td><td>Model</td><td>Plate No.</td><td>Photo</td>
    </tr>
    <tr v-for="item in vehicles" :key="item.id">
      <td>{{ item.brand }}</td>
      <td>{{ item.model }}</td>
      <td>{{ item.plateno }}</td>
      <td><img :src="require('@/assets/' + item.photo)" alt="Vehicle Photo"></td>
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
    return { username: '', vehicles: [] }
  },

  async mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    } else {
      //GET USERNAME FROM TOKEN
      const parts = user.split('"')               // Splits token into array " as the delimeter
      const username = parts[parts.length - 2]    // Extract the 2nd item on the array [ jwtsekreto " username " _ ]
      // Capitalize the first letter
      this.username = username[0].toUpperCase() + username.slice(1) // Capitalize 1stletter + rest of the string start w/ 2ndletter

      let response = await axios.get('http://localhost:3001/vehicles')
      this.vehicles = response.data
    }
  }

}

</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
}
table img {
  max-height: 80px;
}
td {
  width: 160px;
  height: 40px;
}
</style>