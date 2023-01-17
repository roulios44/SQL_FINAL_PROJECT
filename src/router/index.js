import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"
import Headers from "@/components/header.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path : "/header",
    name : "Header",
    component : Headers,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router