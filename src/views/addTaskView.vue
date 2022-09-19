<template>
  <v-card class="mx-auto px-16 py-16 mx-5 my-15" max-width="344" outlined>
    <v-text-field
      v-model="task.title"
      label="Add Task"
      outlined
      clearable
    ></v-text-field>

    <v-select
      v-model="task.project"
      :items="items"
      label="Projetos"
      outlined
    ></v-select>

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="deep-purple accent-4" dark v-bind="attrs" v-on="on">
            Novo Projeto
          </v-btn>
        </template>

        <v-card>
          <v-text-field
            v-model="addProject.title"
            label="Add Project"
            outlined
            clearable
          ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text v-on:click="adicionarProjeto()">
              Adicionar Projeto
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="task.dueTo"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="task.dueTo"
          label="Picker in menu"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="task.dueTo" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(task.dueTo)">
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
    <v-btn
      v-on:click="post()"
      class="ma-2"
      outlined
      color="deep-purple accent-4"
    >
      Adicionar tarefa
    </v-btn>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      addProject: { title: "Front-End", title:"Back-end", title:"Dados" },
      items: ["Front-End", "Back-End", "Dados"],
      projetos: [],
      menu: [],
      task: {
        id: "",
        title: "",
        dueTo: "",
        project: "",
        usuario: "",
        estado: "Pendente",
        isShow: false,
      },
    };
  },
  computed: {
    projetosItems() {
      return this.projetos.map((item) => item.title);
    },
  },
  methods: {
    async post() {
      const task = this.task;
      await axios.post("http://localhost:3000/tasks", task);
      this.$router.push({ name: "taskList" });
    },
    async adicionarProjeto() {
      const projeto = this.addProject;
      await axios.post("http://localhost:3000/projetos", projeto);
      this.getProjetos();
      dialog = false;
    },
    getProjetos() {
      axios
        .get("http://localhost:3000/projetos")
        .then((response) => {
          console.log(response.data);
          this.projetos = response.data;
          //(this.items = response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjetos();
  },
};
</script>

<style></style>
