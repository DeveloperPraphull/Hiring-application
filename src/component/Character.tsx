import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Character() {
  const { scene } = useGLTF("/character.glb"); // your 3D model
  const headRef = useRef();

  useFrame(({ mouse }) => {
    if (!headRef.current) return;

    // Convert cursor position to head rotation
    const targetX = mouse.y * 0.5;
    const targetY = mouse.x * 0.7;

    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetX,
      0.1
    );

    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetY,
      0.1
    );
  });

  // attach ref to head bone
  scene.traverse((obj) => {
    if (obj.name.toLowerCase().includes("head")) {
      headRef.current = obj;
    }
  });

  return <primitive object={scene} scale={2} />;
}

export default function CursorCharacter() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 3]} intensity={1} />

        {/* Character */}
        <Character />

      </Canvas>
    </div>
  );
}