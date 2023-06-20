<template>
    <div ref="screeQr" class="scQr">

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCode from 'qrcodejs2-fixes';
const screeQr = ref()


// 初始化二维码
const inQrerinit = (): void => {
    new QRCode(screeQr.value, {
        text: `https://qm.qq.com/cgi-bin/qm/qr?k=qWB_6e7CocfZb2gC_9P_8SvCPX0IWf-w&jump_from=webapi&authKey=teEJj0s6O4muqDVqjOFzltQhgh0ApxG8AsBI9hX0gy9tpd5/jrCGupiQK493zUrs`,
        width: 260,
        height: 260,
        colorDark: '#000000',
        colorLight: '#ffffff',
    })
}

onMounted(() => {
    inQrerinit()
})
</script>

<style scoped lang="scss">
.scQr {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>