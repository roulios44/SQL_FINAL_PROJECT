import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"

const routes = [
  {
    path: "/test",
    name: "Home",
    component: Home,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router