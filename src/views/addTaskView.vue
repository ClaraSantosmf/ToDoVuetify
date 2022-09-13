<template>
    <v-card
    class="mx-auto px-16 py-16 mx-5 my-15"
    max-width="344"
    outlined>
  <v-text-field
            v-model="message4"
            label="Add Task"
            outlined
            clearable
          ></v-text-field>

          <v-combobox
          v-model="select"
          :items="items"
          label="Tipo de projeto"
          multiple
          chips
        > </v-combobox>
        <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Data de entrega"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
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
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-btn
      class="ma-2"
      outlined
      color="indigo"
    >
      Adicionar tarefa
    </v-btn>
  </v-card>
</template>

<script>
export default {
    data () {
      return {
        select: [],
        items: [
          'Front-end',
          'Back-end',
          'Dev-ops',
        ],
      }
    },

}
</script>

<style>

</style>