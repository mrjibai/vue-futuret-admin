<template>
    <div class="RouterView">
        <close-outlined class="rightsClose" @click="dataVS.setKeyCompont('defaults')" />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { CloseOutlined } from '@ant-design/icons-vue'
import { DataViewState } from '/@/stores/RouterView'
const dataVS = DataViewState()
</script>

<style scoped lang="scss">
.RouterView {
    position: relative;
    padding: 10px;

    .rightsClose {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 999;
        font-size: 16px;
        cursor: pointer;
        color: var(--wang-text-color);
    }
}
</style>