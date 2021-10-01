<template>
  <img
    :title="credit"
    :src="image"
    :alt="alt"
    class="p-3"
  >
</template>

<script>
  export default {
    props: {
      header: String,
      alt: String,
      credit: String,
      image: String,
    },
  };
</script>

