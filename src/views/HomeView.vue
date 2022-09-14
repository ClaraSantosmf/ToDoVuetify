<template>
    
  <v-parallax
    dark
    src="../assets/5238994.jpg"
    height="900"
  >
  <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          To do List
        </h1>
        <h4 class="subheading">
          Faça o login se ainda não está cadastrado!
        </h4>
        <v-btn
  elevation="6"
  x-large
  @click="$router.push('/login')"
> Login</v-btn>
      </v-col>
    </v-row>
  </v-parallax>

</template>

<script>

</script>
