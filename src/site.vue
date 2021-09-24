<style lang="scss">
  /*! `Hootstrap` Bootstrap 4 theme */
  $font-family-base:Lato;

  // size font
  $font-size-base:1.2rem;

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

  $link-color: saturate($primary, 100%);

  // 3rd party styles
  @import '~bootstrap/scss/bootstrap';

  nav.navbar {
    svg {
      fill: $nav-tabs-link-active-color;
      
      &:hover {
        fill: $navbar-dark-hover-color
      }
    }
  }
</style>

<template>
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
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link" :class="{ active: $route.name?.startsWith('blog') }">Blog</router-link>
        </li>
        <!--<li class="nav-item">
          <router-link to="/about" class="nav-link" :class="{ active: $route.name === 'about' }">About</router-link>
        </li>-->
        <li class="nav-item d-flex align-items-center">
          <a class="nav-link" target="_blank" href="https://twitter.com/mscotch_1"><i v-html="mdiTwitter"></i></a>
          <a class="nav-link" target="_blank" href="https://github.com/mscotch1"><i v-html="mdiGithub"></i></a>
          <a class="nav-link" href="mailto:mscotch1@pm.me"><i v-html="mdiEmail"></i></a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view></router-view>
</template>
<script>
  import mdiTwitter from '@mdi/svg/svg/twitter.svg';
  import mdiGithub from '@mdi/svg/svg/github.svg';
  import mdiEmail from '@mdi/svg/svg/mail.svg';

  export default {
    data() {
      return {
        mdiTwitter,
        mdiGithub,
        mdiEmail,
      };
    },
    watch: {
      '$route'(to, from) {
        let title;
        if (to.matched.length > 0) {
          title = to.matched[0].path.split('/')[1];
          title = title.charAt(0).toUpperCase() + title.slice(1);
          title = title || 'Home';
        }
        document.title = `${title ?? 'Page Not Found'} · Michael Scott`;
      },
    },
  };
</script>
