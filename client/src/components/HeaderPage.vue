<template>
  <div class="nav">
    <div class="left-items">
      <router-link to="/">HOME</router-link>
      <router-link to="/addvehicle">ADD</router-link>
      <a href="#" v-on:click="logout">LOG OUT</a>
    </div>
    <div class="right-items">
      <h4 class="user">User : {{"Get Name on API AccessToken"}} </h4>
      <img class="logo" alt="Sodaco logo" src="../assets/sodaco.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderPage',

  data() {
    return { username: '' }
  },

  mounted() {
    //let user = localStorage.getItem("accessToken")
    //if (user) {
      //GET USERNAME FROM TOKEN
      //const parts = user.split('"')                                   // Splits token into array " as the delimeter
      //const username = parts[parts.length - 2]                        // Extract the 2nd item on the array [ jwtsekreto " username " _ ]
      //this.username = username[0].toUpperCase() + username.slice(1)   // Capitalize 1stletter + rest of the string start w/ 2ndletter
    //}
  },

  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name:'LogIn' })
    }
  }
}

</script>

<style>
  @import '../assets/css/header.css';
</style>