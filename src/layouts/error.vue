<template>
  <v-app dark class="main">
    <v-container>
      <v-card>
        <v-card-title>
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1></v-card-title
        >
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
.main {
  background: $background !important;
  font-family: "Nunito";
}
</style?scoped>
