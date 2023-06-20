import router from './index'
import { dynamic_routing } from './routes'
import { RouteRecordRaw } from 'vue-router';
import { load } from '/@/units/loading'
import { RouterStore } from '/@/stores/RouterSrore'
import pinia from '/@/stores/index';
import { Session, Local } from '/@/units/Store'
import { UserStoredefinedStore } from '/@/stores/userinfo'

const RouteSe = RouterStore(pinia)
const UsEd = UserStoredefinedStore(pinia)
/**
 * 前端控制路由 获取路由
 */
export const initFormEndContranRouter = async (): Promise<void | Boolean> => {
    Local.set('RouterStoreLIST', dynamic_routing)
    // 添加动态路由
    await initEndAddRouter(dynamic_routing)
    // 水杯动态加载动画
    await load.show('')

}

/**
 * 添加路由
 */
export async function initEndAddRouter(Router: RouteRecordRaw[]) {
    const Useinfo = Session.get('userName') || null
    const listRouters = Local.get('RouterStoreLIST') || null
    if (Useinfo) await UsEd.Update_userinfoRouter(Useinfo.username)

    // 设置路由列表
    if (listRouters) RouteSe.MutionsactionSetRouterlist(listRouters[0].children as any)
    else RouteSe.MutionsactionSetRouterlist(Router[0].children as any)
    Router.forEach((route) => {
        router.addRoute(route)
    })
}
