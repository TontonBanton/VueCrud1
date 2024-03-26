<template>
  <div class="nav">
    <div class="left-items">
      <router-link to="/">HOME</router-link>
      <router-link to="/addvehicle">ADD</router-link>
      <a href="#" v-on:click="logout">LOG OUT</a>
    </div>
    <div class="right-items">
      <h4 class="user">User : {{ username }} </h4>
      <img class="logo" alt="Sodaco logo" src="../assets/sodaco.png">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HeaderPage',

  data() {
    return { username: '' }
  },

  async mounted() {
    const userAccess = { headers: { accessToken: localStorage.getItem("accessToken") }}
    let response = await axios.get('http://localhost:3001/users/uname', userAccess)
    this.username = response.data.username
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