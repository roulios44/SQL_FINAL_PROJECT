<template>
    <head></head>
    <h1>Create a departement in our company</h1>
    <p>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name">
    </p>
    <p>
        <label for="location">location</label>
        <input type="text" name="location" id="location" v-model="location">
    </p>
    <p>
        <label for="adress">adress</label>
        <input type="text" name="adress" id="adress" v-model="adress">
    </p>
    <button id="btnSubmit" class="btn btn-primary" style="align:center" v-on:click="test()">Open</button>
    <div v-for="item in listItems">
        items:   {{ item }}
    </div>
</template>
<script>
export default {
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        // C EST LES CORS POLICY A REGARDER COMMENT LES DEGAGER
        const res = await fetch("http://localhost/SQL_FINAL_BACK/test.php", {
        
        });
        const finalRes = await res.json();
        this.listItems = finalRes;
      },
    },
    async mounted() {
      await this.getData()
    }
  }
</script>
<style>
</style>