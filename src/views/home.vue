<template>
  <navBar />

  <div class="grid">
    <article>
      <header><strong>ACHARD Lisa</strong></header>
      Second year student 👩‍💻
      lisa.achard@ynov.com ✉️
    </article>
    
    <article>
      <header><strong>CROIZIER Jules</strong></header>
      Second year student 👨‍💻
      jules.croizier@ynov.com ✉️
    </article>

    <article>
      <header><strong>RIVALANT Nicolas</strong></header>
      Second year student 👨‍💻
      nicolas.rivalant@ynov.com ✉️  
    </article>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
  export default {
    components:{
      navBar,
    },
  };
</script>

<style>
article {
  text-align: center
}
</style>