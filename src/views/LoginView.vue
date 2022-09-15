<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="deep-purple" lighten-2>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="User"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="deep-purple" lighten-2 @click="cadastrar()"
                  >cadastre-se</v-btn
                >
                <v-btn color="deep-purple" lighten-2 @click="login()"
                  >Logar</v-btn
                >
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
import TaskApi from "@/api/auth.api.js";

export default {
  data: function () {
    return {
      username: "",
      password: "",
      loading: false,
      valid: false,
    };
  },
  methods: {
    async cadastrar() {
      const user = this.usuario;
      await axios.post("http://localhost:3000/user", user);
      this.$router.push({ name: "home" });
    },
    login() {
      this.loading = true;
      TaskApi.login(this.username, this.password)
        .then((resp) => {
          console.log("login ok", resp);
          this.$router.push({ name: "taskList" });
        })
        .catch((error) => {
          console.log("login falhou", error);
          //mostrar toast de usuário ou senha inválidos
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
