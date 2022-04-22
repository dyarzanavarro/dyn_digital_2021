<template>
  <v-app class="app">
    <Navbar app style="z-index: 999" />
    <v-main fluid class="app">
      <nuxt class="ma-0 pa-0" />
    </v-main>
    <Footer />
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
  font-family: "Roboto";
  overflow-x: hidden;
}
h1 {
  color: $primary !important;
}
a {
}
.button {
  color: $primary !important;
}
</style>