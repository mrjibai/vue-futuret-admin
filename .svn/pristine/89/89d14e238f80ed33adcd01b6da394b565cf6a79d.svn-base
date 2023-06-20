import { defineStore } from 'pinia'
import { Session } from '/@/units/Store'
import { RouteRecordRaw } from 'vue-router';
/**
 * 动态路由保存
 */
export const RouterStore = defineStore('RouterStore', {
    state: (): RoutesListState => ({
        routesList: [],
        isColumnsMenuHover: false,
        isColumnsNavHover: false,
    }),
    // 处置事件的
    actions: {
        // 赋值获取路由列表
        MutionsactionSetRouterlist(data: Array<string>) {
            this.routesList = data
        }
    }

})

/**
 * 路由缓存
 */
export const RouterSession = defineStore('RouterSession', {
    state: (): RouterSession => ({
        RouterSessionlist: [],
    }),
    // 处置事件的
    actions: {
        // 赋值获取缓存路由列表
        setSessionRouters(data: fuudarta) {
            let list = Session.get('RouterslistSeeion') || []
            if (data.name === 'login') return
            if (list.length > 0) {
                if (list.some(e => e.fullPath === data.fullPath)) {
                    Session.set('RouterslistSeeion', list)
                    this.RouterSessionlist = list
                    return
                }
                Session.set('RouterslistSeeion', [...list, data])
                this.RouterSessionlist = [...list, data]
            } else {
                Session.set('RouterslistSeeion', [data])
                this.RouterSessionlist = [data]
            }
        },

        // 获取缓存中的路由
        getSessionRouter() {
            const list = Session.get('RouterslistSeeion') || []
            if (list.length > 0) return this.RouterSessionlist = list
        },

        // 赋值
        setlist(roiuterlist: RouteRecordRaw[]) {
            this.RouterSessionlist = roiuterlist
        }
    }

})