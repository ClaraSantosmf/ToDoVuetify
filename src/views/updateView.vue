<template>

<div>
        <v-card
    class="mx-auto px-16 py-16 mx-5 my-15"
    max-width="344"
    outlined>
  <v-text-field
            v-model="task.title"
            label="Add Task"
            outlined
            clearable
          ></v-text-field>

          <v-select
          v-model="task.project"
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
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
        <v-date-picker
          v-model="task.dueTo"
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
            @click="$refs.menu.save(task.dueTo)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-btn
      v-on:click="post()"
      class="ma-2"
      outlined
      color="indigo"
    >
      Adicionar tarefa
    </v-btn>
  </v-card>

    <v-main class="overflow-hidden mt-4">
      <v-container>
        <v-row>
          <v-col class="pa-1" cols="12">
            <v-card>
              <v-card-text>
                <div>#{{ taskId }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</div>
  </template>
  
  <script>
  export default {
    data: () => {
      return {
        items: [
          'Front-end',
          'Back-end',
          'Dev-ops',
        ],
        taskId: 0,
      }
    },
    created() {
      this.taskId = this.$route.params.id || 0
    },
  }
  </script>