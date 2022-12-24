<script>
  import axios from 'axios';

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
    }  
  }
</script>

<template>
  <section v-if="posts.length > 0">
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

  <section v-else class="py-10">
    <h1 class="text-2xl tracking-wider text-center dark:text-white">
      Hmm. Something went wrong, i can feel that
    </h1>
  </section>
</template>