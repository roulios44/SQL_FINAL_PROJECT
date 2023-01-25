import { createWebHistory, createRouter } from "vue-router"
import Header from "@/views/header.vue"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"

const routes = [
  {
    path : "/header",
    name : "Header",
    component : Header,
  },
  {
    path : "/addEmployee",
    name : "addEmployee",
    component : addEmployee,
  },
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