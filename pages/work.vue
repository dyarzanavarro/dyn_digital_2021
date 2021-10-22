<template>
  <v-container class="pa-4">
    <v-row
      ><v-col>
        <v-card>
          <v-img
            :src="require('../assets/img/psych_main.png')"
            alt="landingImage of psyCH"
          ></v-img>
          <v-card-text class="pa-6">
            <h1 style="font-size: 1.4rem">psyCH</h1>
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
            <v-btn rounded outlined dark
              ><NuxtLink to="/psyCH">Explore</NuxtLink></v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card dark style="background-color: #232236" class="pa-md-8">
          <v-img
            :src="require('../assets/img/casa_1.png')"
            alt="landingImage of House in Tenerife"
          ></v-img>
          <v-card-text class="pa-6">
            <h1 style="color: #ffffff; font-size: 1.4rem">House Showcase</h1>
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
            <v-btn rounded outlined dark
              ><NuxtLink to="/HouseShowcase">Explore</NuxtLink></v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-md-8">
          <v-img
            style="object-position: center top; background-size: cover"
            :src="require('../assets/img/steppingInto.png')"
            alt="landingImage of House in steppingInto"
          ></v-img>
          <v-card-text class="pa-6">
            <h1 style="font-size: 1.4rem">SteppingInto</h1>
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

            <v-btn rounded outlined dark>
              <NuxtLink to="/steppingInto">Explore</NuxtLink>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

export default {
 
};
</script>
<style>
</style>