import Vue from "vue"
import Router from "vue-router"
import Home from "./views/home/Home.vue"
import Auth from "./views/auth/Auth.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiredAuth: true }
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: "*",
      redirect: {
        name: "auth"
      }
    }
  ]
})
