import { createWebHistory, createRouter } from "vue-router"
import Header from "@/views/header.vue"
import Home from "@/views/home.vue"
<<<<<<< HEAD
=======
import createDepartement from "@/views/createDepartement.vue"
import addEmployee from "@/views/addEmployee.vue"
>>>>>>> 8d28dfdca91cb6cb38dfa6c9a08150d25ea2e65c

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
<<<<<<< HEAD
=======
  {
    path: "/createDepartement",
    name: "createDepartement",
    component: createDepartement,
  }
>>>>>>> 8d28dfdca91cb6cb38dfa6c9a08150d25ea2e65c
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router