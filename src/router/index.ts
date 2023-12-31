import { createRouter, createWebHashHistory } from 'vue-router'
import { staterouter, notFoundAndNoPower, dynamic_routing } from './routes'
import pinia from '/@/stores/index';
import NProgress from 'nprogress'
import { Session } from '/@/units/Store'
import { initEndAddRouter } from './befformtart'
import { RouterSession } from '/@/stores/RouterSrore'
import { DataViewState } from '/@/stores/RouterView'
NProgress.configure({
  easing: 'linear', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: 'body', //指定进度条的父容器
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...staterouter, ...notFoundAndNoPower
  ]
})


const RouSeeion = RouterSession(pinia)
const ALKEePaVIE = DataViewState()
/**
 * 全局前置守卫
 */
router.beforeEach((to: any, from: any, next: any) => {
  NProgress.start() //开始
  const userInfo = Session.get('userName') || null
  ALKEePaVIE.setKeyRoute((new Date()).getTime())
  // 判断动态路由是否存在
  const iseReulrts = hasRoute(to)
  if (!iseReulrts) {
    if (userInfo) {
      initEndAddRouter(dynamic_routing)
      next(to.fullPath)
    }
    else {
      if (to.name !== 'login') next({ name: 'login' })
      else
        next()
    }
  } else {
    next()
  }

})


/**
 * 判断当前路由是否存在
 * @param to
 * @returns {boolean}
 */
function hasRoute(to: any): Boolean {
  let find = router.getRoutes().find(item => to.path.includes(item.name));
  return !!find;
}
/**
 * 加载后
 */
router.afterEach((to: any, from) => {
  NProgress.done() //结束
  const obj: fuudarta = {
    path: to.path,
    fullPath: to.fullPath,
    meta: to.meta,
    query: to.query,
    params: to.params,
  }
  let list = Session.get('RouterslistSeeion') || []
  // let list = RouSeeion.RouterSessionlist
  if (to.name === 'login') return
  if (list.length > 0) {
    if (list.some((e: any) => e.fullPath === to.fullPath)) {
      RouSeeion.setSessionRouters([...list])
      Session.set<fuudarta[]>('RouterslistSeeion', [...list])
      return
    }

    RouSeeion.setSessionRouters([...list, obj])
    let cache: any = [];
    let json_str = JSON.stringify([...list, obj], (key, value) => {
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
    RouSeeion.setSessionRouters([obj])
    Session.set<fuudarta[]>('RouterslistSeeion', [obj])
  }

})

export default router
