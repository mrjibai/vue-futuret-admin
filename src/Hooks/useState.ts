import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { Session } from '/@/units/Store'
import { computed } from 'vue'
import { RouterSession } from '/@/stores/RouterSrore'
import { DataViewState } from '/@/stores/RouterView'
export function UseStateCode() {
    const router = useRouter()
    const route = useRoute()
    const dataVS = DataViewState()
    // 获取缓存路由
    const rouSession = RouterSession()
    const delRouterSession = (row: any): void => {
        let lisRouterS = Session.get('RouterslistSeeion') || []
        lisRouterS = lisRouterS.filter((v: any) => v.path !== row.path)
        rouSession.RouterSessionlist = lisRouterS
        Session.set('RouterslistSeeion', lisRouterS)
    }

    const reloads = () => {
        dataVS.setKeyRoute()
        router.push({
            path: route.fullPath,
            query: route.query
        })
    }

    const RSclose = (row: RouteRecordRaw): void => {
        delRouterSession(row)
        router.replace(listRouter.value[listRouter.value.length - 1].path)
    }
    const removes = (row: RouteRecordRaw): void => {
        let lisRouterS = Session.get('RouterslistSeeion') || []
        lisRouterS = lisRouterS.filter((v: any) => v.path === row.path || v.path === '/home')
        rouSession.RouterSessionlist = lisRouterS
        Session.set('RouterslistSeeion', lisRouterS)
    }
    const clears = (): void => {
        removes({
            path: '/home',
            children: [],
        })
        router.replace(listRouter.value[listRouter.value.length - 1].path)
    }
    const fullscreen = (row: RouteRecordRaw) => {
        dataVS.setKeyCompont('RouterLaMain')
        router.push(row.path)
    }

    // 缓存路由
    const listRouter = computed(() => {
        return rouSession.RouterSessionlist
    })
    return {
        reloads,
        RSclose,
        removes,
        clears,
        fullscreen,
        listRouter
    }
}