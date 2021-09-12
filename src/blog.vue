<style lang="scss" scoped>
  @import '~bootstrap/scss/functions';
  @import '~bootstrap/scss/variables';
  .card:hover {
    box-shadow: $box-shadow !important;
    transition-property: box-shadow;
    transition-duration: 0.22s;
  }
  .card:not(:hover) {
    transition-property: box-shadow;
    transition-duration: 0.4s;
  }
</style>
<template>
  <div class="container pt-3 ">
    <div class="d-flex flex-wrap justify-content-between align-items-start">
      <div class="card mb-3" style="width: 32rem" v-for="(post, index) in posts" :key="index">
        <div class="card-body">
          <div class="d-flex justify-content-end" style="margin: 0 -0.2rem 0 -0.2rem">
            <span class="badge badge-info" style="margin: 0 0.2rem 0 0.2rem" v-for="(tag, index) in post.tags" :key="index" v-text="tag"></span>
          </div>
          <div style="font-size: 1.2em" class="card-title d-flex flex-wrap align-items-baseline">
            <span style="font-size: 1.2em" class="mr-auto" v-text="post.title"></span>
            <date style="font-size: .9em" class="text-muted mb-1" :date="post.created"></date>
          </div>
          <p class="card-text" v-text="post.summary"></p>
          <button class="btn btn-sm btn-primary" @click="select_post(post)">Read</button>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import posts from 'posts/posts.json';
  import date from './components/date.vue';

  const state = {
    sort: null,
  };

  export default {
    components: {
      date,
    },
    data() {
      return {
        posts: Object.values(posts).reverse(),
        state,
      };
    },
    methods: {
      select_post(post) {
        this.$router.push(`/blog/${post.id}`);
      },
    },
    emits: ['clickPost'],
  };
</script>
