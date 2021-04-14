<template>
  <div>
    <v-container
      id="scene-container"
      ref="sceneContainer"
      style="height: 170vh; position: relative"
      fluid
      ma-0
      pa-0
      fill-height
    >
    </v-container>
    <v-container
      style="
        position: absolute;
        top: 15%;
        left: 40%;
        transform: translate(-50%, -50%);
        text-align: right;
      "
    >
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
      <v-btn rounded outlined dark>Explore</v-btn>
    </v-container>

    <v-container
      style="
        position: absolute;
        top: 35%;
        left: 60%;
        transform: translate(-50%, -50%);
        text-align: left;
      "
    >
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
      <a href="/HouseShowcase">
        <v-btn rounded outlined dark>Explore</v-btn>
      </a>
    </v-container>
    <v-container
      style="
        position: absolute;
        top: 55%;
        left: 40%;
        transform: translate(-50%, -50%);
        text-align: right;
      "
    >
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
      <v-btn rounded outlined dark>Explore</v-btn>
    </v-container>
  </div>
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

      const geometry2 = new THREE.SphereGeometry(0.15, 8, 8);
      const texture = new THREE.TextureLoader().load("textures/psych1.jpg");

      const material2 = new THREE.MeshBasicMaterial({ map: texture });

      const sphere2 = new THREE.Mesh(geometry2, material2);

      sphere2.position.set(0.6, 1.1, 0.7);
      this.scene.add(sphere2);

      const geometry1 = new THREE.SphereGeometry(0.15, 8, 8);

      const texture2 = new THREE.TextureLoader().load("textures/house1.jpg");

      const material1 = new THREE.MeshBasicMaterial({ map: texture2 });

      const sphere1 = new THREE.Mesh(geometry1, material1);

      sphere1.position.set(1.42, 0.7, 0.7);
      this.scene.add(sphere1);

      const geometry3 = new THREE.SphereGeometry(0.15, 8, 8);

      const texture3 = new THREE.TextureLoader().load(
        "textures/steppingInto.jpg"
      );

      const material3 = new THREE.MeshBasicMaterial({ map: texture3 });

      const sphere3 = new THREE.Mesh(geometry3, material3);

      sphere3.position.set(0.58, 0.24, 0.7);
      this.scene.add(sphere3);

      this.renderer.setAnimationLoop(() => {
        sphere2.rotation.x += 0.003;
        sphere2.rotation.y += 0.003;
        sphere1.rotation.x += 0.003;
        sphere1.rotation.y += 0.003;
        sphere3.rotation.x += 0.003;
        sphere3.rotation.y += 0.003;

        document.addEventListener("mousemove", onMouseMove);
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        function onMouseMove(event) {
          mouseX = event.clientX / windowHalfX;
          mouseY = event.clientY / windowHalfY;
        }

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
</style>