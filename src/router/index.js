import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import ApiView from "@/views/ApiView.vue";

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

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
