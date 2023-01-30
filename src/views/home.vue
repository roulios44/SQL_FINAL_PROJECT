<template>
  <nav>
    <div class="nav-links" :class="{ 'nav-open': menuOpen }">
      <span><router-link to="/" class="nav-link"><p>Home</p></router-link></span>
      <span><router-link to="/addEmployee" class="nav-link"><p>Add a New Employee</p></router-link></span>
      <span><router-link to="/createDepartement" class="nav-link"><p>Add a new departement</p></router-link></span>
      <span><router-link to="/createPosition" class="nav-link"><p>Add a new job's</p></router-link></span>
      <span><router-link to="/searchEmployes" class="nav-link"><p>Search a employee</p></router-link></span>
    </div>
  </nav>

    <form id="app" @submit="checkForm" action="/something" method="post">
    <p>
      <h1>Hello</h1>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name">
    </p>

    <p>
      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="age" min="0">
    </p>

    <p>
      <label for="movie">Favorite Movie</label>
      <select name="movie" id="movie" v-model="movie">
        <option>Star Wars</option>
        <option>Vanilla Sky</option>
        <option>Atomic Blonde</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit">  
    </p>

    </form>

</template>
<script>
  import axios from 'axios'
  export default {
      name : "NavBar",
      data() {
          return {
              menuOpen : false,
              name: "",
              age: "",
              department : "",
          };
      },
      methods: {
          toggleMenu(){
              this.menuOpen = !this.menuOpen;
          }
      },
  };
</script>
<style>
.body {
    padding : 0;
    margin : 0;
}
.nav-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 0;
}
span{
  align-items: center;
  align-content: center;
  border: black solid;
  border-radius: 20px;
  width: 10%;
  height: 15%;
  text-align: center;
  text-decoration: none;
}
p{
  text-decoration: none;
}
<<<<<<< HEAD
.flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}
=======
>>>>>>> 1decef468847fdebfac9a09195bac84bc22b3aa6
</style>
