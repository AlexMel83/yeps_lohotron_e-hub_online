import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue';
import CreatePostForm from '../views/CreatePostForm.vue';
import NewPage from '../views/NewPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/add',
    name: 'CreatePost',
    component: CreatePostForm
  },
  {
    path: '/new',
    name: 'NewPage',
    component: NewPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
