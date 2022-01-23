<template>
  <v-container>
    <v-toolbar flat color="transparent" class="mainHeader">
      <v-toolbar-title style="align-self: center !important; width: 5rem">
        <NuxtLink to="/">
          <v-avatar class="avatarLogo" size="56"></v-avatar
        ></NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-container nav dense class="hidden-xs-only">
        <v-row no-gutters>
          <v-col cols="6" md="3" lg="6" sm="3"></v-col>
          <v-col cols="4" md="3" lg="2" sm="3" class="text-right">
            <NuxtLink class="navTitle" to="/daniel"><h2>Daniel</h2> </NuxtLink>
          </v-col>
          <v-col cols="4" md="3" lg="2" sm="3" class="text-right">
            <NuxtLink class="navTitle" to="/work"><h2>Work</h2></NuxtLink>
          </v-col>
          <v-col cols="4" md="3" lg="2" sm="3" class="text-right">
            <NuxtLink class="navTitle" to="/contact"><h2>Contact</h2></NuxtLink>
          </v-col>
        </v-row>
      </v-container>

      <div class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          right
          height="auto"
          width="100%"
        >
          <v-list nav dense>
            <v-list-item right>
              <v-list-item-title class="text-right">
                <v-app-bar-nav-icon
                  @click.stop="drawer = !drawer"
                  right
                  class="text-right"
                  ><v-icon>mdi-close-circle-outline</v-icon></v-app-bar-nav-icon
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item right>
              <v-list-item-title class="text-center">
                <NuxtLink class="navTitle" to="/daniel"
                  ><h1>Daniel</h1>
                </NuxtLink></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="text-center">
              <v-list-item-title
                ><NuxtLink class="navTitle" to="/work"
                  ><h1>Work</h1></NuxtLink
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="text-center">
              <v-list-item-title>
                <NuxtLink class="navTitle" to="/contact"
                  ><h1>Contact</h1></NuxtLink
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
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
</style>
