<template>
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 24 }" autocomplete="off"
        @finish="onFinish">
        <a-form-item name="username" :rules="[{ required: true, message: '请输入账号!' }]">
            <a-input v-model:value="formState.username">
                <template #prefix>
                    <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: '请输入密码!' }]">
            <a-input-password v-model:value="formState.password">
                <template #prefix>
                    <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
            </a-input-password>
        </a-form-item>
        <a-row>
            <a-col :span="14">
                <a-form-item name="authcode">
                    <a-input v-model:value="formState.authcode" placeholder="请输入验证码" />
                </a-form-item></a-col>
            <a-col :span="6" :offset="1">
                <a-form-item>
                    <a-input disabled v-model:value="aucode" placeholder="请输入验证码" />
                </a-form-item>
            </a-col>
        </a-row>
        <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
            <a-button class="btnsumits" type="primary" html-type="submit">登录</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts" name="formlogin">
import { reactive, ref } from "vue";
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { Session } from '/@/units/Store'
import { initFormEndContranRouter } from '/@/router/befformtart'
import { UserStoredefinedStore } from '/@/stores/userinfo'
import { message } from 'ant-design-vue';
import { useRouter } from "vue-router";
interface FormState {
    username: string;
    password: string;
    authcode: string;
}
const router = useRouter()

const userinfos = UserStoredefinedStore()

const formState = reactive<FormState>({
    username: 'admin',
    password: '123456',
    authcode: '1234',
})
const aucode = ref('1234')
// 登录
const onFinish = async (values: any) => {
    //模拟 存储 token 到浏览器缓存
    Session.set('token', Math.random().toString(36).substr(0));

    // 模拟存储数据到session
    Session.set('userName', formState)

    // 设置权限
    await userinfos.Update_userinfoRouter(formState.username)
    const isRouterDome: Boolean | any = await initFormEndContranRouter()
    if (!isRouterDome) await routerfinsh(isRouterDome)
};


/**
 * 跳转路由
 */
const routerfinsh = (isNopwr: Boolean | undefined | any) => {
    if (isNopwr) {
        return message.warning('你没有权限无法登录')
    } else {
        router.push('/home')
    }
}


</script>

<style scoped lang="scss">
.ant-form {
    .ant-form-item {
        .btnsumits {
            width: 100%;
            border-radius: 10px;
        }
    }
}

.ant-input {
    height: 40px;
}
</style>