<template>
  <div>
    <div>
      <v-form>
        <v-container>
          <v-text-field v-model="pesquisa">
            <template v-slot:label>
              Pesquise uma task <strong>especifica</strong>
              <v-icon style="vertical-align: middle"> mdi-file-find </v-icon>
            </template>
          </v-text-field>
        </v-container>
      </v-form>
    </div>
    <v-btn
      class="mx-2 ml-15 mt-8"
      fab
      dark
      color="deep-purple accent-4"
      @click="$router.push('/adicionar')"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-row justify="center" class="pa-md-16 mx-lg-auto">
      <v-expansion-panels inset>
        <v-expansion-panel v-for="tarefa in pesquisarTask" :key="tarefa.id">
          <v-expansion-panel-header class="ml-5">
            <div class="justify-space-around">
              <p>{{ tarefa.title }}</p>
              <p>Data de entrega: {{ tarefa.dueTo }}</p>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-banner two-line>
              <div class="align-start">
                <v-chip
                  class="ma-2"
                  color="deep-purple accent-4"
                  label
                  text-color="white"
                >
                  <v-icon left> mdi-label </v-icon>
                  {{ tarefa.project }}
                </v-chip>
              </div>

              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="deep-purple accent-4"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Excluir
                    </v-btn>

                    <v-btn
                      text
                      color="deep-purple accent-4"
                      :to="{ name: 'taskUpdate', params: { id: tarefa.id } }"
                    >
                      Editar
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Excluir task?
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        v-on:click.prevent="deleteTask(tarefa.id)"
                      >
                        Sim
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-banner>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import ApiTasks from "@/api/tasks.api.js";
import axios from "axios";

export default {
  data: function () {
    return {
      dialog: false,
      tasks: [],
      task: {
        id: "",
        title: "",
        dueTo: "",
        project: "",
        usuario: "",
        isShow: false,
      },
      pesquisa: "",
    };
  },
  methods: {

    setResults() {
      this.tasks = response.data;
     
      
      
    },
    async deleteTask(id) {
      const req = await axios.delete(`http://localhost:3000/tasks/${id}`);
      const populando = (response) => {
        this.tasks = response;
      };
      T.getTasks(populando);
      dialog = false;
    },
  },
  computed: {
    pesquisarTask() {
      return this.tasks.filter((e) =>
        e?.title?.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
     
    },
  },

  created() {
    ApiTasks.getTasks().then((data) => {
      this.tasks = data;
    })
    
  },
};
</script>
