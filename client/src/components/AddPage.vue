<template>
  <HeaderPage />
  <form class="add">
    <input type="text" name="brand" placeholder="Brand" v-model="Vehicle.brand">
    <input type="text" name="model" placeholder="Model" v-model="Vehicle.model">
    <input type="text" name="plateno" placeholder="Plate No." v-model="Vehicle.plateno">
    <button type="button" v-on:click="addVehicle">ADD ON DATABASE</button>
  </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'

export default {
  name: 'AddPage',

  components: {
    HeaderPage
  },

  data() {
    return {
      Vehicle: { brand:'', model:'', plateno:'' }
    }
  },

  mounted() {
    let user = localStorage.getItem("accessToken")
    if (!user){
      this.$router.push({ name: 'LogIn'})
    }
  },

  methods: {
    addVehicle() {
      console.log(this.Vehicle)
    }
  }
}

</script>

<style>
form {
  margin: 20px;
}
</style>