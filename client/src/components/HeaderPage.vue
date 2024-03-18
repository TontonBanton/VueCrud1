<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Vehicle</a>
    <a href="#">Update Vehicle</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
  export default {
    name: 'HeaderPage'
  }
</script>

<style>
.nav {
  background-color: black;
  overflow: hidden;
}
.nav a {
  float: left;
  color: green;
  padding: 15px;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  margin-right: 5px;

}
.nav a:hover {
  background: gray;
  color: white;
}

</style>