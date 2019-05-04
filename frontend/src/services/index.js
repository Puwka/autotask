import axios from 'axios';

const api = '/api'

export default {
    login(data) {
        return axios.post(`${api}/user/signin`, data)
            .then(response => response)
            .catch(error => Promise.reject(error.response));
    },
    getUsers() {
        return axios.get(`${api}/user`)
            .then(response => response)
            .catch(error => Promise.reject(error.response))
    }
}
