<template>
  <div>
    <v-container
      id="scene-container"
      ref="sceneContainer"
      style="height: 40vh; position: relative"
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
      this.scene.background = new THREE.Color(0xf5f7fa);
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
      const sphere = new THREE.SphereGeometry(2, 14, 14);
      const texture = new THREE.TextureLoader().load("textures/earthmap1.jpg");

      const color1 = new THREE.Color(0xf5f50a);
      const color2 = new THREE.Color(0xff058a);
      const color3 = new THREE.Color(0x8023ea);

      sphere.computeBoundingBox();
      var material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: color1,
          },
          color2: {
            value: color2,
          },
          color3: {
            value: color3,
          },
          bboxMin: {
            value: sphere.boundingBox.min,
          },
          bboxMax: {
            value: sphere.boundingBox.max,
          },
        },
        vertexShader: `
    uniform vec3 bboxMin;
    uniform vec3 bboxMax;
  
    varying vec2 vUv;

    void main() {
      vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
        fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
     uniform vec3 color3;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
      });
      const earthmesh = new THREE.Mesh(sphere, material);

      earthmesh.position.set(1, 0.7, 0);
      this.scene.add(earthmesh);
      this.renderer.setAnimationLoop(() => {
        earthmesh.rotation.x += 0.02;
        earthmesh.rotation.y += 0.02;
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