// 3rd party imports
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Vue from 'vue';

// local imports
// js
import './init_tooltips.js';

// style
import './style/main.scss';

import SiteComponent from './site.vue';
// document.body.appendChild(document.createElement('site'));

new Vue({
  el: '#app',
  render: h => h(SiteComponent),
});
