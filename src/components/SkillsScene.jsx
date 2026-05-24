import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function SkillSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <Float speed={2} floatIntensity={1} rotationIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#1a0a3a"
          emissive="#7C3AED"
          emissiveIntensity={0.15}
          distort={0.4}
          speed={3}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Outer wireframe */}
      <mesh>
        <sphereGeometry args={[2.3, 16, 16]} />
        <meshStandardMaterial color="#7C3AED" wireframe transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

export default function SkillsScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} color="#7C3AED" intensity={3} />
      <pointLight position={[-3, -3, -3]} color="#00F5FF" intensity={2} />
      <SkillSphere />
    </Canvas>
  );
}
