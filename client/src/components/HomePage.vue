<template>
  <HeaderPage />
  <h2>{{ name }}</h2>
  <img  class= "logo" alt="Sodaco logo" src="../assets/sodaco.png">
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
  name: 'HomePage',
  data(){
    return{ name: '' }
  },

  components: {
    HeaderPage
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    } else {
      const tokenWithJson = user
      const parts = tokenWithJson.split('"');
      //const jwt = parts[0].trim();
      const jsonPayload = parts.slice(1).join('"').trim();
      // Parse the JSON payload
      try {
        const payloadObject = JSON.parse(jsonPayload);
        this.name = payloadObject.username;
      } catch (error) {
        console.error('Error parsing JSON payload:', error);
      }
    }


  }

}

</script>