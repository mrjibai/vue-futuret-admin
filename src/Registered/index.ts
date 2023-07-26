import type { App } from 'vue';
import ColorPicker from 'colorpicker-v3'  // 注册组件
import VXETable from 'vxe-table'
import 'colorpicker-v3/style.css' // 引入样式文件
import 'vxe-table/lib/style.css'


import { defineAsyncComponent } from 'vue';


// 引入组件
const KetComponent: any = {
    SvgIcon: defineAsyncComponent(() => import('/@/components/svgIcon/index.vue')),
    FuCard: defineAsyncComponent(() => import('/@/components/FuCard/index.vue')),
    FutureTable: defineAsyncComponent(() => import('/@/components/FutureTable/index.vue')),
    FutureTableTroor: defineAsyncComponent(() => import('/@/components/FutureTable/FutureTableTroor/index.vue'))
}


export default function (app: App) {
    function useTable(app: App) {
        app.use(VXETable)
        // 给 vue 实例挂载内部对象，例如：
        // app.config.globalProperties.$XModal = VXETable.modal
        // app.config.globalProperties.$XPrint = VXETable.print
        // app.config.globalProperties.$XSaveFile = VXETable.saveFile
        // app.config.globalProperties.$XReadFile = VXETable.readFile
    }
    app.use(ColorPicker)
    app.use(useTable)
    // 给 vue 实例挂载内部对象，例如：
    // app.config.globalProperties.$XModal = VXETable.modal
    // app.config.globalProperties.$XPrint = VXETable.print
    // app.config.globalProperties.$XSaveFile = VXETable.saveFile
    // app.config.globalProperties.$XReadFile = VXETable.readFile
    for (const key in KetComponent) {
        if (Object.prototype.hasOwnProperty.call(KetComponent, key)) {
            app.component(key, KetComponent[key as any])
        }
    }
}