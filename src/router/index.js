import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"
import getAllDepartement from "@/views/getAllDepartement"
import searchEmployes from "@/views/searchEmployes"
import createPosition from "@/views/createPosition"
import departements from "@/views/departements"

const routes = [
  {
    path : "/addEmployee",
    name : "addEmployee",
    component : addEmployee,
  },
  {
    path: "/profile",
    name: "Profile",
    component : profile,
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
    path: "/departements",
    name:"departements",
    component: departements,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router