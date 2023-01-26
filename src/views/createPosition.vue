<template>
    <head></head>
    <h1>Create a position in a department</h1>
    <p>
        <label for="jobTitle">Enter your job title :</label>
        <input type="text" name="jobTitle" id="jobTitle" v-model="jobTitle">
    </p>
    <p>
        <label for="category">Enter the associated department :</label>
        <input type="text" name="category" id="category" v-model="category">
    </p>
    <p>
        <label for="degrees">Fill in the entitled degrees :</label>
        <input type="text" name="degrees" id="degrees" v-model="degrees">
    </p>
    <p>
        <label for="isDangerous">Is this position dangerous ?</label>
        <input type="bool" name="isDangerous" id="isDangerous" v-model="isDangerous">
        <option value="true">Yes</option>
        <option value="false">No</option>
    </p>
    <button id="btnSubmit" class="btn btn-primary" style="align:center" v-on:click="createDepartement()">Create position</button>
    <p>{{ alertMessage }}</p>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        jobTitle:"",
        category:"",
        degrees:"",
        isDangerous: "",
      }
    },
    methods: {
      async createPosition(){
        if(!this.jobTitle ||!this.category || !this.degrees || this.isDangerous){
          this.alertMessage = "Please enter informations into all field texts"
        }else{
          this.alertMessage = ""
          const post = await axios.post("http://172.19.97.30/SQL_FINAL_PROJECT/addPosition.php",
          JSON.stringify({
              "jobTitle": this.jobTitle,
              "category": this.category,
              "degrees": this.degrees,
              "isDangerous": this.isDangerous
            }))
          const res = await post.data()
          console.log(res)
        }
        }
    },
  }
  </script>
  <style>
  </style>