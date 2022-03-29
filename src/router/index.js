import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue"
import About from "../views/About.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    name: "/about",
    name: "About",
    component: About
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
