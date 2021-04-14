<template>
  <div>
    <v-container
      id="scene-container"
      ref="sceneContainer"
      style="height: 80vh; position: relative"
      fluid
      ma-0
      pa-0
      fill-height
    >
    </v-container>
    <v-container
      style="
        text-align: center;
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translate(-50%, -50%);
        text-align: left;
      "
    >
      <v-btn class="shake" x-large outlined color="#bc6ff1" dark
        >BREAK FREE</v-btn
      >
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
      const targetAspect =
        this.container.clientWidth / this.container.clientHeight;
      const imageWidth = 1920;
      const imageHeight = 1080;

      const imageAspect = imageWidth / imageHeight;
      const factor = imageAspect / targetAspect;

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
      const backgroundimg = new THREE.TextureLoader().load(
        "textures/background_guy.png"
      );
      /*    this.scene.background = backgroundimg;
      this.scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
      this.scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
      this.scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;
      this.scene.background.repeat.y = factor > 1 ? 1 : factor;
      // add lights */
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

      const geometry2 = new THREE.SphereGeometry(0.1, 12, 12);
      const geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material1 = new THREE.MeshBasicMaterial({
        opacity: 0.2,
        transparency: true,
        color: "blue",
      });

      const material2 = new THREE.MeshNormalMaterial();

      const sphere2 = new THREE.Mesh(geometry2, material2);
      const plane = new THREE.Mesh(geometry1, material1);
      sphere2.position.set(0.4, 0.8, 0.7);
      plane.position.set(2.3, 0.5, 1);

      sphere2.renderOrder = 3;
      plane.renderOrder = 4;

      this.scene.add(sphere2, plane);

      // ANIMATION

      this.renderer.setAnimationLoop(() => {
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
.shake:hover {
  animation: shake 0.82s cubic-bezier(0.41, 0.1, 0.25, 1) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>