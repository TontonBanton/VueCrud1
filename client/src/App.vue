<template>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding:0;
  margin: 0;
}

.logo {
  width: 100px
}

.register input, .login input {
  display: block;
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid green;
}
.register button, .login button {
  width: 320px;
  height: 40px;
  border: 1px solid green;
  background: green;
  color: white;
  cursor: pointer;
}

</style>
