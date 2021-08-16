<style lang="scss" scoped>
.reverse .content {
  flex-direction: row-reverse;
}
</style>

<template>
  <div class="card">
    <div class="row content g-0">
      <div class="col-lg-8">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">{{ header }}</h3>
          <p class="card-text">{{ description }}</p>
          <p class="card-text"><small>Image from: <span class="text-muted" v-html="credit"></span></small></p>
        </div>
      </div>
      <div class="col-lg-4 position-relative">
        <img :src="image" :alt="alt" style="max-width: 50vh" class="p-3 h-100 w-100">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['header', 'alt', 'description', 'credit', 'image'],
    data() {
      return {
      };
    }
  };
</script>

