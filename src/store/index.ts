import { createPinia } from 'pinia'
// 标记一个对象,使其永远不会再成为响应式对象
import { markRaw } from 'vue'
import router from '@/routers'
// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)
store.use(({ store }) => {
  store.$router = markRaw(router)
})
export default store

// export * from './modules/app'
// export * from './modules/menu'
// export * from './modules/user'
// export * from './modules/tab'
