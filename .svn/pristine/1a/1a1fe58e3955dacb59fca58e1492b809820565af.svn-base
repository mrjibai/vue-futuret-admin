<template>
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 24 }" autocomplete="off"
        @finish="onFinish">
        <a-form-item name="phone" :rules="[{ required: true, message: '请输入手机号!' }]">
            <a-input v-model:value="formState.phone" placeholder="请输入手机号">
                <template #prefix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
            </a-input>
        </a-form-item>
        <a-row>
            <a-col :span="15">
                <a-form-item name="authcodes" :rules="[{ required: true, message: '请输入验证码!' }]">
                    <a-input v-model:value="formState.authcodes" placeholder="请输入验证码" />
                </a-form-item></a-col>
            <a-col :span="8" :offset="1">
                <a-form-item>
                    <a-button type="primary" ghost>获取短信验证码</a-button>
                </a-form-item>
            </a-col>
        </a-row>
        <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
            <a-button class="btnsumits" type="primary" html-type="submit">登录</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
const formState = reactive({
    phone: '',
    authcodes: ''
})


// 手机号登录发送短信
const onFinish = (paramsFomrs: any): void => {
    console.log(paramsFomrs);
}
</script>

<style scoped lang="scss">
.btnsumits {
    width: 100%;
    border-radius: 15px;
}
</style>