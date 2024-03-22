<template>
  <div class="container">
    <h1>404</h1>
    <h3>ERROR - PAGE NOT FOUND</h3>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style>
.container {
  display: flex;              /* Use flexbox layout */
  flex-direction: column;     /* Stack child elements vertically */
  align-items: center         /* Vertically center */
}
h1, h3{
  margin: 0;
}
h1 {
  font-size: 100px;
}
</style>