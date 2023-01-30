<template>
    <navBar />
    {{ this.idEmployee }}
</template>
<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
export default {
  data() {
    return {
        idEmployee:"",
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
    }
  },
  async mounted(){
      await this.getIdEmployee()
    }
}
</script>