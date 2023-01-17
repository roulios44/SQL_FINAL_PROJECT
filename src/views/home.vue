<template>
    <form id="app" @submit="checkForm" action="/something" method="post">
  
  <p>
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
</script>