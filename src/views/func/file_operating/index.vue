<template>
    <div class="file_operating" ref="file_operating">
        <a-card  title="文件操作" :bordered="false" :bodyStyle="styleB" :headStyle="styleB">
            <template #extra></template>
            <div class="anniu">
                <a-button @click="uploadFile" type="primary" :icon="h(UploadOutlined)">上传文件</a-button>
                <a-button @click="downloadFile" :icon="h(DownloadOutlined)">下载文件</a-button>
                <a-button @click="saveFile" type="default" :icon="h(CheckCircleOutlined)">保存文件</a-button>
            </div>
        </a-card>
    </div>
</template>

<script setup lang="ts" name="file_operating">
import { h,ref } from 'vue'
import { CheckCircleOutlined,UploadOutlined,DownloadOutlined } from '@ant-design/icons-vue'

const styleB =
{
    backgroundColor: 'var(--wang-bgcolor)',
    border: '1px solid var(--wangwang-border)',
    color: 'var(--wang-text-color)',
}
let file_operating = ref<HTMLElement | null>(null)

const uploadFile = () => {
    let div = file_operating?.value
    let input = div?.querySelector('#fileUploadInput') as HTMLInputElement
    if(!input) {
        input = document.createElement('input')
        input.type = 'file'
        input.style.display='none'
        input.id = 'fileUploadInput'
        file_operating?.value?.append(input)
    }
    input.click()
    input.onchange = uploadFileFunc
}

const uploadFileFunc = (e:any) => {
    let file = e.target?.files[0]
}

const downloadFile = () => {

}

const saveFile = () => {

}


</script>

<style scoped lang="scss">
.anniu {
    display: flex;
    flex-flow: row wrap;

    .ant-btn {
        margin: 0 10px;
    }
}
</style>