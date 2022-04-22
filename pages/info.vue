<template>
  <div>
    <v-container class="pa-8">
      <v-row>
        <v-col cols="12" xs="12" lg="8" md="8" class="px-o" xl="10">
          <div class="text-h2 font-weight-bold">
            Visualize, Craft & Improve your business
          </div>
          <div class="text-h6 mt-3">
            I spend my time trying to think of solutions to problems and make
            your life easier. I’m also a somewhat normal adult and have a cute
            dog called
            <NuxtLink :to="{ path: '/info', hash: '#boo' }">
              <span class="specialLinks">Boo</span></NuxtLink
            >
          </div>
        </v-col>
        <v-col cols="4" sm="4" xs="12" lg="4" xl="2" class="mb-6 justify-end">
          <v-flex md12 class="justify-end">
            <v-img
              max-width="300"
              class="roundedImg justify-end"
              :src="require('../assets/img/daniel2_haircut.jpg')"
            ></v-img
          ></v-flex>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="pa-6">
      <div class="text-h2 font-weight-bold">Looking for something special?</div>
      <v-card outlined color="#f5f7fa" class="mt-3"
        ><div class="text-h6 mt-3">
          You & your business are unique. So, let's collaborate and find a
          solution that is tailor-made just for you.
        </div>
      </v-card>
      <NuxtLink to="/work">
        <v-btn
          class="button px-0 text-decoration-underline"
          :elevation="0"
          transparent
          plain
        >
          See case studys</v-btn
        ></NuxtLink
      >
    </v-container>

    <v-container class="pa-6">
      <div class="text-h2 font-weight-bold">Stalk me here</div>
      <div class="text-h6 mt-3">
        Like via E-mail, Teams, Whatsapp, Telegram, Slack or smoke sign. Don’t
        actually call me; that would be weird.
      </div>
      <v-row justify="space-between" class="pa-12">
        <a :href="`mailto:danielyarza1@gmail.com`" target="_blank"
          ><v-icon x-large color="#AD1457"> mdi-mail </v-icon></a
        >

        <a href="https://github.com/dyarzanavarro" target="_blank"
          ><v-icon x-large color="#AD1457"> mdi-github </v-icon></a
        >

        <a
          href="https://signal.group/#CjQKIIsajUdsx_txjQIFCBvbsYQo17zDIpMl8iYfnyImwejPEhAL3fH9jVR0gqCZHK0xTFqs"
          target="_blank"
          ><v-icon x-large color="#AD1457"> mdi-chat </v-icon></a
        >

        <a href="https://www.linkedin.com/in/dyarzanavarro/" target="_blank"
          ><v-icon x-large color="#AD1457"> mdi-linkedin </v-icon></a
        >
      </v-row>
    </v-container>
    <v-container class="pa-6">
      <div class="text-h2 font-weight-bold">Most important section</div>
      <v-row class="pa-6">
        <insta-feed
          token="IGQVJVVklaOC1VQ2JMTHMya0tNU1duX2J3Mnpqa2k0ellJS2FYQ1pzTTE4b050b0tfX3ZAXaW00TnYxVWRzZAzZACOFJncV9oSERaWnNqYnVIcUdqblhCSDgzX041V2dOQUxkUTB6Q2F6ME1PcGFoRU5DcAZDZD"
          fields="media_url,media_type,caption,permalink"
          :mediatypes="['IMAGE']"
        >
          <template v-slot:loading="props">
            <h2 v-if="props.loading" class="fancy-loading">
              Loading, please wait...
            </h2>
          </template>

          <template v-slot:feeds="props">
            <v-col cols="4" sm="2" xs="2" lg="2">
              <a :href="props.feed.permalink" rel="noopener" target="_blank">
                <v-img
                  :src="props.feed.media_url"
                  alt="Instagram post"
                  class="InstaImg"
                >
                </v-img>
                <h4 style="color: black" :text="props.feed.caption">
                  {{ props.feed.caption }}
                </h4>
              </a>
            </v-col>
          </template>

          <template v-slot:error="props">
            <div class="fancy-alert">
              {{ props.error }}
            </div>
          </template>
        </insta-feed>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import InstaFeedVue from "../components/InstaFeed.vue";

export default {};
</script>
<style>
.specialLinks {
  color: #892cdc;
}

.roundedImg {
  border-radius: 20%;
}

.InstaImg {
  max-width: 25%;
}

.subtitle {
}
</style>