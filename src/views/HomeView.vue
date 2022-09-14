<template>
    
  <v-parallax
    dark
    src="https://img.freepik.com/free-vector/gradient-liquid-abstract-background_52683-60469.jpg?w=1380&t=st=1663159534~exp=1663160134~hmac=31d98651d02ff3798210e3ce1ef4a4520344abb6db7fb88a81501a8fbe29e608"
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
