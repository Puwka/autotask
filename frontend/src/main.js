import './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import axios from 'axios'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://192.168.0.104:3000'

const beforeRequest = request => {
    const token = localStorage.getItem('token')
    request.headers.authorization = token
    return request
}

const onSuccess = response => response.data

const onError = error => {
    console.dir(error.response);
    if (error.response && error.response.status === 401) {
        localStorage.setItem('token', null)
        router.push('/auth');
    }
    return Promise.reject(error);
};

axios.interceptors.request.use(beforeRequest)
axios.interceptors.response.use(onSuccess, onError)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
