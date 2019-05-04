<template>
    <div class="tasks">
        <v-layout row wrap>
            <v-flex xs12>
                <v-layout>
                    <v-flex>
                        <h1>Список задач</h1>
                    </v-flex>
                    <v-spacer />
                    <v-dialog v-model="dialog" persistent>
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on">Создать задачу</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Создание задачи</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field
                                                v-model="task.title"
                                                outline
                                                label="Название"
                                                required />
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-textarea
                                                v-model="task.description"
                                                outline
                                                label="Описание"
                                                required
                                            />
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-select
                                                v-model="task.tag"
                                                outline
                                                :items="['js', 'python', 'html']"
                                                label="Tag"
                                                required
                                            />
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn
                                    color="blue darken-1"
                                    flat
                                    @click="dialog = false">
                                    Close
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                    flat
                                    @click="handleDialogSave">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout row class="column-container">
                    <TasksColumn
                        :tasks="tasks.backlog"
                        name="Бэклог проекта"
                    />
                    <TasksColumn
                        :tasks="tasks.inProgress"
                        name="В работе"
                    />
                    <TasksColumn
                        :tasks="tasks.testing"
                        name="Тестирование"
                    />
                    <TasksColumn
                        :tasks="tasks.done"
                        name="Завершены"
                    />
                    <TasksColumn
                        :tasks="tasks.archived"
                        name="Архив"
                    />
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TasksColumn from '../components/tasks/TasksColumn.vue'

export default {
    name: 'Tasks',
    components: {
        TasksColumn
    },
    data() {
        return {
            dialog: false,
            task: {
                title: '',
                description: '',
                tag: ''
            }
        }
    },
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['getTasks', 'createTask']),
        handleDialogSave() {
            this.dialog = false
            this.createTask(this.task)
            this.task = {
                title: '',
                description: '',
                tag: ''
            }
        }
    },
    created() {
        this.getTasks()
    }
}
</script>

<style lang="scss">
    .column-container {
        overflow-x: auto;
    }
</style>
