<template>
    <v-dialog v-model="show">
        <v-card>
            <v-card-title>
                <span class="headline">{{ task.title }}</span>
            </v-card-title>
            <v-card-text>
                <v-layout wrap>
                    <v-flex xs12>
                        <div>{{ task.description }}</div>
                        <div>Тэг: {{ task.tag }}</div>
                        <div>Оценка: {{ task.points }} sp</div>
                    </v-flex>
                    <v-flex xs12 mt-5>
                        <v-text-field
                            v-model="task.time"
                            outline
                            label="Затраченное время (в часах)"
                            required />
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="warning"
                    @click="show = false"
                >
                    Отменить
                </v-btn>
                <v-btn
                    color="success"
                    @click="editTask(task); show = false"
                >
                    Отправить в тестирование
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'TimeModal',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Boolean,
            required: true
        },
        taskId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            task: {
                status: 'testing',
                time: 0,
            }
        }
    },
    computed: {
        show: {
            get() {
                if (this.value) {
                    this.getTask(this.taskId)
                        .then(res => {
                            this.task = { ...res.task, ...this.task, executor: res.task.executor.id }
                        })
                }
                return this.value
            },
            set(value) {
                this.$emit('change', value)
            }
        }
    },
    methods: mapActions(['getTask', 'editTask', 'getTasks'])
}
</script>
