<template>
  <div>
    <v-text-field
      dark
      color="#f5f7fa"
      background="transparent"
      placeholder="How are you feeling today"
      type="text"
      counter="20"
      v-model="title"
      :rules="rules"
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
    >
    </v-text-field>
    <v-col class="text-right">
      <v-btn
        class="pa-md-4 mx-lg-auto darken-2"
        outlined
        color="purple"
        rounded
      >
        Tell me
      </v-btn>
    </v-col>
  </div>
</template>

<script>
import * as THREE from "three";
import "vader-sentiment";
export default {
  props: ["value"],
  data: function () {
    return {
      title: "",
      count: 0,
      input: "",
      rules: [(v) => v.length <= 20 || "Max 20 characters"],
    };
  },
  methods: {
    init() {
      const vader = require("vader-sentiment");
      const input = "sad";
      const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
      console.log(intensity);

      if (intensity.pos >= 0.4) {
        console.log("I'm glad to hear it 😃");
      } else {
        console.log("I'm sorry to hear it :(");
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.v-input {
  font-size: 1.4rem;
}
</style>