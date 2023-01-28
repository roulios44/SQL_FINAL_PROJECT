<template>
  <nav>
    <div class="nav-links" :class="{ 'nav-open': menuOpen }">
      <span><router-link to="/" class="nav-link"><p>Home</p></router-link></span>
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
  color: #03224c;
  position: relative;
  transition: .2s all;
  font-weight: 300;
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


<!-- .site-header__wrapper {
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: white;
}

.site-header__wrapper a {
  text-decoration: none;
  color: #03224c;
  position: relative;
  transition: .2s all;
  font-weight: 300;
}

img {
  max-width: 50px;
}

.dropbutton {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);;
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a, .drop {
  color: #03224c;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

a::before, .drop::before {
  position: absolute;
  width: 2px;
  height: 100%;
  left: 0;
  transition: .2s all;
  z-index: -1;
}

a:hover, .drop:hover {
  color: rgb(26, 85, 195);
  font-size: 1.6em;
}

.dropdown-content .drop:hover {
  font-size: inherit;
}

.drop {
  border: none;
  background-color: transparent;
  font-family: "permanent-marker";
  font-size: inherit;
}

.drop:hover {
  color: rgb(26, 85, 195);
  cursor:pointer;
} -->