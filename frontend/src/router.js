import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import Auth from './views/Auth.vue'
import Tasks from './views/Tasks.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: Auth
        },
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '/',
                    name: 'tasks',
                    component: Tasks
                }
            ]
        }
    ],
})
