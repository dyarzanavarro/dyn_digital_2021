<template v-slot:default="{ hover }">
  <v-card class="mx-auto" max-width="300">
    <v-img
      lazy-src="https://picsum.photos/200/200"
      src="https://picsum.photos/200/200"
    />
    <v-card-title>{{ card.title }}</v-card-title>
    <v-card-text>{{ card.snippet }}</v-card-text>
    <v-card-actions>Buy me now</v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
</style>