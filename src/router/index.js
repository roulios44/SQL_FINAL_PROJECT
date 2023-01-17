import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/createDepartement",
    name: "createDepartement",
    component: createDepartement,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router