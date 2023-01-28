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
</template>
<script>
  export default {
      name : "NavBar",
      data() {
          return {
              menuOpen : false,
          };
      },
      methods: {
          toggleMenu(){
              this.menuOpen = !this.menuOpen;
          }
      }
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
</style>
