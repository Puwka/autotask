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
                                    v-model="name"
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
import { mapActions } from 'vuex'

export default {
    name: 'Auth',
    inject: ['$axios'],
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        doLogin() {
            this.login({ login: this.name, password: this.password })
        }
    }
}
</script>
