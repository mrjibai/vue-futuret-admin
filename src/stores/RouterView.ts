import { defineStore } from "pinia";

/**
 * 打开新的数据展示
 */
export const DataViewState = defineStore("DataViewState", {
    state: () => ({
        KeyCompo: 'defaults',
    }),
    actions: {
        // 重新修改
        setKeyCompont(keyC: string) {
            this.KeyCompo = keyC
        }
    }
})