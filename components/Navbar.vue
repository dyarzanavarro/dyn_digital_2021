<template>
  <v-container>
    <v-toolbar dense elevation="0" flat style="background-color: #222222"
      ><v-toolbar-title>
        <NuxtLink class="navTitle" to="/">
          <v-img
            :src="require('../assets/img/compass-divider.png')"
            alt="compassLogo of dyn "
            max-width="30" /></NuxtLink
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items style="display: block" class="hidden-sm-and-down">
        <NuxtLink class="navTitle" to="/daniel">let's</NuxtLink>
        <NuxtLink class="navTitle" to="/journey">journey</NuxtLink>
        <NuxtLink class="navTitle" to="/together">together</NuxtLink>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        right
        class="hidden-md-and-up"
        @click="drawer = true"
        color="#f5f7fa"
      ></v-app-bar-nav-icon>

      <v-navigation-drawer app v-model="drawer" right absolute dark temporary>
        <v-list>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink class="navTitle" to="/daniel">let's</NuxtLink>
            </v-list-item-title>
            <v-list-item-title>
              <NuxtLink class="navTitle" to="/journey">journey</NuxtLink>
            </v-list-item-title>
            <v-list-item-title>
              <NuxtLink class="navTitle" to="/journey">together</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {
  data: () => ({ drawer: false }),
};
</script>
<style scoped>
.navTitle {
  font-size: 24px;
  color: #f5f7fa;
  padding: 1.2rem;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
}

.navTitle:hover {
  color: #bc6ff1;
}
</style>
