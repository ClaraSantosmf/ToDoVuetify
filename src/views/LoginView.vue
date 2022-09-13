<template>
  <CadastroComponente></CadastroComponente>
</template>

<script>
import CadastroComponente from "@/components/cadastroComponente.vue";
export default {
  name: "LoginUser",
  props: {
    source: String,
  },
  components: { CadastroComponente },
};
</script>

<style></style>
