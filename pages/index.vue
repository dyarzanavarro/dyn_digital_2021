<template>
  <v-container class="landingSection">
    <v-row align="center" justify="center" no-gutters>
      <v-col class="d-flex justify-center" md="5" offset-md="2">
        <v-container>
          <transition name="fade" appear>
            <h1 class="textField1">Hello.</h1>
          </transition>
          <h1 class="textField2">I've been expecting you</h1>
        </v-container>
      </v-col></v-row
    >
    <MainThreeJSScene />
  </v-container>
</template>
     

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true; // might need this.$nextTick
  },
};
</script>

<style>
.landingSection {
  position: absolute;
}
a {
  text-decoration: none;
}

.textField1 {
  font-size: 3.5rem;
  color: #f5f7fa !important;
}
.textField2 {
  font-size: 3.5rem;
  color: #f5f7fa !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>