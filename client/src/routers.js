import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHashHistory} from "vue-router"
import LogIn from "./components/LogIn.vue"

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

  }
]

const router = createRouter (
  { history: createWebHashHistory(), routes }
)

export default router