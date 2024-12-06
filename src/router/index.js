import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import ApiView from "@/views/ApiView.vue";
import BonusView from "@/views/BonusView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/api",
    name: "api",
    component: ApiView,
  },
  {
    path: "/bonus",
    name: "bonus",
    component: BonusView,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
