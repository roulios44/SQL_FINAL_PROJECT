import { createWebHistory, createRouter } from "vue-router"
import Header from "@/views/header.vue"
import Home from "@/views/home.vue"

const routes = [
  {
    path : "/header",
    name : "Header",
    component : Header,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router