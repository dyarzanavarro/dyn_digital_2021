<template>
  <div>
    <v-container
      id="scene-container"
      ref="sceneContainer"
      style="height: 100vh"
      class="webgl"
      fluid
      ma-0
      pa-0
      fill-height
    >
    </v-container>
  </div>
</template>
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";

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

      const sphere = new THREE.SphereGeometry(0.7, 8, 8);

      let color1 = new THREE.Color("#8023ea");
      let color2 = new THREE.Color("#ff058a");
      let color3 = new THREE.Color("#f5f50a");

      const material = new THREE.MeshNormalMaterial({
        opacity: 0.3,
        transparent: true,
      });
      sphere.attributes.position.needsUpdate = true;

      const earthmesh = new THREE.Mesh(sphere, material);

      earthmesh.position.set(1, 1.1, 0);
      this.scene.add(earthmesh);

      if (earthmesh.isMesh) {
        const position = earthmesh.geometry.attributes.position;
        const vector = new THREE.Vector3();

        for (let i = 0, l = position.count; i < l; i++)
          vector.fromBufferAttribute(position, i);
        vector.applyMatrix4(earthmesh.matrixWorld);
        console.log(vector);
        vector.length = 0;

        this.controls = new DragControls(
          [earthmesh],
          this.camera,
          this.renderer.domElement
        );
      }

      this.renderer.setAnimationLoop(() => {
        earthmesh.rotation.x += 0.01;
        earthmesh.rotation.y += 0.01;

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
