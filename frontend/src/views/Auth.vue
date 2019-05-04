<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center mt-3>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Авторизация</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent>
                                <v-text-field
                                    v-model="login"
                                    prepend-icon="person"
                                    name="login"
                                    label="Login"
                                    type="text"
                                />
                                <v-text-field
                                    v-model="password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn @click="doLogin" color="primary">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Auth',
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            axios.post('/user/signin', { login: this.login, password: this.password })
                .then(res => {
                    localStorage.setItem('token', res.token)
                })
        }
    }
}
</script>
