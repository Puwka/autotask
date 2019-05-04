<template>
    <div class="column">
        <span>{{ name }}</span>
        <TaskCard
            v-for="task in tasks"
            :key="task.id"
            :task="task"
        />
    </div>
</template>

<script>
import TaskCard from './TaskCard.vue'

export default {
    name: 'TasksColumn',
    components: {
        TaskCard
    },
    props: {
        tasks: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .column {
        min-width: 300px;
        min-height: 400px;
        margin-right: 20px;
    }
</style>
