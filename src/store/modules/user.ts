import { defineStore } from 'pinia'
import { useMenuStore, useTabStore } from '@/store'
import { setLocalStorage, removeLocalStorage } from '@/utils/storage'

export interface UserState {
  token: string
  username: string
  nickname: string
  avatar: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: '',
    username: '',
    nickname: '',
    avatar: ''
  }),
  getters: {},
  actions: {
    setUserInfo(data: any) {
      const { token, username, nickname, avatar, menuList } = data
      this.token = token
      this.username = username
      this.nickname = nickname
      this.avatar = avatar
      setLocalStorage('token', token)
      const menuStore = useMenuStore()
      menuStore.setMenuList(menuList)
    },
    logout() {
      removeLocalStorage('token')
      const tabStore = useTabStore()
      const menuStore = useMenuStore()
      tabStore.$reset()
      menuStore.$reset()
      this.$reset()
      this.$router.removeRoute('layout')
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
