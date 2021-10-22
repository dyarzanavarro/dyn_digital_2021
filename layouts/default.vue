<template>
  <v-app fluid style="overflow-x: hidden">
    <v-main fluid class="app">
      <Navbar style="z-index: 999" />
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

<style lang="scss" scoped>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.app {
  background: $background;
  font-family: "Nunito";
  overflow-x: hidden;
}
html,
body {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
h1 {
  color: $primary !important;
}
</style>