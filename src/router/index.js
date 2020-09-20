import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import MCPlugin from '../views/MCPlugin.vue'

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
    component: About,
    meta: {
      title: 'About Filllykung'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta:{
      title: 'Projects by Filllykung'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta:{
      title: 'Contact Filllykung'
    }
  },
  {
    path: '/mcplugin',
    name: 'MCPlugin',
    component: MCPlugin,
    meta:{
      title: 'Plugins by Filllykung'
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
