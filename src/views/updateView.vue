<template>
  <v-card class="mx-auto px-16 py-16 mx-5 my-15" max-width="344" outlined>
    <v-text-field
      v-model="tasks.title"
      label="Add Task"
      outlined
      clearable
    ></v-text-field>

    <v-select
      v-model="tasks.project"
      :items="items"
      label="Projeto"
      outlined
    ></v-select>

    <v-select
      v-model="tasks.estado"
      :items="itemsEstado"
      label="Estado"
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
      <v-date-picker v-model="tasks.dueTo" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(tasks.dueTo)">
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
    <v-btn
      class="ma-2"
      outlined
      color="deep-purple accent-4"
      v-on:click="updateTasks(task)"
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
      itemsEstado: ["Pendente", "Fazendo", "Feito"],
      items: ["Front-end", "Back-end", "Dev-ops"],
      tasks: [],
      taskId: 0,
    };
  },
  methods: {
    updateTasks() {
      axios
        .put(`http://localhost:3000/tasks/${this.tasks.id}`, this.tasks)
        .then((response) => {
          console.log("Tarefa salva", response.data);
        });
      this.$router.push({ name: "taskList" });
    },

    getUnicaTask() {
      axios
        .get(`http://localhost:3000/tasks/${this.taskId}`)
        .then((response) => (this.tasks = response.data))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.taskId = this.$route.params.id || 0;
    this.getUnicaTask();
  },
};
</script>
