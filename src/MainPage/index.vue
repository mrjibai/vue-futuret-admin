<template>
    <component :is="RouterViwsFD[DataV.KeyCompo]" />
</template>

<script setup lang="ts" name="/">
import { defineAsyncComponent, ref } from 'vue';
import { DataViewState } from '/@/stores/RouterView'
const DataV = DataViewState()

const RouterViwsFD: any = {
    defaults: defineAsyncComponent(() => import('/@/MainPage/default/index.vue')),
    RouterLaMain: defineAsyncComponent(() => import('/@/MainPage/RouterView/index.vue'))
}
</script>

<style scoped lang="scss"></style>