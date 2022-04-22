<template>
  <div>
    <v-container class="pa-12">
      <div class="text-h2 font-weight-bold">
        Daniel is a passionate UX advocate living in Zurich 🇨🇭
      </div>
      <div class="text-h6 mt-3">
        He often flirts with Scrum, Behavioural Economics & Design Thinking
      </div>
    </v-container>
    <v-container class="pa-12">
      <div class="text-h2 font-weight-bold">Some products I've worked on</div>
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