import { defineStore } from 'pinia'

// 用户信息进行判断权限
export const UserStoredefinedStore = defineStore('userinfo', {
    state: (): any => ({ userinfoRouter: '' }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        // 判断admin和普通用户的权限
        Update_userinfoRouter(user: string) {
            this.userinfoRouter = user
        },
    },
})