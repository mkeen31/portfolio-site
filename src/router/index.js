import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PageNotFound from '../views/PageNotFound.vue';

const parseId = r => ({ id: parseInt(r.params.id)});

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),
    meta: {
      title: 'Portfolio | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/portfolio/experience/:id',
    name: 'experience-details',
    props: parseId,
    component: () => import(/* webpackChunkName: "experience-detail" */ '../views/ExperienceDetail.vue'),
    meta: {
      title: 'Experience Details | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/portfolio/employment/:id',
    name: 'employment-details',
    props: parseId,
    component: () => import(/* webpackChunkName: "employment-detail" */ '../views/EmploymentDetail.vue'),
    meta: {
      title: 'Employment Details | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/portfolio/education/:id',
    name: 'education-details',
    props: parseId,
    component: () => import(/* webpackChunkName: "education-detail" */ '../views/EducationDetail.vue'),
    meta: {
      title: 'Education Details | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact | Michael Keen\'s Portfolio Site'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: PageNotFound,
    meta: {
      title: 'Oops! | Michael Keen\'s Portfolio Site'
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if (nearestWithTitle)
  {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta)
  {
    document.title = previousNearestWithMeta.meta.title;
  }
  next();
});

export default router;
