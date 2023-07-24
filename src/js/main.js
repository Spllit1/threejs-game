
// Setup ------------------------------------------------------------------
import * as THREE from "three";
import { setupStuff } from "./setup.js";
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

// Call the setupStuff function to get the scene, camera, and renderer
const { scene, camera, renderer } = setupStuff();

const reseloution = 0.26;

// move the camera back from the origin
camera.position.z = 5;


var material = new THREE.MeshNormalMaterial();
var CubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
var cube = new THREE.Mesh(CubeGeometry, material);
const clock = new THREE.Clock();
scene.add(cube);

let controls;

controls = new FirstPersonControls( camera, renderer.domElement );
controls.movementSpeed = 25;
controls.lookSpeed = 0.7;


const gridHelper = new THREE.GridHelper( 30, 30 );
scene.add( gridHelper );

const cube2 = {
  // The geometry: the shape & size of the object
  geometry: new THREE.BoxGeometry(1, 1, 1),
  // The material: the appearance (color, texture) of the object
  material: new THREE.MeshBasicMaterial({ color: 0x00ff00 })
};

cube2.mesh = new THREE.Mesh(cube2.geometry, cube2.material);

cube2.mesh.position.y = 10

scene.add(cube2.mesh);


// create a rendering loop
var render = function() {
  controls.update( clock.getDelta() );
  // what is that??
  requestAnimationFrame(render);
  cube2.mesh.rotation.x += 0.05;
  cube2.mesh.rotation.y -= 0.05;

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
