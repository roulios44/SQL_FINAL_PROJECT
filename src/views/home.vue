<template>
  <navBar />
</template>
<script>
import navBar from '@/components/navBar.vue'
  export default {
    components:{
      navBar
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
</style>
