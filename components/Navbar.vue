<template>
  <v-container fluid>
    <v-app-bar dense elevation="0" flat style="background-color: #222222"
      ><v-toolbar-title>
        <NuxtLink class="navTitle" to="/">
          <v-img
            :src="require('../assets/img/compass-divider.png')"
            alt="compassLogo of dyn "
            max-width="30" /></NuxtLink
      ></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        style="color: #f5f7fa"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> daniel </v-list-item-title>
          <v-list-item-subtitle> was here </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <NuxtLink class="navTitle" to="/daniel">let's</NuxtLink>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <NuxtLink class="navTitle" to="/journey">journey</NuxtLink>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-compass</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <NuxtLink class="navTitle" to="/together">together</NuxtLink>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style scoped>
.navTitle {
  font-size: 24px;
  word-spacing: -1.5px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
}
</style>
