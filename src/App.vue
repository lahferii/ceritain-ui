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
      <div class="mb-10">
        <h1 class="text-2xl tracking-wider text-slate-900 dark:text-white duration-300">
          Kalau dikasih cobaan tuh jangan dicobain, mending ceritain aja!
        </h1>
      </div>
      
      <router-view/>
    </div>

    <foot-part/>
  </div>
</template>