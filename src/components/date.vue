<style lang="scss">
  @import '~bootstrap/scss/functions';
  @import '~bootstrap/scss/variables';
  .text-muted {
    svg {
      fill: $text-muted;
    }
  }
</style>
<template>
  <span class="d-flex align-items-center">
    <span v-text="date"></span>
    <i class="pl-2" v-html="icon"></i>
  </span>
</template>
<script>
  import mdiCalendarMonth from '@mdi/svg/svg/calendar-month.svg';
  export default {
    props: {
      date: String,
    },
    data() {
      return {
        icon: mdiCalendarMonth,
      };
    },
  };
</script>
