<template>
    <head></head>
    <h1>Create a new position</h1>
    <p>
        <label for="position">Enter your job title :</label>
        <input type="text" name="position" id="position" v-model="position">
    </p>
    <div class="department">
      <p>Select the departement to add a job</p>
            <select name="departement" v-model="departement">
                <option v-for="item,id in allDepartements" >
                    {{ item.id }} {{ item.name }}
                </option>
            </select>
            {{ departement[0] }}
        </div>
    <p>
        <label for="degrees">Fill in its entitled degrees :</label>
        <input type="text" name="degrees" id="degrees" v-model="degrees">
    </p>
    <p>   
      <label for="isDangerous">Is your position dangerous ?</label>
      <p><input type="radio" v-model="isDangerous" v-bind:value="true">Yes</p>
      <p><input type="radio" v-model="isDangerous" v-bind:value="false">No</p>
    </p>
    <button id="btnSubmit" class="btn btn-primary" style="align:center" v-on:click="createPosition()">Create position</button>
    <p>{{ alertMessage }}</p>
  </template>
  
  <script>
  import axios from 'axios'
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