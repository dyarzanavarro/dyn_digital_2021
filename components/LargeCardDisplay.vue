<template>
  <v-container class="containerGrid">
    <h2>{{ cardsSection.title }}</h2>
    <p class="paragraph">
      {{ cardsSection.snippet }}
    </p>
    <v-container class="lighten-5 mb-6">
      <v-row>
        <LargeCard
          v-for="card in cardsSection.cards"
          :key="card.id"
          :card="card"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style scoped>
.containerGrid {
  padding-top: 3rem;
}
</style>