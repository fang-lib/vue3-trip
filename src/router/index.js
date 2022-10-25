import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/message.vue')
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue'),
      meta: {
        isHideTabBar: true
      }
    },
    {
      path: '/detail',
      component: () => import('@/views/detail/detail.vue'),
      meta: {
        isHideTabBar: true
      }
    },
    {
      path: '/search-result',
      component: () => import('@/views/search-result/search-result.vue'),
      meta: {
        isHideTabBar: true
      }
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue'),
      meta: {
        isHideTabBar: true
      }
    }
  ]
})

export default router