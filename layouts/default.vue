<template>
  <v-app fluid style="overflow-x: hidden">
    <v-main fluid class="app">
      <Navbar />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app {
  background: $background;
  font-family: "Nunito";
  overflow-x: hidden;
}
html,
body {
  overflow-x: hidden;
}
</style>