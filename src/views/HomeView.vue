<template>
      <v-row justify="center" class="pa-md-16 mx-lg-auto">
    <v-expansion-panels inset>
      <v-expansion-panel
      v-for="tarefa in tasks" 
      :key="tarefa.id">
        <v-expansion-panel-header> {{ tarefa }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>


<script>
import axios from 'axios'
export default {
 
  name: "HomeView",
  data: function(){
  return{
    tasks: [],
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
getTasks() {
   axios.get('http://localhost:3000/tasks')
  .then(response => this.tasks = response.data)
  .catch(function (error) {
  console.log(error);
});
},

setResults () {
        this.tasks = response.data;
},
created(){
  this.getTasks()
},
}

}
</script>
