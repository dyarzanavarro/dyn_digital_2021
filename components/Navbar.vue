<template>
  <v-container>
    <v-app-bar>
      <v-toolbar-title> <NuxtLink class = "navTitle" to="/">Home</NuxtLink></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-row>
        <v-col>
          <NuxtLink class = "navTitle" to="/daniel">I</NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink class = "navTitle" to="/think">think</NuxtLink>
                  </v-col>
        <v-col>
          <NuxtLink class = "navTitle" to="/stuff">stuff</NuxtLink>
                  </v-col>
        </v-col>
      </v-row>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
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
  font-size: 32px;
  letter-spacing: -0.8px;
  word-spacing: -3.4px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
</style>
