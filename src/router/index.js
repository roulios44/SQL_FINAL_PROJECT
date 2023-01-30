import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"
import getAllDepartement from "@/views/getAllDepartement"
import profile from "@/views/profile.vue"

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
    path: "/createDepartement",
    name: "createDepartement",
    component: createDepartement,
  },{
    path:"/getAllDepartement",
    name:"getAllDepartement",
    component:getAllDepartement,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router