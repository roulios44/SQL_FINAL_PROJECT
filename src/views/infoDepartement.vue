<template>
    <navBar />
    <div class="profileContainer">
        <div class="info" v-for="dep,id in infoDepartement">
            <div class="departementInfo" v-if="id==0">
                <h1>{{ dep.departementName }}</h1>
                <p>People in :   {{ dep.nbPeople }}</p>
                <p>Location :  {{ dep.location }}</p>
                <p>Adress:  {{ dep.adress }}</p>
            </div>
            <h1 v-if="id==0">Employee In</h1>
            <div class="employee" v-on:click="redirectToProfile(dep.employeeID)">
                <p>{{ dep.employeeName }}  {{ dep.surname }}  {{ dep.postName }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
export default {
  data() {
    return {
        idDepartement:"",
        infoDepartement:[],
    }
  },
  components: {
    navBar
  },
  methods: {
    async getIdDepartement(){
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        this.idDepartement = urlParams.get("id")
    },
    async getInfoDepartements(){
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/getAllInfoDepartements.php",JSON.stringify({
            "id":this.idDepartement,
        }))
        const data = await post.data
        this.infoDepartement = data
        console.log(data)
    },
    async redirectToProfile(id){
      const redirectURL  = new URL("http://localhost:8080/profilEmployee")
      redirectURL.searchParams.set('id',id)
      window.location = redirectURL
    }
  },
  async mounted(){
      await this.getIdDepartement()
      await this.getInfoDepartements()
    }
}
</script>