import * as THREE from "three";

export function setupStuff() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75, // field of view (fov)
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
  );

  // create a WebGL renderer (three.js supports other types of renderers)
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Return the scene, camera, and renderer as an object
  return { scene, camera, renderer };
}
