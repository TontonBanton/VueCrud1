<template>
  <h1>Home Page Component Template</h1>
</template>

<script>

export default {
  name: 'HomePage',

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'SignUp'})
    }
  }
}

</script>