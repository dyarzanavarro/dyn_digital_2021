<template>
  <div style="padding-top: 6rem !important">
    <v-container class="landingSection pa-md-8">
      <h1
        class="white--text text--lighten-2 text-md-h1"
        style="font-family: Nunito, sans-serif !important; font-weight: 700"
      >
        Usability starts with collaboration
      </h1>

      <h2 class="grey--text text--lighten-1">
        My current mood: I feel
        <span class="randomFeeling">{{ selectedFeeling }}</span>
        today
      </h2>
    </v-container>
    <v-container class="pa-md-8">
      <v-row
        ><v-col>
          <v-card style="background-color: #232236">
            <h1>Element 1</h1>
          </v-card></v-col
        >

        <v-col>
          <v-card style="background-color: #232236"><h1>Element 2</h1></v-card>
        </v-col></v-row
      >
    </v-container>
    <MainThreeJSScene class="webgl" />
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

<style>
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
.landingSection {
}
.webgl {
  outline: none;
}
.randomFeeling:hover {
  color: #bc6ff1;
}
</style>