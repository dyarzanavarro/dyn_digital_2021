<template>
  <div >
          <v-container class = "heroElement"
      >
        <h2 class="stageTitle">
          Fortress of <span class="solitudeForm">Solitude</span>
        </h2>
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

.heroElement{
 background: url('../assets/img/casa_1.png') no-repeat center center;
  background-size: cover;
  margin-top: -12rem;
  height: 50rem;
}
.stageTitle {
  font-size: 3rem;
  color: $dark;
  margin-top: 14rem;
  padding: 1rem;
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
  color: $dark;
  padding: 1rem;

}
.mainCTA {
  background-color: #f7c6b1 !important;
  color: $background;
  font-weight: 700;
 margin-left: 1rem;

}
.featureTitle {
  color: $background;
  font-size: 1.6rem;
  padding-bottom: 1rem;
}
.featureText {
  color: $dark;
  font-size: 1.5rem;
  font-weight: 400;
}
</style>