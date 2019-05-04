<template>
    <v-card raised class="card">
        <v-card-title>
            <div>
                <h3 class="mb-0">{{ task.title }}</h3>
                <div>Тэг: {{ task.tag }}</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-spacer />
            <v-btn
                v-if="task.status === 'backlog'"
                small
                color="success"
                @click.stop="dialog = true"
            >
                В работу
            </v-btn>
            <v-btn
                v-if="task.status === 'inProgress'"
                small
                color="success"
                @click.stop="dialogPoints = true"
            >
                В тестирование
            </v-btn>
            <v-btn
                v-if="task.status === 'testing'"
                small
                color="success"
                @click.stop="toDone()"
            >
                Готово
            </v-btn>
            <v-btn
                small
                color="error"
                @click="deleteTask(task.id)"
            >
                Удалить
            </v-btn>
        </v-card-actions>
        <InProgressModal
            v-model="dialog"
            :taskId="task.id" />
        <TimeModal
            v-model="dialogPoints"
            :taskId="task.id" />
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import InProgressModal from './InProgressModal.vue'
import TimeModal from './TimeModal.vue'

export default {
    name: 'TaskCard',
    components: {
        InProgressModal,
        TimeModal
    },
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            dialog: false,
            dialogPoints: false
        }
    },
    methods: {
        ...mapActions(['deleteTask', 'editTask']),
        toDone() {
            const task = {
                ...this.task,
                status: 'done'
            }
            this.editTask(task)
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin-bottom: 20px;
    }
</style>
