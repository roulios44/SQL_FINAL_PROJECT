<template>
  <navBar />
  <h1>List of all departements</h1>
  <div class="container">
    <div class="card" v-for="departement in allDepartements" v-on:click="redirectToProfile(employee.id)">
        <div class="card-details">
            <p class="text-title">{{ departement.name }}</p>
        </div>
        <button class="card-button" v-on:click="redirectDepartementPage(departement.id)">More Info</button>
    </div>
  </div>
</template>
  <script>
  import axios from 'axios'
  import navBar from '@/components/navBar.vue'
  export default {
    data() {
      return {
        allDepartements: [],
        infoSelectDepartement: [],
      }
    },
    components:{
      navBar
    },
    methods: {
      async getAllDepartement(){
          const res = await axios.get("http://localhost/SQL_FINAL_BACK/getAllDepartement.php")
          this.allDepartements = await res.data
      },
      async redirectDepartementPage(departementID){
        const redirectURL  = new URL("http://localhost:8080/profileDepartement")
        redirectURL.searchParams.set('id',departementID)
        window.location = redirectURL
      },
    },
    async mounted(){
      await this.getAllDepartement()
    }
  }
  </script>
  <style>
  .popupDepartement{
      display:none;
      width: 99%;
      height: 90%;
      position: absolute;
      background-color: yellow;
      align-self: center;
      justify-content: center;
      align-items: center;
      z-index: 1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .popupDepartement span{
      color: red;
      padding: 0;
      margin: 0;
      width: fit-content;
      height: fit-content;
      border: none;
      align-self: flex-start;
      cursor: pointer;
    }
    .card{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
    .content{
      z-index: 2;
      margin: 50px;
    }
  </style>