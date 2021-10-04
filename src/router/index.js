import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PageNotFound from '../views/PageNotFound.vue';

const parseId = r => ({ id: parseInt(r.params.id)});

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),

  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),

  },
  {
    path: '/portfolio/experience/:id',
    name: 'experience-details',
    props: parseId,
    component: () => import(/* webpackChunkName: "experience-detail" */ '../views/ExperienceDetail.vue'),
  },
  {
    path: '/portfolio/employment/:id',
    name: 'employment-details',
    props: parseId,
    component: () => import(/* webpackChunkName: "employment-detail" */ '../views/EmploymentDetail.vue'),
  },
  {
    path: '/portfolio/education/:id',
    name: 'education-details',
    props: parseId,
    component: () => import(/* webpackChunkName: "employment-detail" */ '../views/EducationDetail.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
