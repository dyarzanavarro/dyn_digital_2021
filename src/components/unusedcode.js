  /* let material = new THREE.MeshPhongMaterial({ map: texture });

    material.bumpMap = new THREE.TextureLoader().load(
      "textures/earthbump.jpg"
    );
    material.bumpScale = 0.05; */
     
     
     
     /*CONTROLS
      this.orbit = new OrbitControls(this.camera, this.container);
      this.orbit.update();
      this.orbit.addEventListener("change", this.render);

      this.controls = new TransformControls(this.camera, this.container);

      this.controls.addEventListener("change", this.render);

      /* 
      this.controls.minPolarAngle = (Math.PI * 0.5) / 1;
      this.controls.maxPolarAngle = (Math.PI * 1) / 3;

      this.controls.smooth = true;
      this.controls.smoothspeed = 0.95;

      this.controls.addEventListener("dragging-changed", function (event) {
        orbit.enabled = !event.value;
      });
 */

      //controls.update() must be called after any manual changes to the camera's transform
      //controls

      /* // Water

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

       
     
      const loader = new GLTFLoader();
      loader.load(
        "/model/blob.glb",
        (gltf) => {
          gltf.scene.position.set(2, 2, -1);
          gltf.scene.scale.set(1.2, 1.2, 1.2);
          gltf.scene.rotation.y += 0;

          /*      gltf.position.y = Math.sin(time) * 0.2 + 5;
          gltf.rotation.x = time * 0.05;
          gltf.rotation.z = time * 0.51; 
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );

      */