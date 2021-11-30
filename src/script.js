import "./style.css";
import * as THREE from "three";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

/*Scene*/
const scene = new THREE.Scene();
const canvas = document.querySelector("canvas.webgl");

/*Textures*/
const textureLoader = new THREE.TextureLoader();

/*Meshe*/
/*Particles*/
const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02 /*Dimensione della particella*/,
  sizeAttenuation: true /*Piu grande se vicina, piu piccola se lontana*/,
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
/*Sizes*/
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/*Camera*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

/*Resize*/
window.addEventListener("resize", () => {
  /*Sizes Resize*/
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  /*Camera resize*/
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix;
  /*Renderer*/
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/*Renderer*/
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

/*Controls*/
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/*Animation*/
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update;
  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
};
tick();
