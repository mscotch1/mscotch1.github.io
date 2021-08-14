// 3rd party imports
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import * as Vue from 'vue';

// local imports
// js
import './init_tooltips.js';

// style
import './style/main.scss';

import SiteComponent from './site.vue';

// mount application
const app = Vue.createApp({
  render: () => Vue.h(SiteComponent),
});

const mounted_app = app.mount('#app');

