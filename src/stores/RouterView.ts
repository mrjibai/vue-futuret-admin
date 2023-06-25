import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()
/**
 * 打开新的数据展示
 */
export const DataViewState = defineStore("DataViewState", {
    state: () => ({
        KeyCompo: 'defaults',
        // 对于右键刷新的key值进行永远设置
        ISkey_routeK: 0
    }),
    actions: {
        // 重新修改
        setKeyCompont(keyC: string) {
            this.KeyCompo = keyC
        },
        setKeyRoute(keyR: number) {
            this.ISkey_routeK = keyR
        },
        // 刷新当前页面
        live_reloads() {
            router.push({
                path: route.path,
                query: route.query
            })
            this.setKeyRoute(new Date().getTime())
        }
    }
})