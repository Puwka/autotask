import axios from 'axios';

const api = '/api'

export default {
    login(data) {
        return axios.post(`${api}/user/signin`, data)
            .then(response => response)
            .catch(error => Promise.reject(error.response));
    },
    getUsers() {
        return axios.get(`${api}/user/list`)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
    getUser() {
        return axios.get(`${api}/user`)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
    getTasks() {
        return axios.get(`${api}/task/list`)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
    createTask(payload) {
        return axios.post(`${api}/task`, payload)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
    getTask(id) {
        return axios.get(`${api}/task/${id}`)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
    editTask(task) {
        return axios.put(`${api}/task/${task.id}`, task)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
    deleteTask(taskId) {
        return axios.delete(`${api}/task/${taskId}`)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    },
}
