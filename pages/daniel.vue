<template>
  <v-container>
    <v-container id="scene-container" ref="sceneContainer" fluid fill-height>
    </v-container>
    <v-container>
      <v-row
        ><v-col>
          <v-card dark style="background-color: #232236" class="pa-md-8">
            <v-img
              width="350"
              :src="require('../assets/img/psych_main.png')"
              alt="landingImage of psyCH"
            ></v-img>
            <h1 style="color: #ffffff; font-size: 1.4rem">psyCH</h1>
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
            ></v-card
          >
        </v-col>
        <v-col>
          <v-card dark style="background-color: #232236" class="pa-md-8">
            <v-img
              width="350"
              :src="require('../assets/img/casa_1.png')"
              alt="landingImage of House in Tenerife"
            ></v-img>
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
          </v-card>
        </v-col>
        <v-col>
          <v-card dark style="background-color: #232236" class="pa-md-8">
            <v-img
              height="350"
              style="object-position: center top; background-size: cover"
              :src="require('../assets/img/steppingInto.png')"
              alt="landingImage of House in steppingInto"
            ></v-img>
            <h1 style="color: #ffffff; font-size: 1.4rem">SteppingInto</h1>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    };
  },
  methods: {
    init() {
      // set container
      this.container = this.$refs.sceneContainer;

      // add camera
      const fov = 50; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.0001; // the near clipping plane
      const far = 20000; // the far clipping plane
      const D = 1;

      const camera = new THREE.OrthographicCamera(
        -D * aspect,
        D * aspect,
        D,
        -D,
        1,
        1000
      );

      camera.position.set(1, 0.3, 3.8);
      this.camera = camera;
      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x232236);

      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xb1e1ff, // bright sky color
        0xb97a20, // dim ground color
        0.1 // intensity
      );
      const mainLight = new THREE.HemisphereLight(0xffffff, 0.1);
      mainLight.position.set(20, 20, 20);
      this.scene.add(ambientLight, mainLight);

      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );

      this.container.appendChild(this.renderer.domElement);
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );

      this.renderer.setAnimationLoop(() => {
        this.render();
      });
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },
  },

  mounted() {
    this.init();
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.webgl {
  outline: none;
}
</style>