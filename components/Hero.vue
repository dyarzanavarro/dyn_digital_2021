<template>
  <v-container class="Hero" fluid>
    <v-row align="center" justify="center">
      <v-col class="md-6">
        <h1 class="md-5" style="color: #f5f7fa">I'm interested in stuff</h1>
        <p class="md-6" style="color: #f5f7fa">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro id
          saepe. Earum voluptate recusandae aperiam quos nam, perspiciatis
          ducimus et dolore sint, placeat quod assumenda, temporibus omnis!
          Atque, vero.
        </p>
        <v-btn dark color="#8A00FF" class="btn">I like stuff too</v-btn>
      </v-col>

      <v-col>
        <v-img
          :src="require('../assets/img/collage_nobg.png')"
          max-height="350"
          max-width="550"
          alt="landingImage of Daniel"
        />
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col>
          <v-card
            class="my-10 pa-12"
            v-for="card in cards"
            :key="card.index"
            style="background-color: #37474f"
          >
            <v-card-title>
              <h2 style="color: #f5f7fa">{{ card.title }}</h2>
            </v-card-title>
            <v-card-text>
              <v-row style="align: center" class="text-left">
                <v-col class="md-6">
                  <h2 style="color: #f5f7fa">{{ card.subtitle }}</h2>
                  <p style="color: #f5f7fa">
                    {{ card.content }}
                  </p>
                </v-col>
                <v-col :class="card.order" order="first">
                  <v-img
                    :src="card.img"
                    alt="landingImage of Daniel"
                    style="max-width: 300px"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "card 1",
          subtitle: "cardtitle1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit  Unnde porro id saepe. Earum voluptate recusandae aperiam quosnam, perspiciatis ducimus et dolore sint, placeat quod assumenda, temporibus omnis! Atque, vero.",
          img: "../textures/collage.png",
          order: "order-md-6",
        },
        {
          title: "card 2",
          subtitle: "cardtitle1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit  Unnde porro id saepe. Earum voluptate recusandae aperiam quosnam, perspiciatis ducimus et dolore sint, placeat quod assumenda, temporibus omnis! Atque, vero.",
          img: "../textures/collage_nobg.png",
        },
        {
          title: "card 3",
          subtitle: "cardtitle1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit  Unnde porro id saepe. Earum voluptate recusandae aperiam quosnam, perspiciatis ducimus et dolore sint, placeat quod assumenda, temporibus omnis! Atque, vero.",
          img: "../textures/collage.png",
          order: "order-md-6",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>