<template>
  <div>
    <v-container class="pa-6">
      <h1 class="text-md-h1">Projects</h1>
      <v-container class="pa-6">
        <v-carousel light show-arrows-on-hover hide-delimiter-background
          ><v-carousel-item eager
            ><v-card outlined color="#f5f7fa"
              ><v-card-text
                ><v-img
                  :src="
                    require('../assets/img/psych_iphone12black_portrait.png')
                  "
                  alt="landingImage of psyCH"
                ></v-img></v-card-text></v-card
          ></v-carousel-item>
          <v-carousel-item
            ><v-card outlined color="#f5f7fa"
              ><v-card-text
                ><v-img
                  :src="
                    require('../assets/img/psych_mobile_2_iphone12black_portrait.png')
                  "
                  alt="landingImage of psyCH"
                ></v-img></v-card-text></v-card
          ></v-carousel-item>
          <v-carousel-item
            ><v-card outlined color="#f5f7fa"
              ><v-card-text
                ><v-img
                  :src="
                    require('../assets/img/psych_mobile_3_iphone12black_portrait.png')
                  "
                  alt="landingImage of psyCH"
                ></v-img></v-card-text></v-card
          ></v-carousel-item>
        </v-carousel>
      </v-container>
      <v-row
        ><v-col>
          <v-card :elevation="12">
            <v-img
              :src="require('../assets/img/psych_main.png')"
              alt="landingImage of psyCH"
            ></v-img>
            <v-card-text class="pa-6">
              <h2 class="text-md-h2 pb-3" style="font-size: 1.4rem">psyCH</h2>
              <p
                style="
                  color: grey;
                  font-size: 1.1rem;
                  padding-bottom: 0.4rem;
                  word-wrap: break-word;
                "
              >
                revamp, styling, backend & cms <br />
                psychology students needed a new start
              </p>

              <NuxtLink to="/psyCH">
                <v-btn outlined class="button mt-6" :elevation="6">
                  Explore
                </v-btn></NuxtLink
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            style="background-color: #232236"
            class="pa-md-8"
            :elevation="12"
          >
            <v-img
              :src="require('../assets/img/casa_1.png')"
              alt="landingImage of House in Tenerife"
            ></v-img>
            <v-card-text class="pa-6">
              <h2
                class="text-md-h2 pb-3"
                style="color: #ffffff; font-size: 1.4rem"
              >
                House Showcase
              </h2>
              <p
                style="
                  color: grey;
                  font-size: 1.1rem;
                  padding-bottom: 0.4rem;
                  word-wrap: break-word;
                "
              >
                Does a nice house even exist if <br />
                it's not displayed in a complicated layout?
              </p>

              <NuxtLink to="/HouseShowcase">
                <v-btn outlined class="button mt-6" :elevation="6">
                  Explore
                </v-btn></NuxtLink
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-md-8" :elevation="12">
            <v-img
              style="object-position: center top; background-size: cover"
              :src="require('../assets/img/steppingInto.png')"
              alt="landingImage of House in steppingInto"
            ></v-img>
            <v-card-text class="pa-6">
              <h2 class="text-md-h2 pb-3" style="font-size: 1.4rem">
                SteppingInto
              </h2>
              <p
                style="
                  color: grey;
                  font-size: 1.1rem;
                  padding-bottom: 0.4rem;
                  word-wrap: break-word;
                "
              >
                new site, styling, frontend, backend & cms <br />
                university wanted a place for diversity
              </p>

              <NuxtLink to="/steppingInto">
                <v-btn outlined class="button mt-6" :elevation="6">
                  Explore
                </v-btn></NuxtLink
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

export default {
 
};
</script>
<style>
</style>