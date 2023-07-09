<template>
    <div class="waves">
        <a-card  title="波浪指令效果（v-waves）作用于 btn" :bordered="false" :bodyStyle="styleB" :headStyle="styleB">
            <template #extra></template>
            <div class="text" style="color:rgb(128, 128, 128);margin-bottom: 10px;">可选参数 v-waves=" |light|red|orange|purple|green|teal"</div>
            <div class="btns">
                <a-button v-waves>默认效果</a-button>
                <a-button style="background-color: var(--wang-color-primary-lighter);" v-waves="'light'">light 效果</a-button>
                <a-button style="background-color: var(--wang-color-success-lighter);" v-waves="'red'">red 效果</a-button>
                <a-button style="background-color: var(--wang-color-gray-lighter);" v-waves="'orange'">orange 效果</a-button>
                <a-button style="background-color: var(--wang-color-warning-lighter);" v-waves="'purple'">purple 效果</a-button>
                <a-button type="primary" danger v-waves="'green'">green 效果</a-button>
                <a-button style="background-color: var(--wang-color-primary-lighter);" class="blue" v-waves="'teal'">teal 效果</a-button>
            </div>
            
        </a-card>
        <a-card style="margin-top: 20px;" title="波浪指令效果（v-waves）作用于 btn" :bordered="false" :bodyStyle="styleB" :headStyle="styleB">
            <template #extra></template>
            <div class="boxs">
                <div v-waves v-for="i in 20" style="background-color: var(--wang-color-primary-lighter);">{{ i }}</div>
            </div>
        </a-card>
    </div>
</template>

<script setup lang="ts" name="waves">
import { ref } from 'vue'

const styleB =
{
    backgroundColor: 'var(--wang-bgcolor)',
    border: '1px solid var(--wangwang-border)',
    color: 'var(--wang-text-color)',
}


</script>

<style scoped lang="scss">
.waves {

    .btns {
        display: flex;
        flex-wrap: wrap;
        .ant-btn {
            margin-right: 10px;
        }
        &> *:nth-child(n+2) {
            color: #fff;
            border-color: transparent;
            &:hover {
                border-color: transparent;
            }
        }
        
    }

    .boxs {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 5px;
        div {
            display: flex;
            justify-content: center;
            border-radius: 8px;
            align-items: center;
            height: 200px;
        }
    }
    
}
</style>