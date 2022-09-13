<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color=deep-purple lighten-2>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="usuario.nome"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="fa-solid fa-envelope"
                    name="email"
                    label="Email"
                    type="text"
                    v-model="usuario.email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="usuario.senha"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color=deep-purple lighten-2 v-on:click="post()">cadastre-se</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "cadastroComponente",
  props: {
    source: String,
  },
  data: function () {
    return {
      usuario: {
        id: "",
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    async post() {
      const user = this.usuario;
      await axios.post("http://localhost:3000/user", user);
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style></style>
