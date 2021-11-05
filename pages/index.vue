<template>
  <div>
    <v-container class="pa-6">
      <v-container>
        <h2 class="grey--text text--lighten-1">
          My current mood: I feel
          <span class="randomFeeling">{{ selectedFeeling }}</span>
          today
        </h2></v-container
      >
    </v-container>
  </div>
</template>
     

<script>
export default {
  data() {
    return {
      feelings: [
        "fine",
        "pretty good",
        "blue",
        "selectedfeeling😊",
        "like going for a walk",
        "bored",
        "excited 🌟",
        "like listening to music 🎵",
        "like staring into a tiny screen 🖥️",
        "excellent",
        "like writing some code",
        "like designing some stuff",
      ],
      selectedFeeling: "",
      styleObject: {
        color: "red",
        fontSize: "1.4rem",
        background: "red",
      },
      selectedStyle: "",
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.feelings.length);
    this.selectedFeeling = this.feelings[idx];

    const styleidx = Math.floor(Math.random() * this.selectedFeeling.length);
    this.selectedStyle =
      this.styleObject[styleidx] + this.styleObject[styleidx];
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.textField1 {
  font-size: 3.5rem;
}
.textField2 {
  font-size: 2.5rem;
  opacity: 80%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.webgl {
  outline: none;
}

.specialLinks {
  color: #892cdc;
}

.randomFeeling:hover {
  color: #bc6ff1;
}
</style>