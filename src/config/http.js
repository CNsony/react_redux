// import axios from 'axios'
// import qs from 'qs'

// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// // axios.defaults.baseURL = 'http://www.guinaben.com:8070';
// axios.defaults.baseURL = 'http://localhost:80';
// axios.defaults.responseType="json";

// //request
// axios.defaults.transformRequest=[function (data) {
//     if(!(data instanceof FormData)){
//         data = qs.stringify(data);
//     }
//     return data
// }]

// //response
// axios.defaults.transformResponse = [
//     function (data) {
//         return data
//     }
// ]

// // axios.defaults.headers = {"X-Requestd-With":"XMLHttpRequest"}

// //POST传参序列化
// axios.interceptors.request.use((config) => {
//     if(config.url==="/web_3D_app/index.php/index/index/create"){
//         config.headers['Content-Type'] = 'multipart/form-data';
//         config.headers.post['Content-Type']='multipart/form-data'
//     }else{
//         config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//     }
    
//     return config;
// },(error) =>{
//     console.error("错误的传参");
//     return Promise.reject(error);
// });
// //code状态码200判断
// axios.interceptors.response.use((res) =>{
//     if(res.data.code != '200'){
//         console.log(res.data.msg);
//         return Promise.resolve(res);
//     }
//     return res;
// }, (error) => {
//     console.error("网络异常");
//     return Promise.reject(error);
// });
// export default axios;
