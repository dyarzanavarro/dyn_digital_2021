<template>
  <v-toolbar prominent color="transparent" elevation="0">
    <v-toolbar-title style="align-self: center !important; margin-top: -1.5rem">
      <NuxtLink to="/">
        <v-avatar class="avatarLogo" size="56"></v-avatar
      ></NuxtLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <NuxtLink class="navTitle" to="/daniel">me</NuxtLink>

      <NuxtLink class="navTitle" to="/together">you</NuxtLink>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {};
</script>
<style scoped>
.navTitle {
  font-size: 1.5rem;
  color: #f5f7fa;
  padding: 1.5rem;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
}

.navTitle:hover {
  color: #bc6ff1;
}

.avatarLogo {
  background-image: linear-gradient(to bottom left, #f5f50a, #ff058a, #8023ea);
  padding: 0.9rem;
}
</style>
