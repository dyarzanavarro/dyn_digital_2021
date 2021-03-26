<template>
  <div>
    <v-container>
      <v-card elevation="24" max-width="360" class="mx-auto">
        <v-carousel
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          :touch="{ left: onSwipeLeft, right: onSwipeRight }"
          cycle
          max-width="360"
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src"
          >
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: "textures/daniel1_snow.jpg",
        },
        {
          src: "textures/daniel2_haircut.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  methods: {
    onSwipeLeft() {
      slide--;
    },
    onSwipeRight() {
      slide++;
    },
  },
};
</script>

<style scoped>
.title-over {
  color: white;
  font-weight: bold;
  margin-right: 0;
  float: right;
}
</style>