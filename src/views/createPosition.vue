<template>
  <head></head>
  <navBar />
    <h1>Create a new position</h1>

    <label for="position">Enter the job title : </label>
    <input type="text" name="position" id="position" v-model="position">
    
    <label for="departement">Select one of the following departements whose belongs to it :</label>
    <select name="departement" v-model="departement">
        <option v-for="item,id in allDepartements" >
          {{ item.id }} {{ item.name }}
        </option>
    </select>

    <label for="degrees">Fill in its entitled degrees : </label>
    <input type="text" name="degrees" id="degrees" v-model="degrees">

    <fieldset>
      <legend for="isDangerous">Is this position dangerous ?</legend>
      <label for="yes">
        <input type="radio" v-model="isDangerous" v-bind:value="true">Yes
      </label>
      <label for="no">
        <input type="radio" v-model="isDangerous" v-bind:value="false">No
      </label>
    </fieldset>

    <button id="btnSubmit" v-on:click="createPosition()">Create position</button>
    <p>{{ alertMessage }}</p>
  </template>
  
  <script>
  import axios from 'axios'
  import navBar from '@/components/navBar.vue'
  export default {
    data() {
      return {
        departement:"",
        alertMessage:"",
        position:"",
        degrees:"",
        isDangerous: true,
        allDepartements: [],
      }
    },
    components:{
      navBar
    },
    methods: {
      async createPosition(){
        if( !this.position ||!this.departement || !this.degrees){
          this.alertMessage = "Please enter informations into all field texts"
        }else{
          this.alertMessage = ""
          const post = await axios.post("http://localhost/SQL_FINAL_BACK/addPosition.php",
          JSON.stringify({
              "position": this.position,
              "departement": this.departement[0],
              "degrees": this.degrees,
              "isDangerous": this.isDangerous
            }))
          const res = await post.data
        }
      },
      async getAllDepartement(){
          const res = await axios.get("http://localhost/SQL_FINAL_BACK/getAllDepartement.php")
          this.allDepartements = await res.data
      },
    },
    async mounted(){
      await this.getAllDepartement()
    }
  }
  </script>
  <style>
  </style>