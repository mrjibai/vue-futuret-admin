<template>
    <div class="Toolor" id="Toors">
        <div class="leftbtnBuutoons">
            <slot name="buttons"></slot>
        </div>

        <div class="ttoress">
            <slot name="tools"></slot>
        </div>

        <vxe-pulldown ref="xDown3" placement="bottom-left">
            <template #default>
                <vxe-button size="small" @click="clickEvent3" class="btnCIMg">
                    <SvgIcon name="iconfont icon-biaoge" />
                </vxe-button>
            </template>
            <template #dropdown>
                <div class="my-dropdown3">
                    <a-checkbox-group v-model:value="checkedCities" @change="handleCheckedCitiesChange"
                        name="checkboxgroup">
                        <a-row>
                            <a-col :span="24" v-for="(i, index) in cities" :key="index">
                                <a-checkbox :value="i.title">{{ i.title }}</a-checkbox>
                            </a-col>
                        </a-row>
                    </a-checkbox-group>
                </div>
            </template>
        </vxe-pulldown>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'


const xDown3 = ref()
const clickEvent3 = () => {
    const $pulldown3 = xDown3.value
    $pulldown3.togglePanel()
}
const checkAll = ref(false)
const isIndeterminate = ref(false)
const checkedCities = ref<any>([])
const cities = ref<any>([])
const state = reactive<any>({
    contensUpdate: null
})
const connecCore = (dataRorws: any, setToor: Function) => {
    cities.value = dataRorws
    state.contensUpdate = setToor
    checkedCities.value = dataRorws.map((e: any) => e.title)
}

// 全选<
const handleCheckAllChange = (val: any) => {
    checkedCities.value = val ? cities.value.map((e: any) => e.title) : []
    isIndeterminate.value = false
}

const handleCheckedCitiesChange = (value: any) => {
    state.contensUpdate(value)
    const checkedCount = value.length
    checkAll.value = checkedCount === cities.value.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length
}
defineExpose({
    connecCore
})

</script>

<style lang="scss" scoped>
.Toolor {
    padding-right: 1vw;
    display: flex;

    .leftbtnBuutoons {
        flex: 6;
        display: flex;
        align-items: center;
    }

    .ttoress {
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    .btnCIMg {
        width: 2vw;
        padding: 0;
        margin-top: 0.5vw;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .my-dropdown3 {
        padding: 1vw;
    }

    :deep(.vxe-pulldown--panel) {
        left: -2vw;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.2vw;
        width: 120px;
    }

}
</style>