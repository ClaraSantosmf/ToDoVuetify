<template>
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
</template>

<script>
import axios from "axios";
export default {
    data () {
      return {
        items: [
          'Front-end',
          'Back-end',
          'Dev-ops',
        ],
        task: {
      "id": '',
      "title":'',
      "dueTo": '',
      "project": '',
      "usuario": '',
      isShow:false,
    },
      }
    },
    methods:{
    async post(){
        const task = this.task
        await axios.post('http://localhost:3000/tasks',task)
        this.$router.push({ name: "taskList" });
  },
}

}
</script>

<style>

</style>