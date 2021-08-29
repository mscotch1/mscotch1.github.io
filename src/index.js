// 3rd party imports
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

// site component
import SiteComponent from 'src/site.vue';

// routeable components ("pages")
import HomeComponent from 'src/home.vue';
import BlogComponent from 'src/blog.vue';
import BlogViewerComponent from 'src/blog-viewer.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { component: HomeComponent, path: '/', name: 'home' },
    { component: BlogComponent, path: '/blog', name: 'blog' },
    { component: BlogViewerComponent, path: '/blog/:id', name: 'blog-view' },
  ],
});

// mount application
const app = Vue.createApp({
  render: () => Vue.h(SiteComponent),
});
app.use(router);

const mounted_app = app.mount('#app');

