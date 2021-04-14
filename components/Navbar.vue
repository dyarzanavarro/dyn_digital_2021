<template>
  <v-container style="padding-top: 1.2rem">
    <v-toolbar elevation="0" style="background-color: #232236"
      ><v-toolbar-title>
        <NuxtLink to="/">
          <v-avatar class="avatarLogo" size="56"></v-avatar
        ></NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <NuxtLink class="navTitle" to="/daniel">me</NuxtLink>

        <NuxtLink class="navTitle" to="/journey">you</NuxtLink>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
.navTitle {
  font-size: 1.2rem;
  color: #f5f7fa;
  padding: 1.2rem;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
}

.navTitle:hover {
  color: #bc6ff1;
}

.avatarLogo {
  background-image: linear-gradient(to bottom left, #f5f50a, #ff058a, #8023ea);
}
</style>
