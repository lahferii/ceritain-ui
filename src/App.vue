<script>
  import navPart from './components/navPart.vue';
  import footPart from './components/footerPart.vue';

  export default {
    components:{
      navPart,
      footPart,
    }
  }
</script>

<template>
  <div class="app bg-gray-200 dark:bg-slate-800 duration-300">
    <nav-part/>
  
    <div class="max-w-2xl mx-auto min-h-screen p-5">
      <router-view/>
    </div>

    <foot-part/>
  </div>
</template>