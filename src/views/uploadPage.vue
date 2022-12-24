<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        post: {
          writter: '',
          article: '',
        }
      }
    },
    methods:{
      uploadCerita(){
        if (this.post.writter.length < 1 && this.post.article.length < 1) {
          alert('jangan males ngetik dong!')
        } else {
          let infoCerita = {
            writter: this.post.writter,
          article: this.post.article,
        };

        axios.post('http://127.0.0.1:8000/api/upload', infoCerita)
             .then(() =>this.$router.push('/'))
             .catch(err => console.log(err));
        }
      }
    }
  }
</script>
<template>
  <section>
    <div>
      <div class="mb-5">
        <label for="username" class="block mb-2 tracking-wider dark:text-white duration-300">Nama Pengirim</label>
        <input type="text" required id="username" placeholder="Nama kamu siapa?" autocomplete="off" class="input" v-model="post.writter">
      </div>
      <div class="mb-5">
        <label for="article" class="block mb-2 tracking-wider dark:text-white duration-300">Dongeng kamu</label>
        <textarea required id="article" class="long-text" placeholder="Kamu mau cerita apa??" v-model="post.article"></textarea>
      </div>
      <div class="mb-5">
        <button @click="uploadCerita()" class="w-full bg-slate-800 dark:bg-slate-300 text-white dark:text-black tracking-wider rounded py-2 hover:bg-slate-700 dark:hover:bg-slate-400 active:scale-95 duration-300">Kirim!</button>
      </div>
    </div>
  </section>
</template>