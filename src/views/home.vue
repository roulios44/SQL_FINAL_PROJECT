<template>
  <navBar />
  <common />
  <head></head>
</template>

<script>
import navBar from '@/components/navBar.vue'
import common from '@/components/common.vue'
  export default {
      data() {
          return {
              menuOpen : false,
          };
      },
      methods: {
          toggleMenu(){
              this.menuOpen = !this.menuOpen;
          }
      },
      components:{
        navBar,
        common
      }
  }
</script>

<style>
</style>