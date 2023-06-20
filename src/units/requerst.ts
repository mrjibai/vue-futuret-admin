import axios, { AxiosInstance } from 'axios';
import { Session } from '/@/units/Store';
import { Modal, message } from 'ant-design-vue';

// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么 token
        if (Session.get('token')) {
            config.headers!['Authorization'] = `${Session.get('token')}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        const res = response.data;
        if (res.code && res.code !== 0) {
            // `token` 过期或者账号已在别处登录
            if (res.code === 401 || res.code === 4001) {
                Session.clear(); // 清除浏览器全部临时缓存
                window.location.href = '/'; // 去登录页
                Modal.confirm({
                    title: '提示',
                    content: '你已被登出，请重新登录',
                    onOk() {
                        return new Promise((resolve, reject) => {
                            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                        }).catch(() => console.log('Oops errors!'));
                    },
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onCancel() { },
                });
            }
            return Promise.reject(service.interceptors.response);
        } else {
            return response.data;
        }
    },
    (error) => {
        // 对响应错误做点什么
        if (error.message.indexOf('timeout') != -1) {
            message.error('网络超时');
        } else if (error.message == 'Network Error') {
            message.error('网络连接错误');
        } else {
            if (error.response.data) message.error(error.response.statusText);
            else message.error('接口路径找不到');
        }
        return Promise.reject(error);
    }
);

// 导出 axios 实例
export default service;
