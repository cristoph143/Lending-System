import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/diminishing",
    name: "diminishing",
    component: () =>
      import(
        /* webpackChunkName: "diminishing" */ "../views/diminishingInterest.vue"
      ),
  },
  {
    path: "/fixed",
    name: "fixed",
    component: () =>
      import(/* webpackChunkName: "fixed" */ "../views/FixedInterest.vue"),
  },
  {
    path: "/lumpsum",
    name: "lumpsum",
    component: () =>
      import(/* webpackChunkName: "lumpsum" */ "../views/LumpSum.vue"),
  },
  {
    path: "/penalty",
    name: "penalty",
    component: () =>
      import(
        /* webpackChunkName: "penalty" */ "../views/PenaltyCalculator.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
