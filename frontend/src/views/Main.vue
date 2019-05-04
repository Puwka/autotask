<template>
    <div class="main">
        <v-toolbar color="primary" dark app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Auto Task Manager</span>
            </v-toolbar-title>
            <v-spacer />
            <v-btn class="white--text" flat @click="logout">
                Выйти
                <v-icon right dark>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view />
        </v-content>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Main',
    methods: mapActions(['logout'])
}
</script>
