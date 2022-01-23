<template>
  <div>
    <v-container class="pa-12">
      <h1 style="font-size: 4.4rem">PROJECTS</h1>

      <v-container class="pa-6">
        <v-row>
          <v-col cols="12" sm="4">
            <v-card :elevation="12">
              <v-carousel light show-arrows-on-hover hide-delimiter-background
                ><v-carousel-item eager
                  ><v-card outlined color="#f5f7fa"
                    ><v-card-text
                      ><v-img
                        contain
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
                        contain
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
                        contain
                        :src="
                          require('../assets/img/psych_mobile_3_iphone12black_portrait.png')
                        "
                        alt="landingImage of psyCH"
                      ></v-img></v-card-text></v-card
                ></v-carousel-item>
              </v-carousel>
              <v-card-text class="pa-6">
                <h2 class="text-md-h3 pb-3">psyCH</h2>
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
                  <v-btn
                    outlined
                    class="button rounded-pill mt-6"
                    :elevation="6"
                  >
                    Explore
                  </v-btn></NuxtLink
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
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
                <h2 class="text-md-h3 pb-3" style="color: #ffffff">
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
                  <v-btn class="button1 rounded-pill mt-6" :elevation="6">
                    Explore
                  </v-btn></NuxtLink
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card :elevation="12">
              <v-carousel light show-arrows-on-hover hide-delimiter-background
                ><v-carousel-item eager
                  ><v-card outlined color="#f5f7fa"
                    ><v-card-text
                      ><v-img
                        contain
                        :src="
                          require('../assets/img/steppingInto_iphone12black_portrait.png')
                        "
                        alt="landingImage of steppingInto"
                      ></v-img></v-card-text></v-card
                ></v-carousel-item>
                <v-carousel-item
                  ><v-card outlined color="#f5f7fa"
                    ><v-card-text
                      ><v-img
                        contain
                        :src="
                          require('../assets/img/steppingInto_2_iphone12black_portrait.png')
                        "
                        alt="landingImage of steppingInto"
                      ></v-img></v-card-text></v-card
                ></v-carousel-item>
                <v-carousel-item
                  ><v-card outlined color="#f5f7fa"
                    ><v-card-text
                      ><v-img
                        contain
                        :src="
                          require('../assets/img/steppingInto_3_iphone12black_portrait.png')
                        "
                        alt="landingImage of psyCH"
                      ></v-img></v-card-text></v-card
                ></v-carousel-item>
                <v-carousel-item
                  ><v-card outlined color="#f5f7fa"
                    ><v-card-text
                      ><v-img
                        contain
                        :src="
                          require('../assets/img/steppingInto_4_iphone12black_portrait.png')
                        "
                        alt="landingImage of steppingInto"
                      ></v-img
                    ></v-card-text>
                  </v-card>
                  ></v-carousel-item
                >
              </v-carousel>
              <v-card-text class="pa-6">
                <h2 class="text-md-h3 pb-3">steppingInto</h2>
                <p
                  style="
                    color: grey;
                    font-size: 1.1rem;
                    padding-bottom: 0.4rem;
                    word-wrap: break-word;
                  "
                >
                  new site, styling, frontend, backend & cms university wanted a
                  place for diversity
                </p>

                <NuxtLink to="/steppingInto">
                  <v-btn
                    outlined
                    class="button rounded-pill mt-6"
                    :elevation="6"
                  >
                    Explore
                  </v-btn></NuxtLink
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.button1 {
  background-color: #f7c6b1 !important;
  color: $background;
}
</style>