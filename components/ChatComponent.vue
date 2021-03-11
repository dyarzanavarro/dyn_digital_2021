<template>
  <v-container
    class="spacing-playground pa-12"
    fluid
    transition="fade-transition"
    style="height: 100vh"
  >
    <v-row class="speech1">
      <v-col class="mx-lg-8" cols="12" sm="12">
        <v-card
          class="rounded-lg ml-sm-12"
          max-width="700"
          elevation="5"
          shaped
          max-height="100"
        >
          <v-card-text>
            <h1 class="display-1 text--primary">It's really you</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="speech2">
      <v-col class="mx-lg-8" cols="12" sm="12">
        <v-card
          class="rounded-lg ml-sm-12"
          max-width="700"
          elevation="5"
          shaped
          max-height="100"
        >
          <v-card-text>
            <h1 class="display-1 text--primary">I've been expecting you</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.speech1 {
  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 5s; /* Firefox < 16 */
  -ms-animation: fadein 5s; /* Internet Explorer */
  -o-animation: fadein 5s; /* Opera < 12.1 */
  animation: fadein 5s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.speech2 {
  -webkit-animation: fadein2 20s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein2 20s; /* Firefox < 16 */
  -ms-animation: fadein2 20s; /* Internet Explorer */
  -o-animation: fadein2 20s; /* Opera < 12.1 */
  animation: fadein2 20s;
}
@keyframes fadein2 {
  from {
    opacity: 0;
    transform: translate(0px, 40px);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
</style>