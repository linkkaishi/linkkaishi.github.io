import login from './components/login.vue'
import Container from './components/Container.vue'
import Apply from './components/Apply.vue'
import Linkman from './components/Linkman.vue'
import More from './components/More.vue'
import About from './components/About.vue'

const routers = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    component: login
  },
  {
    path: '/Container',
    name: 'Container',
    component: Container
  },
  {
    path: '/',
    component: Container
  },
  {
    path: '/Apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/',
    component: Apply
  },
  {
    path: '/Linkman',
    name: 'Linkman',
    component: Linkman
  },
  {
    path: '/',
    component: Linkman
  },
  {
    path: '/More',
    name: 'More',
    component: More
  },
  {
    path: '/',
    component: More
  },
  {
    path: '/More/About',
    name: 'about',
    component: About
  },
  {
    path: '/',
    component: About
  }
]
export default routers
