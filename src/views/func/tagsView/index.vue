<template>
    <div>
        <a-alert :message="messagetext" type="success" style="margin: 10px 0 ;" />
        <a-card title="tagsView操作" :bordered="false" :bodyStyle="styleB" :headStyle="styleB">
            <template #extra></template>
            <div class="anniu">
                <a-button type="primary" @click="reloadS" :icon="h(RedoOutlined)">
                    刷新当前页
                </a-button>
                <a-button type="primary" @click="" :icon="h(CloseOutlined)" ghost>
                    关闭当前页
                </a-button>
                <a-button type="primary" :icon="h(CloseCircleOutlined)" ghost>
                    关闭其他
                </a-button>
                <a-button danger :icon="h(CloseOutlined)">
                    全部关闭
                </a-button>
                <a-button style="background-color: red;color: #fff;" :icon="h(CloseOutlined)">
                    当前页全屏
                </a-button>
            </div>

        </a-card>
    </div>
</template>

<script setup lang="ts" name="tagsView">
import { h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { RedoOutlined, CloseOutlined, CloseCircleOutlined } from '@ant-design/icons-vue'
const messagetext: string = 'tagsView支持多标签（参数不同），单标签共用（参数不同）'
const router = useRouter()
const route = useRoute()
const styleB =
{
    backgroundColor: 'var(--wang-bgcolor)',
    border: '1px solid var(--wangwang-border)',
    color: 'var(--wang-text-color)',
}
// 刷新当前页面
const reloadS = (): void => {
    router.push(route.fullPath)
}

</script>

<style scoped lang="scss">
.anniu {
    display: flex;

    .ant-btn {
        margin: 0 10px;
    }
}
</style>