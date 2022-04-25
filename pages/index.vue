<template>
  <div>
    <v-container class="pa-8">
      <v-row dense>
        <v-col cols="12" sm="3" md="6" lg="6">
          <div class="text-h3 font-weight-bold">
            Daniel is a passionate UX advocate living in Zurich 🇨🇭
          </div>
          <div class="text-h6 mt-3 blue-grey--text">
            He often flirts with Scrum, Behavioural Economics & Design Thinking
          </div>
        </v-col>
        <v-col cols="12" sm="3" md="6" lg="6">
          <MainThreeJSScene />
        </v-col>
      </v-row>
      <div class="py-6">
        <div class="text-h3 font-weight-bold">Some products I've worked on</div>
        <SectionChips />
        <Hero />
      </div>
    </v-container>
  </div>
</template>
     

<script>
import Hero from "../components/Hero.vue";
import MainThreeJSScene from "../components/MainThreeJSScene.vue";
import SectionChips from "../components/SectionChips.vue";

export default {
  components: {
    Hero,
    MainThreeJSScene,
    SectionChips,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.textField1 {
  font-size: 3.5rem;
}
.textField2 {
  font-size: 2.5rem;
  opacity: 80%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.webgl {
  outline: none;
}

.specialLinks {
  color: #892cdc;
}

.randomFeeling:hover {
  color: #bc6ff1;
}
</style>