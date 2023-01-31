<template>
  <navBar />
  <head></head>
  <h1>Create a new departement</h1>
  
  <label for="name">Enter the department's name : </label>
  <input type="text" name="name" id="name" v-model="name">
  
  <label for="location">Enter its location : </label>
  <input type="text" name="location" id="location" v-model="location">
  
  <label for="adress">Enter its address : </label>
  <input type="text" name="adress" id="adress" v-model="adress">
  
  <button id="btnSubmit" v-on:click="createDepartement()">Create departement</button>
  <p>{{ alertMessage }}</p>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
export default {
  data() {
    return {
      name:"",
      location:"",
      adress:"",
      alertMessage: "",
    }
  },
  components: {
    navBar
  },
  methods: {
    async createDepartement(){
      if(!this.name ||!this.location || !this.adress){
        this.alertMessage = "Please enter informations into all texts fields"
      } else {
        this.alertMessage = ""
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/addDepartement.php",
          JSON.stringify({
              "name": this.name,
              "adress": this.adress,
              "location": this.location
            }))
        const res = await post.data
      }
    }
  },
}
</script>
<style>
</style>