<template>
  <v-row>
    <v-col cols="12" sm="7" md="6" lg="7">
      <v-chip-group active-class="primary--text" column multiple>
        <v-chip
          v-for="tag in tags"
          :key="tag"
          link
          outlined
          :color="tag.color"
          filter
        >
          {{ tag.title }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    tags: [
      {
        title: "E-commerce",
        color: "purple",
      },
      {
        title: "UX/UI",
        color: "pink",
      },
      {
        title: "Agile Process",
        color: "red",
      },
      {
        title: "Development",
        color: "orange",
      },
      {
        title: "Fun",
        color: "yellow lighten-1",
      },
    ],
  }),
};
</script>

<style>
</style>