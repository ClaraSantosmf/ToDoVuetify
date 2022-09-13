<template>
  <v-row justify="center" class="pa-md-16 mx-lg-auto">

    <v-expansion-panels inset>
      <v-expansion-panel v-for="tarefa in tasks" :key="tarefa.id">
        <v-expansion-panel-header> {{ tarefa.title }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container></v-container>
          <v-chip
      class="ma-2"
      color=deep-purple lighten-4
      label
      text-color="white"
    >
      <v-icon left>
        mdi-label
      </v-icon>
      {{tarefa.project}}
    </v-chip>

    <v-checkbox
              v-model="ex4"
             
              color=deep-purple lighten-4
              value="indigo"
              hide-details
              left
            ></v-checkbox>

         </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import T from "../TasksAPi.js"
import axios from "axios";
export default {
  name: "HomeView",
  data: function () {
    return {
      tasks: [],
      task: {
        id: "",
        title: "",
        dueTo: "",
        project: "",
        usuario: "",
        isShow: false,
      },
    };
  },
  methods: {
    setResults() {
      this.tasks = response.data;
    },
  },
  created() {
    const populando = (response) => {
      this.tasks = response
    }
      T.getTasks(populando);
    },

};
</script>
