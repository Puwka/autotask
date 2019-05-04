import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

import API from './services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        SET_TOKEN(state, token) {
            localStorage.setItem('token', token)
        },
    },
    actions: {
        async login({ commit }, payload) {
            const data = await API.login(payload)
            commit('SET_TOKEN', data.token);
        },
        logout({ commit }) {
            commit('SET_TOKEN', '')
            router.push('/auth');
        },
        async getUsers() {
            const data = await API.getUsers()
            console.log(data);
        }
    },
})
