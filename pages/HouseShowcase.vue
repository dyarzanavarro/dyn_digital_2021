<template>
  <div style="background-color: #f5f7fa !important; height: 400vh">
    <v-container fluid class="pa-0 ma-0 rounded-xl" :elevation="8">
      <v-img
        :src="require('../assets/img/casa_1.png')"
        alt="landingImage of House in Tenerife"
      />
      <v-container
        style="
          position: absolute;
          top: 7rem;
          left: 1.9rem;
          padding-left: 1.5rem;
        "
      >
        <h1 class="stageTitle">
          Fortress of <span class="solitudeForm">Solitude</span>
        </h1>
        <v-row>
          <v-col md="6">
            <p class="stageText text-wrap">
              Donut muffin danish candy ice cream cupcake sugar plum fruitcake.
            </p>
          </v-col>
          <v-col class="hidden-sm-and-down"> </v-col>
        </v-row>
        <v-btn :elevation="8" class="mainCTA rounded-pill">Explore</v-btn>
      </v-container>
    </v-container>
    <v-container>
      <v-row>
        <v-col md="6" class="pa-12"
          ><h1 class="featureTitle">This title says something interesting</h1>
          <h4 class="featureText">
            Donut muffin danish candy ice cream cupcake sugar plum fruitcake.
          </h4></v-col
        >
        <v-col md="6" class="pa-12">
          <v-img
            :elevation="8"
            sizes="350"
            :src="require('../assets/img/casa_2.png')"
            alt="landingImage of House in Tenerife"
            class="rounded-xl"
        /></v-col>
      </v-row>
      <v-row>
        <v-col md="6" class="pa-12">
          <v-img
            :elevation="8"
            sizes="350"
            :src="require('../assets/img/casa_4.png')"
            alt="landingImage of House in Tenerife"
            class="rounded-xl"
        /></v-col>
        <v-col md="6" class="pa-12"
          ><h1 class="featureTitle">This title says something interesting</h1>
          <h4 class="featureText">
            Donut muffin danish candy ice cream cupcake sugar plum fruitcake.
          </h4></v-col
        >
      </v-row>
      <v-row>
        <v-col md="6" class="pa-12"
          ><h1 class="featureTitle">This title says something interesting</h1>
          <h4 class="featureText">
            Donut muffin danish candy ice cream cupcake sugar plum fruitcake.
          </h4></v-col
        >
        <v-col md="6" class="pa-12">
          <v-img
            :elevation="8"
            sizes="350"
            :src="require('../assets/img/casa_5.png')"
            alt="landingImage of House in Tenerife"
            class="rounded-xl"
        /></v-col>
      </v-row>
    </v-container>
    <v-container>
      <h1 style="text-align: center" class="stageTitle">A place to relax</h1>
      <v-carousel>
        <v-carousel-item>
          <v-img
            :elevation="8"
            :src="require('../assets/img/casa_6.jpg')"
            alt="landingImage of House in Tenerife"
            class="rounded-xl"
        /></v-carousel-item>
        <v-carousel-item>
          <v-img
            :elevation="8"
            :src="require('../assets/img/casa_7.jpg')"
            alt="landingImage of House in Tenerife"
            class="rounded-xl"
        /></v-carousel-item>
        <v-carousel-item>
          <v-img
            :elevation="8"
            :src="require('../assets/img/casa_8.jpg')"
            alt="landingImage of House in Tenerife"
            class="rounded-xl"
        /></v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.stageTitle {
  font-size: 4rem;
  color: $background;
}
.solitudeForm {
  position: relative;
  display: inline-block;
  z-index: 100;
}
.solitudeForm:after {
  border-bottom: 0.125em #f7c6b1;
  content: "";
  position: absolute;
  left: 1em;
  right: 0;
  top: 50%;
  width: 80%;
  height: 0.525em;
  background: #f7c6b1;
  z-index: -1;
}
.stageText {
  font-size: 2rem;
  color: $background;
}
.mainCTA {
  background-color: #f7c6b1 !important;
  color: $background;
  font-weight: 700;
}
.featureTitle {
  color: $background;
  font-size: 1.6rem;
  padding-bottom: 1rem;
}
.featureText {
  color: $background;
  font-size: 1.5rem;
  font-weight: 400;
}
</style>