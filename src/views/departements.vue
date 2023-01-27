<template>
    <navBar />
    <h1>List of all departements</h1>
    <div class="allDepartement">
        <div v-for="departement,id in allDepartements" v-on:click="changeDisplay(id)">
            <div class="popupDepartement" :id="id" v-on:click="">
                inside popup
            </div>
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
        async changeDisplay(id){
            document.getElementById(id).style.display = "flex";
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
        width: 80%;
        height: 80%;
        position: absolute;
        background-color: yellow;
        align-self: center;
        justify-content: center;
        align-items: center;
    }
    .allDepartement{
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    </style>