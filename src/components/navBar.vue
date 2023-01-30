<template>
  <nav>
    <div class="nav-links" :class="{ 'nav-open': menuOpen }">
      <router-link to="/" class="nav-link"><p>Home page</p></router-link>
      <router-link to="/addEmployee" class="nav-link"><p>Add an employee</p></router-link>
      <router-link to="/createDepartement" class="nav-link"><p>Add a department</p></router-link>
      <router-link to="/createPosition" class="nav-link"><p>Add a position</p></router-link>
      <router-link to="/searchEmployes" class="nav-link"><p>Search an employee</p></router-link>
    </div>
  </nav>
</template>
  <script>
    export default {
      data() {
        return {
            menuOpen : false,
        };
      },
    };
  </script>
  <style>
  body {
    padding : 0;
    margin : 0;
  }
  nav {
    position: sticky;
    padding-bottom: 1em;
  }
  .nav-links{
    font-weight: 500;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(33,27,133);
    background: linear-gradient(90deg, rgba(33,27,133,1) 0%, rgba(47,43,160,1) 0%, rgba(21,116,135,1) 100%, rgba(9,9,121,1) 100%);
  }
  .nav-links p{
    font-weight: bolder;
  }
  .nav-link {
  text-decoration: none;
  color: rgb(221, 216, 214);  
  transition: .2s all;
  }
  p{  
    text-decoration: none;
  }
  a:hover {
  color: rgb(8, 8, 8);
  font-size: 1.03em;
  }
  a::before {
  position: absolute;
  width: 2px;
  height: 100%;
  left: 0;
  transition: .2s all;
  z-index: -1;
}
  </style>
  