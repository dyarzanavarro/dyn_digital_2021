<template>
  <div>
    <v-container class="pa-6">
       <v-layout row>
        <v-flex md8 class="pa-6">
          <h1 class="text-xl-h1">
            Daniel can help you visualize, craft and improve your business
          </h1>
          <h2 class="text-md-h4 mt-4 mb-4">
            I spend my time trying to think of solutions to problems and make
            your life easier. I’m also a somewhat normal
            <NuxtLink to="/daniel"
              ><span class="specialLinks"> adult</span></NuxtLink
            >
            and have a cute dog called
            <NuxtLink :to="{ path: '/daniel', hash: '#boo' }">
              <span class="specialLinks">Boo</span></NuxtLink
            >
          </h2>
          <NuxtLink to="/work">
            <v-btn outlined class="button mt-6 mb-12" :elevation="6">
              Find out more</v-btn
            ></NuxtLink
          ></v-flex
        >
        <v-flex md4>   <v-img class="roundedImg" :src="require('../assets/img/daniel2_haircut.jpg')"></v-img></v-flex>
      </v-layout>
    </v-container>

    <v-container class="pa-6">
      <h2 class="text-md-h2">Looking for something special?</h2>
      <v-card outlined color="#f5f7fa" class="mt-3"
        ><h4 class="text-md-h4 mb-6">
          You & your business are unique. So, let's collaborate and find a
          solution that is tailor-made just for you.
        </h4>
        <v-img src="https://picsum.photos/1920/1080?random"></v-img>
      </v-card>
    </v-container>

    <v-container class="pa-6">
      <h2 class="text-md-h2 pb-3">Let's talk</h2>
      <h5 class="text-h5">
        Like via E-mail, Teams, Whatsapp, Telegram, Slack or smoke sign. Don’t
        actually call me; that would be weird.
      </h5>
      <v-row justify="space-between" class="pa-12">
        <a :href="`mailto:danielyarza1@gmail.com`" target="_blank"
          ><v-icon large color="#AD1457"> mdi-mail </v-icon></a
        >

        <a href="https://github.com/dyarzanavarro" target="_blank"
          ><v-icon large color="#AD1457"> mdi-github </v-icon></a
        >

        <a
          href="https://signal.group/#CjQKIIsajUdsx_txjQIFCBvbsYQo17zDIpMl8iYfnyImwejPEhAL3fH9jVR0gqCZHK0xTFqs"
          target="_blank"
          ><v-icon large color="#AD1457"> mdi-chat </v-icon></a
        >

        <a href="https://www.linkedin.com/in/dyarzanavarro/" target="_blank"
          ><v-icon large color="#AD1457"> mdi-linkedin </v-icon></a
        >
      </v-row>
    </v-container>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style>
.specialLinks {
  color: #892cdc;
}

.roundedImg {
  border-radius: 20%;
}
</style>