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
      <v-container
        style="
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: left;
        "
      >
        <h1 style="color: #bc6ff1; font-size: 3.2rem">
          I like digital experiences
        </h1>
        <h1 style="color: #892cdc; font-size: 2.7rem">and going outside</h1>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

export default {
  name: "ThreeTest",
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
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

      camera.position.set(1, 0.3, 3.8);
      this.camera = camera;
      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x222222);

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

      const sphere = new THREE.SphereGeometry(1.25, 8, 8);

      const texture = new THREE.TextureLoader().load("textures/earthmap1.jpg");

      const material = new THREE.MeshNormalMaterial();

      const earthmesh = new THREE.Mesh(sphere, material);

      console.log(earthmesh.geometry.attributes.position);

      earthmesh.position.set(2.5, 0.2, 0);
      this.scene.add(earthmesh);

      this.renderer.setAnimationLoop(() => {
        earthmesh.rotation.x += 0.008;
        earthmesh.rotation.y += 0.008;

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

<style lang="scss" scoped>
</style>
