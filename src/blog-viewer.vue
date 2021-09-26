<style lang="scss">
  @import '~prismjs/themes/prism.css'; 
  @import '~prismjs/plugins/line-numbers/prism-line-numbers.css';
  .parent-spaced {
    $space:  0.2rem;
    margin: 0 -$space 0 -$space;
    &>.child-spaced {
      margin: 0 $space 0 $space;
    }
  }
</style>
<template>
  <div class="container" style="max-width: 900px">
    <div class="mt-3 d-flex align-items-center flex-wrap parent-spaced">
      <router-link class="flex-grow-1 child-spaced" to="/blog">Back</router-link>
      <span class="visually-hidden">blog post tags</span>
      <div
        class="badge bg-info child-spaced"
        style="font-size: 1.2rem"
        v-for="(tag, index) in tags"
        :key="index"
        v-text="tag">
        </div>
    </div>
    <div class="mt-3">
      <h2 class="display-4" v-text="title"></h2>
      <hr class="sub-divider">
      <h5 class="text-muted d-flex align-items-center">
        <date :date="created"></date>
      </h5>
      <h5 class="my-3 d-flex align-items-center">
        <span class="me-2">Michael Scott</span>
        <img src="assets/hedgehog.svg">
      </h5>
      <div id="content" v-html="post"></div>
      <hr class="sub-divider">
      <router-link class="float-end mb-3" to="/blog">Back</router-link>
    </div>
  </div>
</template>
<script>
  import Prism from 'prismjs';
  Prism.manual = true;

  import 'prismjs/components/prism-rust';
  import 'prismjs/plugins/line-numbers/prism-line-numbers';

  import posts from 'posts/posts.json';
  import date from './components/date.vue';

  export default {
    components: {
      date,
    },
    created() {
      const id = this.$route.params.id;
      this.title = posts[id]?.title;
      this.created = posts[id]?.created;
      this.tags = posts[id]?.tags;
      fetch(`posts/${id}.html`)
        .then((res) => {
          return res.text();
        })
        .then((html) => {
          this.post = html;
          this.$nextTick(() => {
            Prism.highlightAllUnder(document.getElementById('content'));
          });
        });
    },
    data() {
      return {
        tags: null,
        post: null,
      };
    },
  };
</script>
