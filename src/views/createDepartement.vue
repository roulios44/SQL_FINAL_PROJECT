<template>
    <head></head>
    <h1>Create a departement in our company</h1>
    <p>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name">
    </p>
    <p>
        <label for="location">location</label>
        <input type="text" name="location" id="location" v-model="location">
    </p>
    <p>
        <label for="adress">adress</label>
        <input type="text" name="adress" id="adress" v-model="adress">
    </p>
    <button id="btnSubmit" class="btn btn-primary" style="align:center" v-on:click="createDepartement()">Create departement</button>
    <p>{{ alertMessage }}</p>
</template>

<script>
export default {
    data() {
      return {
        name:"",
        location:"",
        adress:"",
        alertMessage: "",
      }
    },
    methods: {
      async createDepartement(){
        if(!this.name ||!this.location || !this.adress){
          this.alertMessage = "Please enter informations into all texts fields"
        }else{
          this.alertMessage = ""
          const post = await fetch("http://localhost/SQL_FINAL_BACK/addDepartement.php",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "name": this.name,
              "adress": this.adress,
              "location": this.location
            })
          })
        }
        }
    },
    async mounted() {
      
    }
  }
</script>
<style>
</style>