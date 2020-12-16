import Vue from "vue";
import VueRouter from "vue-router";
import Debounce from "../views/Debounce.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Debounce",
    component: Debounce
  },
  {
    path: "/loading",
    name: "Loading",
    component: () => import("@/views/Loading.vue")
  },
  {
    path: "/permission",
    name: "Permission",
    component: () => import("@/views/Permission.vue")
  },
  {
    path: "/sticky",
    name: "Sticky",
    component: () => import("@/views/Sticky.vue")
  },
  {
    path: "/wave",
    name: "Wave",
    component: () => import("@/views/Wave.vue")
  },
  {
    path: "/draggable",
    name: "Draggable",
    component: () => import("@/views/Draggable.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
