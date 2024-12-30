"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createNoise3D } from "simplex-noise";

const ThreeBackground = () => {
  const containerRef = useRef(null);

  // Function to generate random points on a sphere
  const randomPointSphere = (radius) => {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
    const dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
    const dz = 0 + radius * Math.cos(phi);
    return new THREE.Vector3(dx, dy, dz);
  };

  useEffect(() => {
    let renderer, scene, camera, controls;
    let nucleus, sphereBg, stars;
    const container = containerRef.current;
    const noise = new createNoise3D();
    let blobScale = 3;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        55,
        container.clientWidth / container.clientHeight,
        0.01,
        1000
      );
      camera.position.set(0, 0, 230);

      const directionalLight = new THREE.DirectionalLight("#fff", 2);
      directionalLight.position.set(0, 50, -20);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight("#ffffff", 1);
      scene.add(ambientLight);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 4;
      controls.maxDistance = 350;
      controls.minDistance = 150;
      controls.enablePan = false;

      const loader = new THREE.TextureLoader();
      const textureSphereBg = loader.load(
        "https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg"
      );
      const textureNucleus = loader.load(
        "https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg"
      );
      const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");

      /* Nucleus */
      const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
      const lambertMaterial = new THREE.MeshPhongMaterial({
        map: textureNucleus,
      });
      nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
      scene.add(nucleus);

      /* Sphere Background */
      const geometrySphereBg = new THREE.SphereGeometry(150, 40, 40);
      const materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: textureSphereBg,
      });
      sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
      scene.add(sphereBg);

      /* Moving Stars */
      const starsGeometry = new THREE.BufferGeometry();
      const starsPositions = [];
      for (let i = 0; i < 50; i++) {
        const particleStar = randomPointSphere(150);
        starsPositions.push(particleStar.x, particleStar.y, particleStar.z);
      }
      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starsPositions, 3)
      );
      const starsMaterial = new THREE.PointsMaterial({
        size: 5,
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
        map: textureStar,
        blending: THREE.AdditiveBlending,
      });
      stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Nucleus Animation
      const positions = nucleus.geometry.attributes.position;
      const time = Date.now();
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);
        const distance =
          nucleus.geometry.parameters.radius +
          noise(x + time * 0.0005, y + time * 0.0003, z + time * 0.0008) *
            blobScale;
        const factor = distance / Math.sqrt(x * x + y * y + z * z);
        positions.setXYZ(i, x * factor, y * factor, z * factor);
      }
      positions.needsUpdate = true;

      nucleus.rotation.y += 0.002;

      // Sphere Background Animation
      sphereBg.rotation.x += 0.002;
      sphereBg.rotation.y += 0.002;

      controls.update();
      renderer.render(scene, camera);
    };

    init();
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ThreeBackground;
