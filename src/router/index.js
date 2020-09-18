import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      title: 'Filllykung - Personal Portfolio'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: 'About Filllykung'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})
router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})

export default router
