import './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import axios from 'axios'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

const beforeRequest = request => {
    request.headers.authorization = localStorage.getItem('token')
    return request
}

const onError = error => {
    if (error.response && error.response.status === 401) {
        localStorage.setItem('token', null);
        router.push('/auth');
    }
    return Promise.reject(error);
};

const onSuccess = res => res.data;

axios.interceptors.request.use(beforeRequest)
axios.interceptors.response.use(onSuccess, onError)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    provide: {
        $axios: axios
    }
}).$mount('#app')
