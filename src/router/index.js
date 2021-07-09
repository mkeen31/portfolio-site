import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PageNotFound from '../views/PageNotFound.vue';

const parseId = r => ({ id: parseInt(r.params.id)});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),

  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),

  },
  {
    path: '/portfolio/projects/:id',
    name: 'Project Details',
    props: parseId,
    component: () => import(/* webpackChunkName: "project-detail" */ '../views/ProjectDetail.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
