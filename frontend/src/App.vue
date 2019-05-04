<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'App',
    methods: mapActions(['getUsers']),
    created() {
        this.getUsers()
    }
}
</script>
