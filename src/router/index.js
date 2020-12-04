import Vue from "vue";
import VueRouter from "vue-router";
import Gallery from "@/views/Gallery.vue";
import Home from "@/views/Home.vue";

import NotFound from "@/views/NotFound";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
