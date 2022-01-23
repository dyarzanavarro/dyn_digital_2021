<template>
  <v-app class="app">
    <Navbar app style="z-index: 999" />
    <v-main fluid class="app">
      <nuxt class="ma-0 pa-0" />
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
  background: $background !important;
  font-family: "Nunito";
  overflow-x: hidden;
}
h1 {
  color: $primary !important;
}
a {
  color: $primary !important;
}
.button {
  color: $primary !important;
}
</style>