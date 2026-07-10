"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Burger({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null!);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    
    // Floating motion
    group.current.position.y += Math.sin(time) * 0.005;
    group.current.rotation.x += 0.005;
    group.current.rotation.y += 0.007;

    // Mouse reactivity
    group.current.position.x += (mousePos.x * 0.5 - group.current.position.x + position[0]) * 0.02;
    group.current.position.y += (mousePos.y * 0.5 - group.current.position.y + position[1]) * 0.02;
  });

  return (
    <group ref={group} position={position} rotation={[0.5, 0, 0]}>
      {/* Bottom Bun */}
      <mesh>
        <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
        <meshPhongMaterial color={0xe3963e} />
      </mesh>
      {/* Top Bun */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhongMaterial color={0xe3963e} />
      </mesh>
      {/* Patty */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[1.4, 1.4, 0.3, 32]} />
        <meshPhongMaterial color={0x3a2415} />
      </mesh>
    </group>
  );
}

function Sushi({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    
    mesh.current.position.y += Math.sin(time + 1) * 0.005;
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.007;

    mesh.current.position.x += (mousePos.x * 1.0 - mesh.current.position.x + position[0]) * 0.02;
    mesh.current.position.y += (mousePos.y * 1.0 - mesh.current.position.y + position[1]) * 0.02;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1.2, 0.6, 0.6]} />
      <meshPhongMaterial color={0xffffff} />
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.2, 0.2, 0.6]} />
        <meshPhongMaterial color={0xff4d00} />
      </mesh>
    </mesh>
  );
}

export function ThreeFoodScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} color={0xffffff} />
        <pointLight position={[5, 5, 5]} color={0xff6b00} intensity={2} distance={50} />
        <pointLight position={[-5, 2, 2]} color={0xffc107} intensity={1.5} distance={50} />
        
        <Burger position={[2, 0.5, 0]} />
        <Sushi position={[-2.5, 2, 0]} />
      </Canvas>
    </div>
  );
}
