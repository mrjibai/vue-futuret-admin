<template>
    <div>
        <a-button type="primary" @click="opens">{{ $t('message.dataView.messagebutton') }}</a-button>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router' //引入useRouter
const router = useRouter();
const href = router.resolve({ //使用resolve
    name: 'DataViewDemo1',    //这里是跳转页面的name
    path: '/DataViewDemo1',
})
const opens = () => {
    window.open((<any>href.href), '_blank');
}
onMounted(() => {
    opens()
})
</script>

<style scoped></style>