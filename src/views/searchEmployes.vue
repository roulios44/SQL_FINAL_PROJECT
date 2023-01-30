<template>
  <navBar />
    <p>
      <label for="name">Search Employees</label>
      <input type="text" name="search" id="search" v-model="search" v-on:input="searchEmployee()">
  </p>
  <div v-for="employee in result" v-on:click="redirectToProfile(employee.id)">
    ID: {{ employee.id }}      Name:{{ employee.name }}
  </div>
</template>
<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
import router from '@/router'
export default {
  data() {
    return {
      search:"",
      result: [],
    }
  },
  components:{
    navBar
  },
  methods: {
    async searchEmployee(){
      if(this.search){
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/searchEmployes.php",JSON.stringify({
          search: this.search,
        }))
        const res = await post.data
        console.log(res)
        this.result = res;
      }else this.result = []
        
    },
    async redirectToProfile(id){
      const redirectURL  = new URL("http://localhost:8080/profilEmployee")
      redirectURL.searchParams.set('id',id)
      window.location = redirectURL
    }
  },
}
</script>