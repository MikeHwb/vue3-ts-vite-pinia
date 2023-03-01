import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import { getLocalStorage } from '@/utils/storage'
// import { checkTokenApi } from '@/api/login'
// import { useMenuStore, useUserStore } from '@/stores'
// import { getDynamicMenu } from './route'

const routes: RouteRecordRaw[] = [
//   {
//     path: '/login',
//     name: 'login',
//     component: async () => await import('@/views/Login/index.vue'),
//     meta: { title: '登录/注册' }
//   },
//   {
//     path: '/',
//     name: 'home',
//     component: async () => await import('@/views/Home/index.vue'),
//     meta: { title: '首页' }
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * token: 判断 token 是否存在?若存在,则验证token是否过期;若不存在,则判断是否进入login页面
 * isTokenExpired: 判断 token 是否过期,通过接口动态获取 -> false过期, true未过期
 * isntRefresh: 判断 是否 刷新页面;true->不是,false->是
 */
// router.beforeEach((to, from, next) => {
//   const { token } = getLocalStorage('userInfos') || ''
//   if (token) {
//     if (to.name !== 'login') {
//       const menuStore = useMenuStore()
//       const isntRefresh = Boolean(menuStore.dynamicRouteList?.length)
//       // console.log('isntRefresh: ', isntRefresh)
//       if (isntRefresh) {
//         if (to.name === 'home' && from.name !== 'login') {
//           checkTokenApi({ token }).then(res => {
//             const { ret, data } = res.data
//             const isTokenExpired = ret === 1 ? data : false
//             if (isTokenExpired) {
//               next()
//             } else {
//               const userStore = useUserStore()
//               userStore.LOGINOUT()
//               next({ name: 'login' })
//             }
//           })
//         } else next()
//       } else {
//         const { menuList } = getLocalStorage('menuInfos')
//         const dynamicMenu = getDynamicMenu(menuList)
//         menuStore.SET_DYNAMICROUTELIST(dynamicMenu)
//         next({ ...to, replace: true })
//       }
//     } else next()
//   } else {
//     to.name !== 'login' ? next({ name: 'login' }) : next()
//   }
// })

// router.afterEach((to: any) => {
//   // 设置document title
//   useTitle(to.meta.title || '禅游科技OA平台')
// })

export default router
