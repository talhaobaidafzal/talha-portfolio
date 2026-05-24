// import { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, MeshDistortMaterial, Float, Stars, MeshWobbleMaterial } from '@react-three/drei';
// import * as THREE from 'three';

// /* ── Pulsing core sphere ── */
// function CoreSphere() {
//   const meshRef = useRef();
//   const glowRef = useRef();
//   useFrame((state) => {
//     const t = state.clock.elapsedTime;
//     if (meshRef.current) meshRef.current.rotation.y = t * 0.12;
//     if (glowRef.current) {
//       const pulse = 1 + Math.sin(t * 1.8) * 0.04;
//       glowRef.current.scale.set(pulse, pulse, pulse);
//     }
//   });
//   return (
//     <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.8}>
//       <mesh ref={meshRef}>
//         <sphereGeometry args={[1.85, 128, 128]} />
//         <MeshDistortMaterial
//           color="#050518"
//           emissive="#00F5FF"
//           emissiveIntensity={0.15}
//           distort={0.45}
//           speed={2.5}
//           transparent
//           opacity={0.95}
//         />
//       </mesh>
//       {/* inner rim light */}
//       <mesh>
//         <sphereGeometry args={[1.88, 32, 32]} />
//         <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={0.4} transparent opacity={0.07} side={THREE.BackSide} />
//       </mesh>
//       {/* outer soft glow */}
//       <mesh ref={glowRef}>
//         <sphereGeometry args={[2.3, 32, 32]} />
//         <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.2} transparent opacity={0.04} side={THREE.BackSide} />
//       </mesh>
//     </Float>
//   );
// }

// /* ── Orbiting energy rings ── */
// function EnergyRing({ tiltX = 0, tiltZ = 0, color, radius, speed, tubeRadius = 0.025 }) {
//   const ref = useRef();
//   useFrame((state) => {
//     if (!ref.current) return;
//     ref.current.rotation.y = state.clock.elapsedTime * speed;
//   });
//   return (
//     <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
//       <torusGeometry args={[radius, tubeRadius, 12, 120]} />
//       <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} transparent opacity={0.9} />
//     </mesh>
//   );
// }

// /* ── Helix particle trail ── */
// function HelixParticles({ count = 200 }) {
//   const ref = useRef();
//   const { positions, colors } = useMemo(() => {
//     const pos = new Float32Array(count * 3);
//     const col = new Float32Array(count * 3);
//     const c1 = new THREE.Color('#00F5FF');
//     const c2 = new THREE.Color('#7C3AED');
//     for (let i = 0; i < count; i++) {
//       const t = (i / count) * Math.PI * 8;
//       const r = 3.2;
//       pos[i * 3]     = Math.cos(t) * r;
//       pos[i * 3 + 1] = (i / count) * 14 - 7;
//       pos[i * 3 + 2] = Math.sin(t) * r;
//       const mix = i / count;
//       const c = c1.clone().lerp(c2, mix);
//       col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
//     }
//     return { positions: pos, colors: col };
//   }, [count]);

//   useFrame((state) => {
//     if (!ref.current) return;
//     ref.current.rotation.y = state.clock.elapsedTime * 0.18;
//   });

//   return (
//     <points ref={ref}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
//         <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
//       </bufferGeometry>
//       <pointsMaterial size={0.07} vertexColors transparent opacity={0.85} sizeAttenuation />
//     </points>
//   );
// }

// /* ── Ambient star field ── */
// function DriftingParticles({ count = 80 }) {
//   const ref = useRef();
//   const positions = useMemo(() => {
//     const pos = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       pos[i * 3]     = (Math.random() - 0.5) * 18;
//       pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
//       pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
//     }
//     return pos;
//   }, [count]);
//   useFrame((state) => {
//     if (!ref.current) return;
//     ref.current.rotation.y = state.clock.elapsedTime * 0.03;
//     ref.current.rotation.x = state.clock.elapsedTime * 0.015;
//   });
//   return (
//     <points ref={ref}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
//       </bufferGeometry>
//       <pointsMaterial size={0.04} color="#ffffff" transparent opacity={0.35} sizeAttenuation />
//     </points>
//   );
// }

// /* ── Floating satellite objects ── */
// function Satellite({ position, color, shape = 'octa', scale = 1, speed = 1 }) {
//   const ref = useRef();
//   useFrame((state) => {
//     if (!ref.current) return;
//     ref.current.rotation.x = state.clock.elapsedTime * 0.5 * speed;
//     ref.current.rotation.y = state.clock.elapsedTime * 0.7 * speed;
//   });
//   return (
//     <Float speed={speed * 1.4} rotationIntensity={0.6} floatIntensity={2}>
//       <mesh ref={ref} position={position} scale={scale}>
//         {shape === 'octa'  && <octahedronGeometry args={[1, 0]} />}
//         {shape === 'torus' && <torusGeometry args={[0.7, 0.22, 16, 40]} />}
//         {shape === 'box'   && <boxGeometry args={[1.2, 1.2, 1.2]} />}
//         {shape === 'ico'   && <icosahedronGeometry args={[1, 0]} />}
//         <MeshWobbleMaterial
//           color={color}
//           emissive={color}
//           emissiveIntensity={0.6}
//           factor={0.25}
//           speed={2}
//           transparent
//           opacity={0.75}
//           wireframe={shape === 'ico'}
//         />
//       </mesh>
//     </Float>
//   );
// }

