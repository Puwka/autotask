<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    created() {
        axios.get('/user')
    }
}
</script>
