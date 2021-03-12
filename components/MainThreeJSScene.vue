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
import { Water } from "three/examples/jsm/objects/Water";
import { Sky } from "three/examples/jsm/objects/Sky";
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
      camera.position.set(1, 3, 1);
      this.camera = camera;
      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xf5f5f5);
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xf9d71c, // bright sky color
        0x222222, // dim ground color
        0.1 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
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

      //controls

      // Water

      let water;

      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          "textures/waternormals.jpg",
          function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        alpha: 1.0,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xf9d71c,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
      });

      water.rotation.x = -Math.PI / 2;
      const time = performance.now() * 0.001;

      water.material.uniforms["time"].value += 1.0 / 60.0;
      this.scene.add(water);
      //////////////////////////
      // Skybox
      let sun;
      sun = new THREE.Vector3();

      const sky = new Sky();
      sky.scale.setScalar(10000);
      this.scene.add(sky);

      const skyUniforms = sky.material.uniforms;

      skyUniforms["turbidity"].value = 10;
      skyUniforms["rayleigh"].value = 2;
      skyUniforms["mieCoefficient"].value = 0.005;
      skyUniforms["mieDirectionalG"].value = 0.4;

      const parameters = {
        inclination: 0.48,
        azimuth: 0.385,
      };

      const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

      function updateSun() {
        const theta = Math.PI * (parameters.inclination - 0.5);
        const phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        sun.x = Math.cos(phi);
        sun.y = Math.sin(phi) * Math.sin(theta);
        sun.z = Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms["sunPosition"].value.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        //this.scene.environment = pmremGenerator.fromScene(sky).texture;
      }

      updateSun();

      //

      const loader = new GLTFLoader();
      loader.load(
        "/model/boat.glb",
        (gltf) => {
          gltf.scene.position.set(-15, -0.5, 5);
          gltf.scene.scale.set(0.02, 0.02, 0.02);

          /*      gltf.position.y = Math.sin(time) * 0.2 + 5;
          gltf.rotation.x = time * 0.05;
          gltf.rotation.z = time * 0.51; */
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
    onMouseMove() {
      gltf.scene.rotation.y += event.movementX * 0.005;
    },
  },
  animate() {
    requestAnimationFrame(animate);
    render();
  },
  mounted() {
    this.init();
    // this.animate();
  },
};
</script>

<style>
</style>