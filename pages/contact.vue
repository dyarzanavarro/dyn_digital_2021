<template>
  <div>
    <v-container class="pa-12">
      <h1 style="font-size: 4.4rem">Contact</h1>
      <!--<MainThreeJSScene class="webgl" /> -->
      <div
        class="aframe"
        v-for="aframe in aframes"
        :key="aframe.id"
        v-html="aframe.scene"
      />
    </v-container>
  </div>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";

export default {
  name: "afvr",
  data() {
    return {
      aframes: [
        {
          scene:
            '<a-scene webxr="requiredFeatures: hit-test,local-floor;optionalFeatures: dom-overlay,unbounded;overlayElement: #overlay;"></a-scene>',
          id: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
