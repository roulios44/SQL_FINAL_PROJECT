<template>
    {{
        allDepartements
     }}
</template>


<script>


export default {
    data() {
      return {
        allDepartements: [],
      }
    },
    methods: {
      async createDepartement(){
        const res = await fetch("http://localhost/SQL_FINAL_BACK/getAllDepartement.php")
        this.allDepartements = await res.json()
        }
    },
    async mounted() {
        this.createDepartement()
    }
}
</script>
<style>
</style>