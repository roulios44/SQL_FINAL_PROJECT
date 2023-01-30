<template>
    <navBar />
    {{ this.idEmployee }}
    {{ this.infoEmployee }}
</template>
<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
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
  },
  async mounted(){
      await this.getIdEmployee()
      await this.getInfoEmployee()
    }
}
</script>