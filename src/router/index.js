import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Projects from "../views/Projects.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
