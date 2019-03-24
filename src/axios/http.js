'use strict'
import { showAlert, showFullScreenLoading, tryHideFullScreenLoading } from './loading';
import axios from 'axios';
import qs from 'qs';
import baseURL from '@/axios/baseURL';

const config = {
  timeout: 60000,
  withCredentials: true
}

if(process.env.NODE_ENV === 'development') {
  // 开发环境
} else if(process.env.NODE_ENV === 'production') {
  // 生产环境
  config.baseURL = baseURL.defaultURL;
}

const server = axios.create(config);

server.interceptors.request.use((config) => {
  showFullScreenLoading();
  return config;
}, (error) => {
  console.log(error);
  tryHideFullScreenLoading();
  showAlert({ content: error.status });
  return Promise.reject(error);
});

server.interceptors.response.use((res) => {
  tryHideFullScreenLoading();
  if (res.data.code && res.data.code !== '0') {
    showAlert({ content: res.data.msg });
    return Promise.reject({ code: res.data.code, message: res.data.msg });
  }
  return res;
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
        err.message = '网络异常！'
    }
  }
  if (err.message.search('timeout') !== -1) {
    err.message = '网络超时'
  }

  tryHideFullScreenLoading();
  showAlert({ content: err.message });
  return Promise.reject(err);
});

export default {
  post(url, data, headers = null) {
    return server({
      method: 'post',
      url,
      data: headers ? data : qs.stringify(data),
      headers: headers ? headers : {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url, params) {
    return server({
      method: 'get',
      url,
      params, // get 请求时带的参数
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  form(url, data) {
    return server({
      method: 'post',
      url,
      data, // form 请求时带的参数
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}
