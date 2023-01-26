import { createWebHistory, createRouter } from "vue-router"
import Header from "@/views/header.vue"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"
import getAllDepartement from "@/views/getAllDepartement"
import searchEmployes from "@/views/searchEmployes"
import createPosition from "@/views/createPosition"

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
  },
  {
    path:"/getAllDepartement",
    name:"getAllDepartement",
    component:getAllDepartement,
  },
  {
    path: "/createPosition",
    name: "createPosition",
    component: createPosition,
  },
  {
    path: "/searchEmployes",
    name:"searchEmployes",
    component: searchEmployes,
  },
  {
    path:"/createPosition",
    name:"createPosition",
    component:createPosition,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router