<template>
  <navBar />
  <h1>List of all departements</h1>
    <div v-for="departement,id in allDepartements" v-on:click="changeDisplay(id,departement.id)">
        <div class="popupDepartement" :id="id">
          <span v-on:click="closePopup(id)">X</span>
          <div v-for="depinfo in infoSelectDepartement">
            <h1>{{ depinfo.id }}</h1>
          </div>
        </div>
        <div class="card">
          {{ departement.name }}
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
        htmlSelectDepartement: "",
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
      async changeDisplay(id,departementID){
        const res = await axios.post("http://localhost/SQL_FINAL_BACK/getAllInfoDepartements.php",
          JSON.stringify({
            "id":departementID,
          }))
          const data = await res.data
          console.log(data)
          this.infoSelectDepartement = data
          document.getElementById(id).style.display = "flex";
      },
      async generateInfoHTML(){
        let res = ""
        for(let i=0;i<this.infoSelectDepartement.length;i++){
          console.log(this.infoSelectDepartement[i])
        }
      },
      async closePopup(id){
        document.getElementById(id).style.visibility = "hidden";
      }
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
      flex-direction: row;
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
  </style>