<template>
    <div>
        <a-alert :message="messagetext" type="success" style="margin: 10px 0 ;" />
        <a-card title="tagsView操作" :bordered="false" :bodyStyle="styleB" :headStyle="styleB">
            <template #extra></template>
            <div class="anniu">
                <a-button type="primary" @click="reloads" :icon="h(RedoOutlined)">
                    刷新当前页
                </a-button>
                <a-button type="primary" @click="RSclose" :icon="h(CloseOutlined)" ghost>
                    关闭当前页
                </a-button>
                <a-button type="primary" @click="removes({
                    path: route.path,
                    children: []
                })" :icon="h(CloseCircleOutlined)" ghost>
                    关闭其他
                </a-button>
                <a-button danger :icon="h(CloseOutlined)" @click="clears">
                    全部关闭
                </a-button>
                <a-button @click="fullscreen" style="background-color: red;color: #fff;" :icon="h(CloseOutlined)">
                    当前页全屏
                </a-button>
            </div>
        </a-card>
    </div>
</template>

<script setup lang="ts" name="tagsView">
import { h, computed } from 'vue'
import { RedoOutlined, CloseOutlined, CloseCircleOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { Session } from '/@/units/Store'
import { RouterSession } from '/@/stores/RouterSrore'
import { DataViewState } from '/@/stores/RouterView'
const router = useRouter()
const route = useRoute()
const dataVS = DataViewState()
// 获取缓存路由
const rouSession = RouterSession()
const messagetext: string = 'tagsView支持多标签（参数不同），单标签共用（参数不同）'
const styleB =
{
    backgroundColor: 'var(--wang-bgcolor)',
    border: '1px solid var(--wangwang-border)',
    color: 'var(--wang-text-color)',
}
// 刷新当前页面
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
const RSclose = (): void => {
    delRouterSession({
        path: route.path
    })
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
const fullscreen = () => {
    dataVS.setKeyCompont('RouterLaMain')
}

// 缓存路由
const listRouter = computed(() => {
    return rouSession.RouterSessionlist
})
</script>

<style scoped lang="scss">
.anniu {
    display: flex;

    .ant-btn {
        margin: 0 10px;
    }
}
</style>