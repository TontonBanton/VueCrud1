<template>
  <div class="nav">
    <div class="left-items">
      <router-link to="/">HOME</router-link>
      <router-link to="addvehicle">ADD</router-link>
      <router-link to="updatevehicle">UPDATE</router-link>
      <a href="#" v-on:click="logout">LOG OUT</a>
    </div>
  <img class="logo" alt="Sodaco logo" src="../assets/sodaco.png">
  </div>
</template>

<script>

export default {
  name: 'HeaderPage',

  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name:'LogIn' })
    }
  }
}

</script>

<style>
.nav {
  background-color: green;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav a {
  float: left;
  color: whitesmoke;
  padding: 15px;
  text-align: center;
  height: 15px;
  text-decoration: none;
  /*border: 1px solid black */
}
.nav a:hover {
  background: black;
  color: white;
}

.left-items {
  display: flex;
  gap: 5px;
  /*border: 1px solid black */
}
.nav .logo {
  margin-top: 0;
  max-width: 45px;
  max-height: 40px;
  padding: 5px;
  border: 1px solid black
}

</style>