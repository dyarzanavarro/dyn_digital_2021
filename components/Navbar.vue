<template>
  <v-container>
    <v-toolbar flat color="transparent" class="mainHeader">
      <v-toolbar-title style="align-self: center !important; width: 5rem">
        <NuxtLink to="/">
          <v-avatar class="avatarLogo" size="56"></v-avatar
        ></NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-container nav dense>
        <v-row no-gutters>
          <v-col cols="4" md="6" lg="8" sm="3"></v-col>
          <v-col cols="4" md="3" lg="2" sm="3" class="text-right">
            <NuxtLink class="navTitle" to="/work"><h2>work</h2> </NuxtLink>
          </v-col>
          <v-col cols="4" md="3" lg="2" sm="3" class="text-right">
            <NuxtLink class="navTitle" to="/info"><h2>info</h2></NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped lang="scss">
.avatarLogo {
  background-image: linear-gradient(to bottom left, #f5f50a, #ff058a, #8023ea);
}
.navTitle {
  color: $primary;
}
</style>
