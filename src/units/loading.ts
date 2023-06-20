import { createApp, reactive } from 'vue'

import myLoad from '/@/MainPage/loadings/index.vue'

const msg = reactive({
    show: false,
    title: '加载中...'
})

const $loading = createApp(myLoad, { msg }).mount(document.createElement('div'))
const load = {
    show(title: any = msg.title) { // 控制显示loading的方法
        msg.show = true
        msg.title = title
        setTimeout(() => {
            this.hide()
        }, 1500)
        document.body.appendChild($loading.$el)
    },

    hide() { // 控制loading隐藏的方法
        msg.show = false
    }
}
export { load }