<template>
  <HeaderPage />
  <h1>Home Page Component Template</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
  name: 'HomePage',

  components: {
    HeaderPage
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'SignUp'})
    }
  }
}

</script>./HeaderPage.vue