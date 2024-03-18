<template>
  <img  class= "logo" alt="Sodaco logo" src="../assets/sodaco.png">
  <h1>Sign Up Template</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="username"/>
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to='/login'>Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',

  data() {
    return { username: '', email: '',password: '' }
  },

  methods: {
    async signUp() {
      const userInfo = { username: this.username, email: this.email, password: this.password }
      try {
        const response = await axios.post("http://localhost:3001/users", userInfo)
          if (response.status === 200 || response.status === 201) {
            //localStorage.setItem("user-info",JSON.stringify(response.data))
            this.$router.push({ name: 'LogIn'})
          }
      } catch (error) {
        alert(error.message)
      }
    }
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (user){
      this.$router.push({ name: 'HomePage'})
    }
  }

}

</script>

<style>

</style>