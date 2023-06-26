<template>
    <div>
        <div class="item">
            <a-alert :message="wangText" type="warning" show-icon />
        </div>
    </div>
</template>

<script setup lang="ts">
const wangText: string =
    '温馨提示： 此权限页面为后端接口测试，此处为展示页面'
</script>

<style scoped lang="scss"></style>