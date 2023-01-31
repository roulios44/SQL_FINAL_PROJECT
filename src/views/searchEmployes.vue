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
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.card{
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  width: 30%;
  height: 50%;
}
.card-details{
  widows: 100%;
  display: flex;
  flex-direction: column;
}
.card-button{
  width: 100%;
  display: flex;
}

</style>