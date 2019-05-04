<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>

export default {
    name: 'App',
    inject: ['$axios'],
    created() {
        this.$axios.get('/api/user').then(res => console.log(res))
    }
}
</script>
