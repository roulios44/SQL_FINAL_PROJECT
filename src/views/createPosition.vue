<template>
    <head></head>
    <h1>Create a new position</h1>
    <p>
        <label for="position">Enter your job title :</label>
        <input type="text" name="position" id="position" v-model="position">
    </p>
    <p>
        <label for="category">Enter its associated department :</label>
        <input type="text" name="category" id="category" v-model="category">
    </p>
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
  import { is } from '@babel/types'
import axios from 'axios'
  export default {
    data() {
      return {
        alertMessage:"",
        position:"",
        category:"",
        degrees:"",
        isDangerous: true,
      }
    },
    methods: {
      async createPosition(){
        if( !this.position ||!this.category || !this.degrees){
          this.alertMessage = "Please enter informations into all field texts"
        }else{
          this.alertMessage = ""
          const post = await axios.post("http://172.19.97.30/SQL_FINAL_PROJECT/addPosition.php",
          JSON.stringify({
              "position": this.position,
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