// export default function HeroScene({ mouse }) {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 9], fov: 48 }}
//       style={{ width: '100%', height: '100%' }}
//       gl={{ antialias: true, alpha: true }}
//     >
//       {/* Lighting */}
//       <ambientLight intensity={0.15} />
//       <pointLight position={[6, 6, 4]}  color="#00F5FF" intensity={4} />
//       <pointLight position={[-6, -4, -4]} color="#7C3AED" intensity={3} />
//       <pointLight position={[0, -6, 3]}  color="#00FFA3" intensity={2} />
//       <pointLight position={[4, -2, 6]}  color="#F59E0B" intensity={1.5} />

//       <group rotation={[mouse?.y * 0.15 ?? 0, mouse?.x * 0.15 ?? 0, 0]}>
//         <CoreSphere />

//         {/* Orbital rings — different tilts for 3D depth */}
//         <EnergyRing color="#00F5FF" radius={2.6} tiltX={Math.PI / 2}       tiltZ={0}            speed={0.4}  tubeRadius={0.022} />
//         <EnergyRing color="#7C3AED" radius={3.2} tiltX={Math.PI / 3}       tiltZ={Math.PI / 6}  speed={-0.3} tubeRadius={0.018} />
//         <EnergyRing color="#00FFA3" radius={3.8} tiltX={Math.PI / 6}       tiltZ={-Math.PI / 4} speed={0.2}  tubeRadius={0.014} />
//         <EnergyRing color="#F59E0B" radius={4.4} tiltX={-Math.PI / 5}      tiltZ={Math.PI / 3}  speed={-0.15} tubeRadius={0.01} />

//         {/* Helix spiral */}
//         <HelixParticles count={220} />

//         {/* Ambient drift particles */}
//         <DriftingParticles count={90} />

//         {/* Satellites */}
//         <Satellite position={[ 3.8,  1.6, -1]}  color="#00F5FF" shape="octa"  scale={0.42} speed={0.9} />
//         <Satellite position={[-3.6, -1.4, -2]}  color="#7C3AED" shape="box"   scale={0.36} speed={1.1} />
//         <Satellite position={[ 2.6, -2.2,  1]}  color="#00FFA3" shape="torus" scale={0.44} speed={0.7} />
//         <Satellite position={[-3.0,  2.2,  0.5]} color="#F59E0B" shape="ico"   scale={0.38} speed={1.0} />
//         <Satellite position={[ 0.4,  3.4, -2]}  color="#EC4899" shape="octa"  scale={0.30} speed={1.3} />
//         <Satellite position={[-4.2,  0.2,  1.2]} color="#00F5FF" shape="torus" scale={0.28} speed={0.8} />
//         <Satellite position={[ 4.0, -2.8,  0.5]} color="#7C3AED" shape="ico"   scale={0.32} speed={1.2} />
//       </group>

//       <Stars radius={60} depth={40} count={1500} factor={2.5} fade speed={0.4} />

//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.6}
//         minPolarAngle={Math.PI / 3}
//         maxPolarAngle={Math.PI / 1.6}
//       />
//     </Canvas>
//   );
// }
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Octahedron, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb({ position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5 * speed;
    }
  });
  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.4}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere({ position, color, size = 0.4 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1);
    }
  });
  return (
    <Float speed={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function HolographicRing({ position, color, rotation = [0, 0, 0] }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={1}>
      <mesh ref={ref} position={position} rotation={rotation}>
        <torusGeometry args={[0.8, 0.02, 8, 60]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function CodePanel({ position, rotation = [0, 0, 0] }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={[1.8, 1.2, 0.02]} />
      <meshStandardMaterial
        color="#111"
        transparent
        opacity={0.6}
        emissive="#00F5FF"
        emissiveIntensity={0.05}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

function Particles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00F5FF" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function MouseFollower() {
  const { camera } = useThree();
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (state.mouse.x * 0.3 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-state.mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <FloatingOrb position={[0, 0, -2]} color="#00F5FF" scale={1.8} speed={0.8} />
      <FloatingOrb position={[2.5, 1, 0]} color="#7C3AED" scale={0.9} speed={1.2} />
      <FloatingOrb position={[-2.5, -1, 0]} color="#00FFA3" scale={0.7} speed={1.5} />

      <GlowingSphere position={[1.5, -1.5, 1]} color="#00F5FF" size={0.35} />
      <GlowingSphere position={[-1.8, 1.8, 0]} color="#7C3AED" size={0.25} />
      <GlowingSphere position={[0.5, 2.5, -1]} color="#00FFA3" size={0.2} />

      <HolographicRing position={[0, 0, -2]} color="#00F5FF" rotation={[0.5, 0, 0]} />
      <HolographicRing position={[2.5, 0, 0]} color="#7C3AED" rotation={[0, 0.5, 0.3]} />
      <HolographicRing position={[-2, -0.5, 1]} color="#00FFA3" rotation={[0.3, 0.2, 0]} />

      <CodePanel position={[0, 1, -3]} />
      <CodePanel position={[3, -0.5, -1]} rotation={[0.1, -0.3, 0]} />
      <CodePanel position={[-3, 0.5, -1]} rotation={[0.1, 0.3, 0]} />

      <Particles />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} color="#00F5FF" intensity={1} />
        <pointLight position={[-5, -5, 5]} color="#7C3AED" intensity={0.8} />
        <pointLight position={[0, 0, 5]} color="#00FFA3" intensity={0.5} />

        <Stars radius={80} depth={30} count={1000} factor={2} saturation={0} fade />

        <MouseFollower />
      </Suspense>
    </Canvas>
  );
}
