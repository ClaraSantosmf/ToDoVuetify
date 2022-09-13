<template>
  <div>
    <v-btn
      class="mx-2 ml-15 mt-8"
      fab
      dark
      color="indigo"
      @click="$router.push('/adicionar')"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  <v-row justify="center" class="pa-md-16 mx-lg-auto">

    <v-expansion-panels inset>
      <v-expansion-panel v-for="tarefa in tasks" :key="tarefa.id">
        <v-expansion-panel-header class='ml-5'> {{ tarefa.title }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="11"
        class='ml-n16'
      >
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
  </v-col>
  <v-col
        cols="auto"
        md="1"
        class='mr-1'
        
      >

    <v-checkbox
              color=deep-purple lighten-4
              value="indigo"
              hide-details
              
            ></v-checkbox>
          </v-col>
    </v-row>
         </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>
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
