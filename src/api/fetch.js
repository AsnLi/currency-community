import axios from 'axios';
import { SERVER_BASE_URL } from './config';

export default function fetch (options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: SERVER_BASE_URL,
            timeout: 15000,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'POST,GET'
            }
        });

        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            //check token exit
            console.group("api start!")
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            //check token doSomething
            console.log("get resulted")
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
            console.log("end:",options.url)
            console.groupEnd()
        });
    })
}