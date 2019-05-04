<template>
    <div class="main">
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Auto Task Manager</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
                <span class="mr-2">Latest Release</span>
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view />
        </v-content>
    </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>
