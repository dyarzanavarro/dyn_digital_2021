<template>
  <v-container>
    <v-row dense>
      <v-col
        class="col-4 .col-sm-6 .col-md-8"
        v-for="card in cards"
        :key="card.index"
        :cols="card.flex"
      >
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition-group="fade-transition"
        >
          <div>
            <v-card class="my-2 mx-auto">
              <v-img
                height="360"
                :src="require(`@/assets/img/${card.src.toLowerCase()}.png`)"
              ></v-img>
            </v-card>
            <v-card-title class="pa-2">
              <h2>{{ card.title }}</h2>
            </v-card-title>
            <v-card-text>
              <v-row style="align: center" class="text-left">
                <v-col class="pa-2">
                  <h2 class="blue-grey--text text--lighten-1 py-2">
                    {{ card.subtitle }}
                  </h2>
                  <p>
                    {{ card.content }}
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "yallo",
          subtitle: "eCommerce Redesign & Replattforming",
          content:
            "Redesign & Designsysteme der Ecommerce Brands yallo, lebara & swype;HTML, CSS & Javascript in Angular für kleinere oder grössere «QuickFixes»; Scrum Product Owner Web Development Team; Design Thinking Workshops, User Research (qualitative & quantitative)",
          order: "order-md-12",
          flex: 12,
          src: "yol_2-min",
        },
        {
          title: "Sunrise",
          subtitle: "eCommerce Workflow & A/B Testing",
          content:
            "Integriert im UX Team, Arbeit an Design / Aufbau von Projekten; A/B Testing in Adobe Suite (Target), Analyse und Empfehlungen; HTML, CSS & Jquery für kleinere oder grössere «QuickFixes»; Design Thinking Workshops, User Research (qualitative & quantitative)",
          flex: 6,
          src: "sunrise_1-min",
        },
        {
          title: "psych",
          subtitle: "Design, Development & Setup",
          content:
            "revamp, styling, backend & cms: psychology students needed a new start ",
          order: "order-md-12",
          flex: 6,
          src: "psych_isometric-min",
        },
        {
          title: "Study 4",
          subtitle: "Design, Development & Setup",
          content:
            "Does a nice house even exist if it's not displayed in a complicated layout? ",
          order: "order-md-12",
          flex: 6,
          src: "casa_1",
        },
        {
          title: "stepping Into",
          subtitle: "Design, Development & Setup",
          content:
            "new site, styling, frontend, backend & cms: A university wanted a place for diversity",
          order: "order-md-12",
          flex: 6,
          src: "steppingInto",
        },
      ],
    };
  },
  computed: {
    /*    imageSrc() {
      var images = require.context("../assets/img/", false, /\.png$/);
      return images("./" + this.cards + ".png");
    }, */
  },
};
</script>

<style scoped>
.card {
  transition: box-shadow 0.3s ease 0s, opacity 200ms ease 0s,
    transform 300ms ease 0s;
  opacity: 1;
  transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1.05)
    scaleY(1.1) scaleZ(1);
  display: block;
  transform-style: preserve-3d;
}
</style>