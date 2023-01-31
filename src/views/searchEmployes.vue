<template>
  <navBar />
    <p>
      <label for="name">Search Employees</label>
      <input type="text" name="search" id="search" v-model="search" v-on:input="searchEmployee()">
  </p>
  <div class="container">
    <div class="card" v-for="employee in result">
          <div class="card-details">
              <p class="text-title">{{ employee.name }}</p>
              <p class="text-body">{{ employee.surname}}</p>
          </div>
          <div>
            <button class="card-button" v-on:click="redirectToProfile(employee.id)">More Info</button>
          </div>
    </div>
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
<style>
.container{ 
  width: 100% !important;
  height: 100% !important;
  align-items: center !important;
  justify-content: center !important;
  align-content: center !important;
}
.card{
  margin: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  width: 30%!important;
  height: 50%!important;
  border: solid bisque;
}
.card-details{
  widows: 100%!important;
  display: flex!important;
  flex-direction: column!important;
}
.card-button{
  width: 100%!important;
  display: flex!important;
}

</style>