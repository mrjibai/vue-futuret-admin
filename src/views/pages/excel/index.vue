<template>
    <FuCard :title="$t('message.excel.title')">
        <a-alert type="success" style="margin-bottom: 10px;">
            <template v-slot:message>
                {{ $t('message.excel.messageAlert') }}
            </template>
        </a-alert>
        <div class="edit">
            <luckexcel />
        </div>
    </FuCard>
</template>

<script setup  name="excel" lang="ts">
import { onMounted } from 'vue';
import FuCard from '/@/components/FuCard/index.vue'
import luckexcel from './luckexcel.vue';
</script>

<style scoped lang="scss">
.edit {
    position: relative;
    width: 100%;
    height: 66vh;

    :deep(.luckysheet_info_detail) {
        display: none !important;
    }

    :deep(.luckysheet-scrollbar-ltr) {
        z-index: 100;
    }
}
</style>