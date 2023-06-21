import { createApp, defineAsyncComponent, App } from 'vue'

import pinia from '/@/stores'
import Apps from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import Direacives from '/@/directives/index'
import './Theme/index.scss'
import 'nprogress/nprogress.css'
import 'default-passive-events';
import '/@/assets/icons/fontsicon/iconfont.css'
import '/@/assets/icons/fontsicon/demo.css'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'




const app = createApp(Apps)
function useTable(app: App) {
    app.use(VXETable)
    // 给 vue 实例挂载内部对象，例如：
    // app.config.globalProperties.$XModal = VXETable.modal
    // app.config.globalProperties.$XPrint = VXETable.print
    // app.config.globalProperties.$XSaveFile = VXETable.saveFile
    // app.config.globalProperties.$XReadFile = VXETable.readFile
}

// 自定义指令
// Direacives(app)


// 全局组件
app.component('navTabar_chilren', defineAsyncComponent(() => import('/@/MainPage/navTabar/navTabar_children/index.vue')))
app.use(useTable)
app.use(router)
app.use(Antd)
app.use(pinia)
app.mount('#app')
