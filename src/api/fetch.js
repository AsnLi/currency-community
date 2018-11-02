import axios from 'axios';
import { SERVER_BASE_URL } from './config';

export default function fetch (options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: SERVER_BASE_URL,
            timeout: 15000,
            headers: {
                'Accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'POST,GET'
            },
        });

        // 添加请求拦截器
        instance.interceptors.request.use((config) => {
            //check token exit
            console.group(options.url)
            console.time()
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use((response) => {
            //check token doSomething
            console.log(response)
            return response;
        }, function (error) {
            return Promise.reject(error);
        });

        instance(options).then((res) => {
            resolve(res.data);
            return false;
        }).catch((error) => {
            reject(error);
        }).finally(() => {
            console.timeEnd()
            console.groupEnd()
        });
    })
}