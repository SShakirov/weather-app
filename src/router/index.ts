import { createRouter, createWebHistory, type RouteLocationNormalized, type RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/modules/forecastModule/components/WeatherForecast.vue')
      },

      {
        path: '/history',
        component: () => import('@/modules/forecastModule/components/WeatherHistory.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  } as RouteRecordRaw,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
