<template>
  <v-app>
    <v-main class="app">
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
}
</style>