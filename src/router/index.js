import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"
import searchEmployes from "@/views/searchEmployes"
import createPosition from "@/views/createPosition"
import departements from "@/views/departements"
import profilEmployee from "@/views/profilEmployee"

const routes = [
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
  },
  {
    path: "/profilEmployee",
    name: "profilEmployee",
    component: profilEmployee,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router