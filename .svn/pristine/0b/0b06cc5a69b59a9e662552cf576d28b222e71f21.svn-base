<script setup lang="ts">
import { onMounted } from 'vue'

import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { RouterLink, RouterView } from 'vue-router'
import { getmark } from '/@/units/watermark'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const { watermark } = getmark()

const locale = zhCN
onMounted(() => {
  watermark('Vue-Wangwang-admin')
})
</script>

<template>
  <a-config-provider :locale="locale">
    <a-style-provider hash-priority="high">
      <RouterView />
    </a-style-provider>
  </a-config-provider>
</template>

<style scoped lang="scss">
.wrapper {
  .cs {
    font-size: 44px;
  }
}
</style>
