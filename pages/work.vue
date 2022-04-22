<template>
  <div>
    <v-container class="pa-12">
      <div class="text-h3 font-weight-bold">My projects & products</div>
      <div class="text-h6 mt-3">
        I'll try to give a quick intro on what my specific roles in this
        products were.
      </div>
      <Hero />
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: {
    Hero,
  },
};
</script>
<style lang="scss" scoped>
.button1 {
  background-color: #f7c6b1 !important;
  color: $background;
}
</style>