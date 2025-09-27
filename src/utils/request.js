import axios from "axios";
import { ElMessage } from "element-plus";
import {useTokenStore} from "@/stores/TokenStore"

const request = axios.create({
    // "http://127.0.0.1:8080"
    // "http://47.107.232.223:8080"
    baseURL:"http://127.0.0.1:8080",
    //过期时间5秒
    timeout:5000,
    withCredentials:true
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
    const TokenStore = useTokenStore();
    // 在发送请求之前做些什么,比如在请求头headers中加东西,比如token
    if(TokenStore.token) {
        if (!(config.data instanceof FormData)) {
            config.headers["Content-Type"] = 'application/json;charset=utf-8';
        }
        // config.headers["Content-Type"] = 'application/json;charset=utf-8';
        config.headers.Authorization = TokenStore.token;
    }

    return config;
} , (err) => {
    ElMessage.warning("发出的请求可能有错")
    return Promise.reject(err)
})

// 添加响应拦截器
request.interceptors.response.use((res) => {
    if(res.data.code !== 200) {
        ElMessage.warning("可能出错，出错原因为：" + res.data.data)
        return Promise.reject(res.data)
    }
    return res.data;

} , (err) => {
    ElMessage.error("接收响应出错了")
    return Promise.reject(err);
})

export default request;