<template>
  <div id="page-content" class="d-flex flex-column">
    <div class="bg-light p-3">
      <div class="container">
        <h1 class="display-3">Michael Scott <small class="text-muted">(he/him)</small></h1>
        <p class="lead text-right">
        "You miss 100% of the shots you don't take. <small>&mdash;Wayne Gretzky</small>"<br>
        &mdash;Michael Scott
        </p>
      </div>
    </div>
    <div class="container">
      <h2 class="mt-3 display-4">About</h2>
      <p>
        <ul>
          <li>I work for <a target="_blank" href="https://smartuq.com/">SmartUQ</a></li>
          <li>I graduated from the University of Wisconsin-Madison</li>
          <li>I live in Oconomowoc, WI with my fiancé</li>
        </ul>
        I'm a software developer by trade and (sometimes) as a hobby. Lately, I've been messing around with Rust <i v-html="mdiRS"></i> and TypeScript <i v-html="mdiTS"></i> in my spare time. For work, I write mostly C++ <i v-html="mdiCpp"></i> and JavaScript <i v-html="mdiJS"></i>. Outside of computers, I enjoy stand-up paddleboarding, Texas Hold 'Em <i v-html="mdiCards"></i>, and videogames <i v-html="mdiSwitch"></i>. Oh, and I'm a fan of <em>The Office</em>.
      </p>
      <h2 class="mt-3 display-4">Toolkit</h2>
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
  };
</script>
