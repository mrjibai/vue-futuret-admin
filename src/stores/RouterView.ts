import { defineStore } from "pinia";
/**
 * 打开新的数据展示
 */
export const DataViewState = defineStore("DataViewState", {
    state: () => ({
        KeyCompo: 'defaults',
        // 对于右键刷新的key值进行永远设置
        ISkey_routeK: 0,
    }),
    actions: {
        // 重新修改
        setKeyCompont(keyC: string) {
            this.KeyCompo = keyC
        },
        setKeyRoute(keyR: number = (new Date()).getTime()) {
            this.ISkey_routeK = keyR
        },
    }
})