import * as THREE from "three";
import { STLLoader } from "three/addons/loaders/STLLoader.js"; // Correct import path

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the STL model
const loader = new STLLoader(); // Use uppercase "S" in STLLoader

loader.load("assets/Lion.STL", (geometry) => {
    const material = new THREE.MeshNormalMaterial(); // You can use other materials as needed

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Position and scale the model
    mesh.position.set(0, 0, 0); // Adjust the position as needed
    mesh.scale.set(0.1, 0.1, 0.1); // Adjust the scale as needed

    // Your other Three.js code goes here

    // Position the camera
    camera.position.z = 2;

    const resetRotation = () => {
        mesh.rotation.set(5, 0, 3); // Reset the rotation to the default position (0, 0, 0)
    };

    // Create an animation function
    resetRotation();
    const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model (or perform other animations)
        // mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;

        renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();
});
