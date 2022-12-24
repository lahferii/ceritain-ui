<script>
  export default {
    methods:{
      dark(){
        document.querySelector('html').classList.toggle('dark');
      }
    }  
  }
</script>

<template>
  <header class="max-w-2xl mx-auto sticky top-0 h-16 bg-gray-200 dark:bg-slate-800 flex items-center justify-between px-5 duration-300">
    <span class="text-xl tracking-wider dark:text-white">Ceritain</span>

    <nav class="flex items-center gap-4">
      <router-link to="/" class="text-xl">🏠</router-link>
      <router-link to="/upload" class="text-xl">✒</router-link>
      <button @click="dark()" class="text-xl">☀</button>
    </nav>
  </header>
</template>