<template>
  <nav>
    <div class="nav-links" :class="{ 'nav-open': menuOpen }">
      <span><router-link to="/" class="nav-link"><p>Home page</p></router-link></span>
      <span><router-link to="/addEmployee" class="nav-link"><p>Add an employee</p></router-link></span>
      <span><router-link to="/createDepartement" class="nav-link"><p>Add a department</p></router-link></span>
      <span><router-link to="/createPosition" class="nav-link"><p>Add a position</p></router-link></span>
      <span><router-link to="/searchEmployes" class="nav-link"><p>Search an employee</p></router-link></span>
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
  .site-header__wrapper {
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: white;
}
  .nav-links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px 0;
  }
  .nav-link {
  text-decoration: none;
  color: rgb(26, 85, 195);  
  transition: .2s all;
  font-weight: 300; 
}
  p{  
    text-decoration: none;
  }
  p:hover {
  color: rgb(22, 80, 187);
  font-size: 1.03em;
  }
  </style>
  