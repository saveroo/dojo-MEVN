import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import HomeComponent from './components/HomeComponent';
import CreateComponent from './components/CreateComponent';
import IndexComponent from './components/IndexComponent';
import EditComponent from './components/EditComponent';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: 'create',
      path: '/create',
      component: CreateComponent
    },
    {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
    },
    {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
    }
  ]
})
