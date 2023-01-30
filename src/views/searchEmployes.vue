<template>
  <navBar />
    <p>
      <label for="name">Search Employees</label>
      <input type="text" name="search" id="search" v-model="search" v-on:input="searchEmployee()">
  </p>
  <div class="container">
    <div class="card" v-for="employee in result" v-on:click="redirectToProfile(employee.id)">
          <div class="card-details">
              <p class="text-title">{{ employee.name }}</p>
              <p class="text-body">{{ employee.surname}}</p>
              <p class="text-body"></p>
          </div>
          <button class="card-button" >More Info</button>
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
<!-- <style>
.card {
 width: 25%;
 height: 30%;
 border-radius: 20px;
 background: #f5f5f5;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
 display:flex;
 margin: 5%;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}


.text-title {
 font-size: 1.5em;
 font-weight: bold;
}


.card:hover {
 border-color: #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}

</style> -->