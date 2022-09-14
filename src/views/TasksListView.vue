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
        <v-expansion-panel-header class='ml-5'> {{ tarefa.title }}

        </v-expansion-panel-header> 
        
        <v-expansion-panel-content>
          <v-banner two-line>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-lock"
        color="white"
      >
        mdi-lock
      </v-icon>
    </v-avatar>

   

    <template v-slot:actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
        :to="{ name: 'taskUpdate', params: { id: tarefa.id } }"
      >
        Editar
      </v-btn>
    </template>
  </v-banner>
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
