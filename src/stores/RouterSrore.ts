import { defineStore } from 'pinia'
import { Session, Local } from '/@/units/Store'
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
                if (list.some((e: any) => e.fullPath === data.fullPath)) {
                    this.RouterSessionlist = [...list]
                    Session.set<fuudarta[]>('RouterslistSeeion', [...list])
                    return
                }
                this.RouterSessionlist = [...list, data]
                let cache: any = [];
                let json_str = JSON.stringify([...list, data], function (key, value) {
                    if (typeof value === 'object' && value !== null) {
                        if (cache.indexOf(value) !== -1) {
                            return;
                        }
                        cache.push(value);
                    }
                    return value;
                });
                cache = null;	//释放cache
                let listCodes: fuudarta[] = JSON.parse(json_str)
                Session.set('RouterslistSeeion', listCodes)

            } else {
                this.RouterSessionlist = [data]
                Session.set<fuudarta[]>('RouterslistSeeion', [data])

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