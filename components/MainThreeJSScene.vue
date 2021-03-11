<template>
  <v-container
    id="scene-container"
    ref="sceneContainer"
    style="height: 80vh"
    fluid
    ma-0
    pa-0
    fill-height
  >
  </v-container>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
      const fov = 60; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 80; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(1, 1, 1);
      this.camera = camera;
      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xf5f5f5);
      // add lights
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xf5f5f5, // bright sky color
        0x222222, // dim ground color
        0.1 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
      mainLight.position.set(20, 20, 20);
      this.scene.add(ambientLight, mainLight);

      // add controls
      this.controls = new OrbitControls(this.camera, this.container);
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
      const loader = new GLTFLoader();
      loader.load(
        "/model/boat.glb",
        (gltf) => {
          gltf.scene.position.set(-35, -12, 10);
          gltf.scene.scale.set(0.02, 0.02, 0.02);
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
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
    // this.animate();
  },
};
</script>

<style>
</style>