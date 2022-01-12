import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from '@/views/BaseLayout/index'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/'
  },
  
  {
   path:'/',
   component: BaseLayout,
   children:[
    {
      path: '',
      name: 'Home',
      component: () => import('@/views/Home/index')
    },
    {
      path: '/home',
      name: 'Home2',
      component: () => import('@/views/Home2/index')
    },
    {
      path: '/appealWay',
      name:'appealWay',
      component: () => import('@/views/AppealWay/index.vue'),
      children:[
        {
          path: '/MethodsVary',
          name: 'MethodsVary',
          component: () => import('@/views/MethodsVary/index.vue')
        },
        {
          path: '/Complain',
          name: 'Complain',
          component: () => import('@/views/Complain/index.vue')
        },
        {
          path: '/Ec',
          name: 'Ec',
          component: () => import('@/views/EC/index.vue')
        },
        {
          path: '/Mc',
          name: 'Mc',
          component: () => import('@/views/MC/index.vue')
        },
        {
          path: '/Appeals',
          name: 'Appeals',
          component: () => import('@/views//Appeals/index.vue')
        },
        {
          path: '/AcademicIntegrity',
          name: 'AcademicIntegrity',
          component: () => import('@/views/AcademicIntegrity/index.vue')
        },
        {
          path: '/QA',
          name: 'QA',
          component: () => import('@/views/QA/index.vue')
        }
      ]
    },
    {
      path: '/appealTypes',
      name:'appealTypes',
      component: () => import('@/views/AppealTypes/index.vue'),
      children:[
        {
          path: '/reasonAnalysis',
          name: 'reasonAnalysis',
          component: () => import('@/views/ReasonAnalysis/index.vue')
        },
        {
          path: '/punishmentWay',
          name: 'punishmentWay',
          component: () => import('@/views/PunishmentWay/index.vue')
        },
        {
          path: '/QA2',
          name: 'QA2',
          component: () => import('@/views/QA2/index.vue')
        }
      ]
    },
    {
      path: '/allCase',
      name: 'AllCase',
      component: () => import('@/views/AllCase/index')
    },
    {
      path: '/urgentAppeal',
      name: 'UrgentAppeal',
      component: () => import('@/views/UrgentAppeal/index')
    },
    {
      path: '/backgroundAscension',
      name: 'UrgentAppeal',
      component: () => import('@/views/BackgroundAscension/index')
    },
    {
      path: '/literature',
      name: 'Literature',
      component: () => import('@/views/Literature/index')
    },
    {
      path: '/EnglishPolished',
      name: 'EnglishPolished',
      component: () => import('@/views/EnglishPolished/index')
    },
    {
      path: '/consult',
      name: 'Consult',
      component: () => import('@/views/Consult/index')
    },
    {
      path: '/consultDetail',
      name: 'ConsultDetail',
      component: () => import('@/views/ConsultDetail/index')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact/index')
    }
   ]
   
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
