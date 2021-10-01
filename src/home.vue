<style lang="scss">
  .pane {
    padding-top: 10vh !important;
    padding-bottom: 10vh !important;
  }
</style>
<template>
  <div class="bg-light p-3 pane">
    <div class="container">
      <h1 class="display-3">Michael Scott <small class="text-muted">(he/him)</small></h1>
      <p class="lead text-right">
      "You miss 100% of the shots you don't take. <small>&mdash;Wayne Gretzky</small>"<br>
      &mdash;Michael Scott
      </p>
    </div>
  </div>
  <div class="container pane">
    <h2 class="display-4">About</h2>
    <p>
      <ul>
        <li>I work for <a target="_blank" href="https://smartuq.com/">SmartUQ</a></li>
        <li>I graduated from the University of Wisconsin-Madison</li>
        <li>I live in Oconomowoc, WI with my fiancé</li>
      </ul>
      I'm a software developer by trade and (sometimes) as a hobby. Lately, I've been messing around with Rust <i v-html="mdiRS"></i> and TypeScript <i v-html="mdiTS"></i> in my spare time. For work, I write mostly C++ <i v-html="mdiCpp"></i> and JavaScript <i v-html="mdiJS"></i>. Outside of computers, I enjoy stand-up paddleboarding, Texas Hold 'Em <i v-html="mdiCards"></i>, and videogames <i v-html="mdiSwitch"></i>. Oh, and I'm a fan of <em>The Office</em>.
    </p>
  </div>
  <div class="container pane">
    <div class="row row-cols-1">
      <h2 class="col display-4">Toolkit</h2>
    </div>
    <div class="row">
      <blurb v-for="(tool, index) in tools"
        class="col-xxl-2 position-relative"
        style="max-width: 33%"
        :key="index"
        :header="tool.header"
        :image="tool.image"
        :credit="tool.credit"
        :alt="tool.alt">
      </blurb>
    </div>
  </div>
</template>

<script>
  import mdiSwitch from '@mdi/svg/svg/nintendo-switch.svg';
  import mdiCards from '@mdi/svg/svg/cards-playing-outline.svg';
  import mdiCpp from '@mdi/svg/svg/language-cpp.svg';
  import mdiJS from '@mdi/svg/svg/language-javascript.svg';
  import mdiTS from '@mdi/svg/svg/language-typescript.svg';
  import mdiRS from '@mdi/svg/svg/language-rust.svg';
  import blurb from './components/Blurb.vue';
  export default {
    components: {
      blurb,
    },
    data() {
      return {
        mdiSwitch,
        mdiCards,
        mdiCpp,
        mdiJS,
        mdiTS,
        mdiRS,
        tools: [
          {
            header: 'C++',
            alt:    'C++ Logo',
            credit: 'Jeremy Kratz, Public domain, via Wikimedia Commons',
            image: 'assets/cpp_logo.svg',
          },
          {
            header: 'JS',
            alt:    'JavaScript Logo',
            credit: 'Chris Williams, Public domain, via Wikimedia Commons',
            image: 'assets/Unofficial_JavaScript_logo_2.svg',
          },
          {
            header: 'ReactJS',
            alt:    'ReactJS Logo',
            credit: 'Facebook, Public domain, via Wikimedia Commons',
            image:  'assets/React-icon.svg',
          },
          {
            header: 'Vue',
            alt:    'Vue Logo',
            credit: 'Evan You, https://github.com/yyx990803, CC BY 4.0, via Wikimedia Commons',
            image: 'assets/Vue.js_Logo_2.svg',
          },
          {
            header: 'Rust',
            alt:    'Rust Logo',
            credit: 'Mozilla Foundation, CC BY 4.0, via Wikimedia Commons',
            image: 'assets/Rust_programming_language_black_logo.svg',
          },
          {
            header: 'Debian',
            alt:    'Debian Logo',
            credit: 'Debian Project, CC BY-SA 3.0, via Wikimedia Commons',
            image:  'assets/Openlogo-debianV2.svg',
          },
        ],
      };
    },
  };
</script>
