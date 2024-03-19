import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue"
import LogIn from "./components/LogIn.vue"
import AddPage from "./components/AddPage.vue";
import UpdatePage from "./components/UpdatePage.vue";
import { createRouter, createWebHashHistory} from "vue-router"

const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    path: '/'
  },
  {
    name: 'SignUp',
    component: SignUp,
    path:'/signup'

  },
  {
    name: 'LogIn',
    component: LogIn,
    path:'/login'

  },
  {
    name: 'AddPage',
    component: AddPage,
    path:'/addvehicle'
  },
  {
    name: 'UpdatePage',
    component: UpdatePage,
    path:'/updatevehicle'
  }
]

const router = createRouter (
  { history: createWebHashHistory(), routes }
)

export default router