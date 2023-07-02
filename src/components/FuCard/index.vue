<template>
    <a-card :title="prop.title" :bordered="false" :bodyStyle="styleB" :headStyle="styleB">
        <slot name="default"></slot>
    </a-card>
</template>

<script setup lang="ts" name="FuCard">
const prop = defineProps({
    title: {
        type: String,
        default: () => 'message'
    }
})
const styleB =
{
    backgroundColor: 'var(--wang-bgcolor)',
    border: '1px solid var(--wangwang-border)',
    color: 'var(--wang-text-color)',
}
</script>

<style scoped lang="scss"></style>