<style lang="scss">
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
    <div class="mt-3 parent-spaced d-flex align-items-center flex-wrap">
      <router-link class="mr-auto child-spaced" to="/blog">Back</router-link>
      <span class="sr-only">blog post tags</span>
      <span class="badge badge-info child-spaced" style="font-size: 1.2rem" v-for="tag in tags" v-text="tag"></span>
    </div>
    <div class="mt-3">
      <h1 class="display-4" v-text="title"></h1>
      <h5 class="text-muted d-flex align-items-center">
        <date :date="created"></date>
      </h5>
      <h5 class="my-3 d-flex align-items-center">
        <span class="mr-2">Michael Scott</span>
        <img src="assets/hedgehog.svg">
      </h5>
      <hr class="sub-divider">
      <div v-html="post"></div>
      <hr class="sub-divider">
      <router-link class="mr-auto child-spaced float-right mb-3" to="/blog">Back</router-link>
    </div>
  </div>
</template>
<script>
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
