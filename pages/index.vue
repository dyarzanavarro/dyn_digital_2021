<template>
  <div>
    <v-container class="pa-12">
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
    </v-container>
    <v-container class="pb-12">
      <div class="text-h3 font-weight-bold pa-6">
        Some products I've worked on
      </div>
      <Hero />
    </v-container>
  </div>
</template>
     

<script>
import Hero from "../components/Hero.vue";
import MainThreeJSScene from "../components/MainThreeJSScene.vue";

export default {
  components: {
    Hero,
    MainThreeJSScene,
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