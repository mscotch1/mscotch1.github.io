<template>
  <img
    ref="image"
    data-bs-toggle="popover"
    :title="header"
    :data-bs-content="credit"
    :src="image"
    :alt="alt"
    class="p-3"
  >
</template>

<script>
  import Popover from 'bootstrap/js/dist/popover';
  export default {
    props: {
      header: String,
      alt: String,
      credit: String,
      image: String,
    },
    created() {
      this.$nextTick(() => {
        new Popover(
          this.$refs.image,
          {
            html: true,
            trigger: 'click',
            placement: 'auto',
            container: 'body',
            boundary: 'viewport',
          },
        );
      });
    },
  };
</script>

