<template>
  <v-container
    class="Hero"
    fluid
    style="padding-left: 2rem; padding-right: 2rem"
  >
    <v-row align="center" justify="center">
      <v-col class="md-5">
        <h1 class="md-5">I'm interested in stuff</h1>
        <p class="md-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro id
          saepe. Earum voluptate recusandae aperiam quos nam, perspiciatis
          ducimus et dolore sint, placeat quod assumenda, temporibus omnis!
          Atque, vero.
        </p>
        <v-btn dark color="#8A00FF" class="btn">I like stuff too</v-btn>
      </v-col>

      <v-col>
        <v-img
          :src="require('../assets/img/collage.png')"
          max-height="350"
          max-width="550"
          alt="landingImage of Daniel"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>