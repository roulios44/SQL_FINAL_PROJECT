import { createWebHistory, createRouter } from "vue-router"
import Header from "@/views/header.vue"
import Home from "@/views/home.vue"
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"
import getAllDepartement from "@/views/getAllDepartement"

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
<<<<<<< HEAD
    path: "/createDepartement",
    name: "createDepartement",
    component: createDepartement,
  },{
    path:"/getAllDepartement",
    name:"getAllDepartement",
    component:getAllDepartement,
  }
=======
    path : "/header",
    name : "Header",
    component : Headers,
  },

>>>>>>> 3668a04cc916eae0cae3593021f6888c0a4b34d6
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router