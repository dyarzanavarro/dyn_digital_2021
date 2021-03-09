<template>
  <v-app>
    <v-main class="app">
      <v-container>
        <Navbar />
        <nuxt />
      </v-container>
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

<style lang="scss">
.app {
  background-color: $background;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
}
</style>