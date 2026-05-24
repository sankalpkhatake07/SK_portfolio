"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

function Orb() {
  const meshRef = useRef<Mesh>(null);
  const ringRef = useRef<Group>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.35 + mouse.x * 0.5;
      meshRef.current.rotation.x = t * 0.2 + mouse.y * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.25;
      ringRef.current.rotation.x = t * 0.15;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 32]} />
        <MeshDistortMaterial
          color="#00D4FF"
          emissive="#7C3AED"
          emissiveIntensity={0.6}
          distort={0.32}
          speed={1.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.3, 0.04, 16, 100]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={1.5} />
        </mesh>
        <mesh rotation={[0.4, 0.2, 0]}>
          <torusGeometry args={[2.7, 0.03, 16, 80]} />
          <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={1.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const p = new Float32Array(900);
    for (let i = 0; i < 900; i += 3) {
      p[i] = (Math.random() - 0.5) * 10;
      p[i + 1] = (Math.random() - 0.5) * 10;
      p[i + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial size={0.03} color="#00D4FF" transparent opacity={0.65} sizeAttenuation />
    </Points>
  );
}

export function HeroOrbCanvas() {
  return (
    <div className="relative h-[360px] w-full sm:h-[430px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} color="#00D4FF" intensity={24} />
        <pointLight position={[-2, -2, -2]} color="#7C3AED" intensity={18} />
        <Particles />
        <Orb />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_58%)]" />
    </div>
  );
}
