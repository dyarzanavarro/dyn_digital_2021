<template>
  <v-container class="pa-6">
    <v-toolbar prominent color="transparent" elevation="0">
      <v-toolbar-title style="align-self: center !important">
        <NuxtLink to="/">
          <v-avatar class="avatarLogo" size="56"></v-avatar
        ></NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <NuxtLink style="margin-top: 2rem" class="navTitle" to="/daniel"
          ><h4>daniel</h4>
        </NuxtLink>

        <NuxtLink style="margin-top: 2rem" class="navTitle" to="/work"
          ><h4>work</h4></NuxtLink
        >

        <NuxtLink style="margin-top: 2rem" class="navTitle" to="/contact"
          ><h4>contact</h4></NuxtLink
        >
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.navTitle {
  padding: 1rem;
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
