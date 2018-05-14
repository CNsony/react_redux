import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://www.guinaben.com:8070';
axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.responseType="json";

//request
axios.defaults.transformRequest=[function (data) {
    data = qs.stringify({});
    return data
}]

//response
axios.defaults.transformResponse = [
    function (data) {
        return data
    }
]

// axios.defaults.headers = {"X-Requestd-With":"XMLHttpRequest"}

//POST传参序列化
axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    alert("错误的传参");
    return Promise.reject(error);
});
//code状态码200判断
axios.interceptors.response.use((res) =>{
    if(res.data.code != '200'){
        alert(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    alert("网络异常");
    return Promise.reject(error);
});
export default axios;
