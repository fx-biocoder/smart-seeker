import { createRouter, createWebHistory } from "vue-router";
import app_homepage from "../components/app_homepage.vue";
import Load from "../components/app_section_1.vue";
import Algorithm from "../components/app_section_2.vue";
import About from "../components/app_section_3.vue";
import Contact from "../components/app_section_4.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: app_homepage
  },
  {
    path: "/load",
    name: "Load",
    component: Load
  },
  {
    path: "/the-algorithm",
    name: "Info",
    component: Algorithm
  },
  {
    path: "/about-us",
    name: "About",
    component: About
  },
  {
    path: "/contact-us",
    name: "Contact us",
    component: Contact
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;