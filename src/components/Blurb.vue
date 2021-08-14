<template>
  <div class="card">
    <div class="row g-0" :class="{ 'flex-row-reverse': row_reverse }">
      <div class="col-lg-8">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">{{ header }}</h3>
          <p class="card-text">{{ description }}</p>
          <p class="card-text"><small>Image from: <span class="text-muted" v-html="credit"></span></small></p>
        </div>
      </div>
      <div class="col-lg-4">
        <img :src="image" :alt="alt" class="m-3">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['header', 'alt', 'description', 'credit', 'image', 'row_reverse'],
    data() {
      return {
      };
    }
  };
</script>
