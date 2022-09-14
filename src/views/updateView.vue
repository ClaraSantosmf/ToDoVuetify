<template>
  <v-card
    class="mx-auto px-16 py-16 mx-5 my-15"
    max-width="344"
    outlined>
  <v-text-field
            v-model="tasks.title"
            label="Add Task"
            outlined
            clearable
          ></v-text-field>

          <v-select
          v-model="tasks.project"
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
        <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="tasks.dueTo"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="tasks.dueTo"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="tasks.dueTo"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(tasks.dueTo)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-btn
      v-on:click="updateTasks(tasks.id, tasks.title,tasks.project,tasks.dueTo)"
      class="ma-2"
      outlined
      color="indigo"
    >
     Atualizar tarefa
    </v-btn>
  </v-card>
  </template>
  
  <script>
import axios from "axios";
  export default {
    data: () => {
      return {
        items: [
          'Front-end',
          'Back-end',
          'Dev-ops',
        ],
     tasks: [],
      task: {
        id: "",
        title: "",
        dueTo: "",
        project: "",
        usuario: "",
        isShow: false,
      },
        taskId: 0,
      }
    },
    methods:{
updateTasks(id,title,project,dueTo){
  const taskData = {
    title: title,
    project: project,
    dueTo: dueTo,
    isShow:false
  }
  axios.put(`http://localhost:3000/tasks/${id}`, taskData)
  .then((response => {
    console.log('Tarefa salva', response.data)
  }))
  this.$router.push({ name: "taskList" });
},

getUnicaTask() {
  axios.get(`http://localhost:3000/tasks/${this.taskId}`)
  .then(response => this.tasks = response.data)
  .catch(function (error) {
  console.log(error);
});
},
    },
    created() {
      this.taskId = this.$route.params.id || 0
      this.getUnicaTask()
    },
  }
  </script>