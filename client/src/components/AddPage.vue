<template>
  <HeaderPage />
  <h3>Add Template</h3>
  <img  class= "logo" alt="Sodaco logo" src="../assets/sodaco.png">
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
  name: 'AddPage',

  components: {
    HeaderPage
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    }
  }
}

</script>