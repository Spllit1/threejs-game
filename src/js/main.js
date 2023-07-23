import * as THREE from "three";
import { setupStuff } from "./setup.js";

// Call the setupStuff function to get the scene, camera, and renderer
const { scene, camera, renderer } = setupStuff();

const reseloution = 0.2;

// move the camera back from the origin
camera.position.z = 5;

var material = new THREE.MeshNormalMaterial();
var CubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
var cube = new THREE.Mesh(CubeGeometry, material);
scene.add(cube);

// create a rendering loop
var render = function() {
  // what is that??
  requestAnimationFrame(render);

  // adjust rotation of x and y every time a new frame is rendered
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // draw the scene
  renderer.setPixelRatio(reseloution);
  renderer.render(scene, camera);
};

// start the rendering loop
render();

// handles window resizing
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
