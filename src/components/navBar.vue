<template>
  <nav>
    <ul class="nav-links" :class="{ 'nav-open': menuOpen }">
      <li><router-link to="/" class="nav-link"><p>Home</p></router-link></li>
      <li><router-link to="/addEmployee" class="nav-link"><p>Employees</p></router-link></li>
      <li><router-link to="/createDepartement" class="nav-link"><p>Departments</p></router-link></li>
      <li><router-link to="/createPosition" class="nav-link"><p>Position</p></router-link></li>
      <li><router-link to="/searchEmployes" class="nav-link"><p>Search</p></router-link></li>
    </ul>
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
  nav {
    position: sticky;
    padding-bottom: 1em;
  }
</style>
  