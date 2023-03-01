// import { IMenu, IRoute } from '@/interfaces'
// import { useMenuStore } from '@/stores'
// import { cloneDeep } from 'lodash-es'
// import router from './index'

// const filterHiddenMenus = (arr: IMenu[], level?: number, result = []) => {
//   const _result = arr
//     .filter(item => item.hidden !== true)
//     .map(item => {
//       item.level = level ? level + 1 : 1
//       if (item.list?.length) {
//         item.list = filterHiddenMenus(item.list, item.level, result)
//       }
//       return item
//     })
//   return _result
// }

// export const handleMenuInfos = (menuList: IMenu[]) => {
//   const _menuList = cloneDeep(menuList)
//   const menuStore = useMenuStore()
//   menuStore.SET_MENULIST(_menuList)
//   const dynamicMenu = getDynamicMenu(_menuList)
//   menuStore.SET_DYNAMICROUTELIST(dynamicMenu)
//   const realMenuList = filterHiddenMenus(menuList)
//   menuStore.SET_REALMENULIST(realMenuList)
// }

// const flatLeafs = (arr: IMenu[], result: IMenu[] = [], rootname?: string) => {
//   if (!arr?.length) return result
//   arr.forEach(item => {
//     item.rootname = item.parentId === 1 ? item.perms : rootname
//     item.list?.length ? flatLeafs(item.list, result, item.rootname) : result.push(item)
//   })
//   return result
// }

// // 根据(原始)菜单生成动态路由
// export const getDynamicMenu = (menuList: IMenu[]) => {
//   const allLeafs = flatLeafs(menuList)
//   const dynamicMenu = initRoute(allLeafs)
//   return dynamicMenu
// }

// const modules = import.meta.glob(`../views/**/*.vue`)
// const notFound = async () => await import('@/layouts/notFound.vue')
// export const initRoute = (list: IMenu[], dynamicMenu: IRoute[] = []) => {
//   list.forEach((item: any) => {
//     dynamicMenu.push({
//       name: item.perms,
//       path: item.url,
//       component: modules[`../views/${item.component}.vue`] || notFound,
//       meta: {
//         title: item.name,
//         keepAlive: Boolean(item.isCache),
//         rootname: item.rootname
//       }
//     })
//   })
//   return dynamicMenu
// }

// // 根据name属性设置缓存页面
// export const addCacheList = (list: IRoute[]) => {
//   const menuStore = useMenuStore()
//   const cachenameList = list.filter((item: IRoute) => item.meta.keepAlive).map((item: IRoute) => item.name)
//   menuStore.SETCACHE(cachenameList)
// }

// // 动态添加路由对象(登录or刷新)
// export const addRouters = (list: any) => {
//   // 添加完动态路由后再添加404页面，避免刷新后获取不到目标页面直接进入404页面的情况
//   const errorPage = {
//     path: '/:catchAll(.*)',
//     name: 'notFound',
//     component: async () => await import('@/layouts/notFound.vue')
//   }
//   router.addRoute({
//     path: '/',
//     name: 'home',
//     component: async () => await import('../views/Home/index.vue'),
//     children: [...list, errorPage]
//   })
//   // 设置需要缓存的菜单列表
//   addCacheList(list)
// }
