<template>
  <img  class= "logo" alt="Sodaco logo" src="../assets/sodaco.png">
  <h1>Sign Up Template</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="username"/>
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button v-on:click="signUp">Sign Up</button>
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
      try {
        const response = await axios.post("http://localhost:3001/users", {
          username: this.username,
          email: this.email,
          password: this.password
        })
          //SUCCESSFULL POST
          if (response.status === 200 || response.status === 201) {
            localStorage.setItem("user-info",JSON.stringify(response.data))
            this.$router.push({ name: 'HomePage'})
          }
      } catch (error) {
          alert(error.message);
      }
    }
  },

  mounted() {
    let user = localStorage.getItem("user-info")
    if (user){
      this.$router.push({ name: 'HomePage'})
    }
  }

}

</script>

<style>
.logo {
  width: 100px
}

.register input {
  display: block;
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid green;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid green;
  background: green;
  color: white;
  cursor: pointer;
}

</style>