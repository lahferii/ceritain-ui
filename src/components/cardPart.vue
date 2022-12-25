<script>
  import axios from 'axios';
  import greetingPart from '../components/greetingPart.vue'

  export default {
    data(){
      return{
        posts: [],
      }
    },
    mounted(){
      axios.get('https://ceritain-api.000webhostapp.com/api/posts')
           .then(res => (this.posts = res.data.data))
           .catch(err => console.log(err))
    },
    components:{
      greetingPart,
    }
  }
</script>

<template>
  <section v-if="posts.length > 0">
    <greeting-part/>

    <div class="card" v-for="post in posts" v-bind:key="post">
      <!-- card body start -->
      <div class="mb-5">
        <p class="text-content">
          {{ post.article }}
        </p>
      </div>
      <!-- card body end -->

      <!-- card footer start -->
      <div class="text-right">
        <p class="text-secondary">
          {{ post.writter }}
        </p>
      </div>
      <!-- card footer end -->
    </div>
  </section>

  <section v-else>
    <div class="p-10 text-center">
      <h1 class="text-2xl tracking-wider dark:text-white animate-pulse duration-300">Hmm. Something went wrong, i can feel that</h1>
    </div>
  </section>
</template>
