<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="addvehicle">Add Vehicle</router-link>
    <router-link to="updatevehicle">Update Vehicle</router-link>
    <a href="#" v-on:click="logout">Logout</a>
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
}
.nav a {
  float: left;
  color: whitesmoke;
  padding: 15px;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  margin-right: 5px;

}
.nav a:hover {
  background: black;
  color: white;
}

</style>