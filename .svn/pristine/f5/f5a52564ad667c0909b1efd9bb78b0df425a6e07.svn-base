<template>
    <div class="MainPage">
        <a-layout class="contenPages">
            <navTabar />
            <a-layout>
                <a-layout-header>
                    <HeaderTabar />
                </a-layout-header>
                <a-layout-content>
                    <router-view v-slot="{ Component, route }">
                        <transition name="slide-right" mode="out-in" :duration="{ enter: 200, leave: 300 }">
                            <component :is="Component" :key="ISkey_routeK" />
                        </transition>
                    </router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup lang="ts">
import { onMounted, defineAsyncComponent } from 'vue';
import { DataViewState } from '/@/stores/RouterView'
import { storeToRefs } from 'pinia';
const navTabar = defineAsyncComponent(() => import('/@/MainPage/navTabar/index.vue'))
const HeaderTabar = defineAsyncComponent(() => import('/@/MainPage/HeaderTabar/index.vue'))
const keepAliveRef = DataViewState()
const { ISkey_routeK } = storeToRefs(keepAliveRef)
onMounted(() => {
})
</script>

<style scoped lang="scss">
.MainPage {
    width: 98vw;
    box-sizing: border-box;

    .contenPages {
        width: 100%;
        background-color: var(--wang-bgcolor);
        color: var(--wang-text-color);
        position: relative;

        .ant-layout-content {
            box-sizing: border-box;
            background-color: var(--wang-bgcolor);
            color: var(--wang-text-color);
            width: 100%;
            padding: 0 10px;
            position: relative;
        }

        .ant-layout-header {
            // --a-header-padding: 0px;
            // --a-header-height: 70px;
            padding-inline: 0px;
            background: var(--wang-bgcolor);
            height: auto;
            line-height: 1;
        }


    }
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
// .slide-fade-enter-active {
//     transition: all 0.3s ease-out;
// }

// .slide-fade-leave-active {
//     transition: all 0.5s;
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//     opacity: 0.3;
// }

// .slide-fade-enter-to,
// .slide-fade-leave-from {
//     opacity: 1;
// }
</style>