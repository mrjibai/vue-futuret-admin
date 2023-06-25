<template>
    <!-- 路由缓存 -->
    <div class="wangwang_ulTaView">
        <div class="scop_wawang">
            <ul class="Tates">
                <li @click="getNavgater(i.path)" :class="isRouters(i.path)" v-for=" i  in  listRouter" :key="i.name">
                    <a-dropdown trigger="contextmenu" v-if="i.path !== '/home'">
                        <div>
                            {{ i.meta.title }}
                            <close-outlined v-if="i.meta.title !== '首页'" class="tetxsiocn"
                                @click.stop="delRouterSession(i)" />
                        </div>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">
                                        <RedoOutlined />
                                        刷新
                                    </a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">
                                        <CloseOutlined />
                                        关闭
                                    </a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">关闭其他</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">全部关闭</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">当前页全屏</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <div v-else>
                        {{ i.meta.title }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup  name="wangwangRoute" lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Session } from '/@/units/Store'
import { computed } from 'vue'
import { RouterStore, RouterSession } from '/@/stores/RouterSrore'
import { CloseOutlined, MenuUnfoldOutlined, DownOutlined, RedoOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const route = useRoute()
// 获取缓存路由
const rouSession = RouterSession()
// 跳转路由
const getNavgater = (path: string): void => {
    router.push(path)
}
const isRouters = (routepath: string): string => {
    if (routepath === route.fullPath) {
        return 'actives'
    }
    return ''
}

// 删除
const delRouterSession = (row: any): void => {
    let lisRouterS = Session.get('RouterslistSeeion') || []
    lisRouterS = lisRouterS.filter((v) => v.path !== row.path)
    rouSession.RouterSessionlist = lisRouterS
    Session.set('RouterslistSeeion', lisRouterS)
}

// 缓存路由
const listRouter = computed(() => {
    return rouSession.RouterSessionlist
})
</script>

<style scoped lang="scss">
.wangwang_ulTaView {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--wang-bgcolor);
    width: 100%;
    overflow: hidden;
    position: relative;

    .scop_wawang {
        max-width: 80vw;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .Tates {
        display: flex;
        height: 100%;
        align-items: center;
        box-sizing: border-box;
        padding-top: 4px;

        li {
            flex-shrink: 0;
            justify-content: center;
            padding: 0 20px;
            display: flex;
            color: var(--wang-text-color);
            align-items: center;
            height: 25px;
            transition: all 0.4s;
            cursor: pointer;
            border-radius: 20px 0;
            margin: 0 2px;
            background-color: var(--wang_router-color);

            .tetxsiocn {
                margin-left: 10px;

                &:hover {
                    background-color: var(--wang-color-primary-lighter);
                    color: white;
                    border-radius: 50%;
                }
            }

            &:hover {
                background-color: var(--wang-color--parimary-bg);
            }
        }

        .actives {
            background-color: var(--wang-color--parimary-bg);
            color: var(--wang-color-primary-lighter);
        }
    }
}
</style>