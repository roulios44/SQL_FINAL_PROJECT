<template>
  <nav>
    <button @click="toggleMenu" class="burger-button">☰</button>
    <div class="nav-links" :class="{ 'nav-open': menuOpen }">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
  </nav>
  <form id="app" @submit="checkForm" action="/something" method="post">
  
    <p>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name">
    </p>
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
</script><style>
.body {
    padding : 0;
    margin : 0;
}
.burger-button {
display: block;
padding: 5px;
font-size: 1.5em;
cursor: pointer;
}
.nav-links {
display: none;
}

.nav-open {
display: block;
}

</style>
