<template>
  <img  class= "logo" alt="Sodaco logo" src="../assets/sodaco.png">
  <div class="login">
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button v-on:click="logIn">Log In</button>
    <p>
      <router-link to='/signup'>Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  nanme: 'LogIn',

  data() {
    return { email: '', password: '' }
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (user){
      this.$router.push({ name: 'HomePage'})
    }
  },

  methods: {
    async logIn() {
      const logInfo = { email: this.email, password: this.password }
      try {
        const response = await axios.post("http://localhost:3001/users/login", logInfo)
        if (response.data.error) {
          alert(response.data.error)
        } else {
          //localStorage.setItem("accessToken", JSON.stringify(response.data))
          localStorage.setItem("accessToken", response.data.token + JSON.stringify(response.data.username))
          this.$router.push({ name: 'HomePage' })
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }

}

</script>

<style>
</style>