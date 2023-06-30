<template>
    <i :class="getIconfont" :style="getSTyle"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String
    },
    size: {
        type: Number,
        default: () => 14
    },
    color: {
        type: String,
        default: () => 'var(--wang-menu-color)'
    }
})

const getIconfont = computed(() => {
    return props?.name
})

const getSTyle = computed(() => {
    return { color: props?.color, FontSize: props?.size }
})
</script>

<style scoped lang="scss"></style>