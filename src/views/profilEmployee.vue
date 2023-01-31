<template>
    <navBar />
    <div class="employee">
        <h1>{{ this.infoEmployee.name }}  {{ this.infoEmployee.surname }}</h1>
        <p>Age: {{ this.infoEmployee.age }}</p>
        <p>Gender: {{ this.infoEmployee.gender }}</p>
        <p>Phone number:  {{ this.infoEmployee.phoneNumber }}</p>
        <p>Email:  {{ this.infoEmployee.email }}</p>
        <p>First day in this company: {{ this.infoEmployee.firstDate }}  <br /> Company old: {{ this.infoEmployee.companyOld }}</p>
        <p>Degrees: {{ this.infoEmployee.degrees }}</p>
        <p style="cursor:pointer" v-on:click="redirectDepartementPage(this.infoEmployee.departementID)">Departement: {{ this.infoEmployee.departementName }}</p>
        <p>Poste:  {{ this.infoEmployee.postName }}</p>
        <p v-if="this.infoEmployee.isDangerous==1">Dangerous work</p>
        <p v-else>Not dangerous work</p>
        <p v-if="this.infoEmployee.haveCompanySecurity==1">Have company security</p>
        <p v-else>Don't have company security</p>
        <p>Social security: {{ this.infoEmployee.socialSecurity }}</p>
        <p></p>
        <button v-on:click="deleteEmployee()">Delete employee</button>
    </div>
</template>
<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
import router from '@/router';
export default {
  data() {
    return {
        idEmployee:"",
        infoEmployee:{},
    }
  },
  components: {
    navBar
  },
  methods: {
    async getIdEmployee(){
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        this.idEmployee = urlParams.get("id")
    },
    async getInfoEmployee(){
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/infoForProfil.php",JSON.stringify({
            "id":this.idEmployee,
        }))
        const data = await post.data
        this.infoEmployee = data
        console.log(this.infoEmployee)
    },
    async deleteEmployee(){
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/deleteEmployee.php",JSON.stringify({
            "id":this.idEmployee,
        }))
        window.location = "http://localhost:8080/"
    },
    async redirectDepartementPage(departementID){
        const redirectURL  = new URL("http://localhost:8080/profileDepartement")
        redirectURL.searchParams.set('id',departementID)
        window.location = redirectURL
      },
  },
  async mounted(){
      await this.getIdEmployee()
      await this.getInfoEmployee()
    }
}
</script>
<style>
.employee{
    width: 80%;
    height: 100%;
}

</style>