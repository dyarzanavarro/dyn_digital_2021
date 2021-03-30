<template>
  <v-container fluid>
    <MainThreeJSScene />
    <v-container
      style="
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
      "
    >
      <h1 style="color: #bc6ff1; font-size: 3.2rem">
        I like digital experiences
      </h1>
      <h1 style="color: #892cdc; font-size: 2.7rem; padding-bottom: 1.4rem">
        and going outside
      </h1>
      <v-btn rounded color="#bc6ff1" dark>Me too</v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>