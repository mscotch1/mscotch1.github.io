<style lang="scss">
  /*! `Hootstrap` Bootstrap 4 theme */
  @import url(https://fonts.googleapis.com/css?family=Dancing+Script:200,300,400,700);
  @import url(https://fonts.googleapis.com/css?family=Lato:200,300,400,700);
  $headings-font-family:Dancing Script;
  $font-family-base:Lato;

  // Add SASS theme customizations here..
  $white: #fff;
  $gray-100: #f8f9fa;
  $gray-200: #ecf0f1;
  $gray-300: #dee2e6;
  $gray-400: #ced4df;
  $gray-500: #b4bcc2;
  $gray-600: #95a5a6;
  $gray-700: #7b8a8b;
  $gray-800: #343a40;
  $gray-900: #212529;
  $black: #000;
  $blue: #2C3E50;
  $indigo: #6610f2;
  $purple: #6f42c1;
  $pink: #e83e8c;
  $red: #E74C3C;
  $orange: #fd7e14;
  $yellow: #F39C12;
  $green: #449F50;
  $teal: #20c997;
  $cyan: #3498DB;

  $primary:$blue;
  $secondary:#eed75a;
  $success:#FEC100;
  $danger:#703B3B;
  $info:#63e792;
  $warning:#FFE869;
  $light:#E4E2DE;
  $dark:#555555;
  $dropdown-link-color: $gray-700;
  $dropdown-link-hover-color: $white;
  $dropdown-link-hover-bg: $primary;
  $grid-gutter-width: 50px;

  $carousel-control-color: $primary;
  $carousel-indicator-active-bg: $primary;

  // 3rd party styles
  @import '~bootstrap/scss/bootstrap';
</style>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-primary px-3"
      style="position: sticky; top: 0; z-index: 999">
      <a class="navbar-brand" href="#"><img src="assets/hedgehog.svg"></a>
      <a class="navbar-brand text-capitalized badge rounded-pill bg-dark p-2 text-decoration-none" target="_blank" href="https://blacklivesmatter.com/">Black Lives Matter</a>
      <button class="navbar-toggler float-right" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" data-toggle="tooltip" data-title="Currently under construction">
            <a class="nav-link">Blog</a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="page-content" class="d-flex flex-column">
      <div class="bg-light p-5">
        <div class="container">
          <h1 class="display-4">Michael Scott</h1>
          <p class="lead">
            I am a software developer at <a target="_blank" href="https://smartuq.com/">SmartUQ</a>, an analytics software
            company based in Madison, Wisconsin.
            For fun, I enjoy stand-up paddleboarding. And making this website, I suppose.
          </p>
          <button class="btn btn-lg btn-primary" data-toggle="tooltip" data-title="Currently under construction">Full bio</button>
        </div>
      </div>
      <div class="container">
        <h2 class="mt-3">Interests</h2>
        <blurb v-for="(interest, index) in interests"
          :key="index"
          :header="interest.header"
          :description="interest.description"
          :image="interest.image"
          :credit="interest.credit"
          :alt="interest.alt"
          :class="{
            'mb-3': index !== interests.length - 1,
            'reverse': index % 2 === 0,
          }">
        </blurb>
        <h2 class="mt-3">Tech Toolkit</h2>
        <blurb v-for="(tool, index) in tools"
          :key="index"
          :header="tool.header"
          :description="tool.description"
          :image="tool.image"
          :credit="tool.credit"
          :alt="tool.alt"
          :class="{
            'mb-3': index !== tools.length - 1,
            'reverse': index % 2 === 1,
          }">
        </blurb>
      </div>
    </div>
  </div>
</template>

<script>
  import Blurb from './components/Blurb.vue';

  // build main Vue component
  export default {
    data() {
      return {
        interests: [
          {
            header: 'Math and Physics',
            alt:    'Parabolic segment and inscribed triangle',
            description: 'I majored in physics and minored in math in my undergrad and have had a keen interest in both as long as I can recall. Though I no longer attend college, I am a life-long student and enjoy learning new things from Youtube videos, blog posts, etc. With my own blog I hope to keep myself more consistent in allocating a portion of my free time to actively engaging with new material and writing about it.',
            credit: '<a href="https://commons.wikimedia.org/wiki/File:Parabolic_segment_and_inscribed_triangle.svg">Vladislav Pogorelov</a>, Public domain, via Wikimedia Commons',
            image: 'assets/Parabolic_segment_and_inscribed_triangle.svg',
          },
        ],
        tools: [
          {
            header: 'C++',
            alt:    'C++ Logo',
            description: '...is the first programming lanuage I learned and is also the language we use to implement the back-end of SmartUQ. I write C++ every day and use modern language features to make my code both readable and efficient.',
            credit: '<a href="https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg">Jeremy Kratz</a>, Public domain, via Wikimedia Commons',
            image: 'assets/cpp_logo.svg',
          },
          {
            header: 'JS',
            alt:    'JavaScript Logo',
            description: '...is the language we use for the front-end of SmartUQ—I also write JS every day. JavaScript\'s high-level, multi-paradigm design allows for great flexibility, and the freedom it affords has taught me the importance of consistent API design and code organization.',
            credit: '<a href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">Chris Williams</a>, Public domain, via Wikimedia Commons',
            image: 'assets/Unofficial_JavaScript_logo_2.svg',
          },
          {
            header: 'Vue',
            alt:    'Vue Logo',
            description: '...is the JS framework with which I build this website. I have used AngularJS for several years now, and part of the impetus for this website was to learn a more modern framework.',
            credit: '<a href="https://commons.wikimedia.org/wiki/File:Vue.js_Logo_2.svg">Evan You, https://github.com/yyx990803</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons',
            image: 'assets/Vue.js_Logo_2.svg',
          },
        ],
      };
    },
    components: {
      Blurb,
    },
  };
</script>

