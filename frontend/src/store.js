import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

import API from './services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: {},
        user: {}
    },
    mutations: {
        SET_TOKEN(state, token) {
            localStorage.setItem('token', token)
        },
        SET_TASKS(state, tasks) {
            state.tasks = tasks
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async login({ commit }, payload) {
            const data = await API.login(payload)
            commit('SET_TOKEN', data.token)
            router.push('/')
        },
        logout({ commit }) {
            commit('SET_TOKEN', '')
            router.push('/auth')
        },
        async getUsers() {
            const data = await API.getUsers()
            console.log(data)
        },
        async getUser({ commit }) {
            const data = await API.getUser()
            commit('SET_USER', data.user)
        },
        async getTasks({ commit }) {
            const data = await API.getTasks()
            commit('SET_TASKS', data.tasks)
        },
        async createTask({ dispatch }, payload) {
            await API.createTask(payload)
            dispatch('getTasks')
        },
        async getTask(ctx, taskId) {
            const data = await API.getTask(taskId)
            return data
        },
        async editTask({ dispatch }, task) {
            await API.editTask(task)
            dispatch('getTasks')
        },
        async deleteTask({ dispatch }, taskId) {
            await API.deleteTask(taskId)
            dispatch('getTasks')
        }
    },
})
