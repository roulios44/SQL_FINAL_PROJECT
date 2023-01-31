<template>
    <navBar />
    {{ this.infoEmployee }}
    <button v-on:click="deleteEmployee()">Delete employee</button>
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
    },
    async deleteEmployee(){
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/deleteEmployee.php",JSON.stringify({
            "id":this.idEmployee,
        }))
        window.location = "http://localhost:8080/"
    },
  },
  async mounted(){
      await this.getIdEmployee()
      await this.getInfoEmployee()
    }
}
</script>