<template>
  <navBar />
    <p>
      <label for="name">Search Employes</label>
      <input type="text" name="search" id="search" v-model="search" @change="searchEmployee()">
  </p>
  {{ result }}
</template>
<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
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
        const post = await axios.post("http://localhost/SQL_FINAL_BACK/searchEmployes.php",JSON.stringify({
            search: this.search,
        }))
        const res = await post.data
        console.log(res)
        this.result = res;
    }
  },
}
</script>