<template>
  <HeaderPage />
  <h2>Welcome: {{ name }}</h2>
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

      //Get UserName from the token
      const parts = user.split('"')               // Splits token into array " as the delimeter
      const username = parts[parts.length - 2]    // Extract the 2nd item on the array [ jwtsekreto " username " _ ]

      // Capitalize the first letter
      const CapName = username[0].toUpperCase() + username.slice(1);  //Capitalize 1stletter + rest of the string start w/ 2ndletter
      this.name = CapName

    }
  }

}

</script>