import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingText = ({ 
  text, 
  position, 
  color = "#6366f1",
  size = 1 
}: {
  text: string;
  position: [number, number, number];
  color?: string;
  size?: number;
}) => {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Center position={position}>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={size}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </Text3D>
    </Center>
  );
};

export const InteractiveSkillOrb = ({ 
  position, 
  color, 
  skillName,
  scale = 1 
}: {
  position: [number, number, number];
  color: string;
  skillName: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
    
    if (textRef.current) {
      textRef.current.lookAt(0, 0, 10); // Always face camera
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      <Center position={[0, -1.5, 0]}>
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.2}
          height={0.05}
        >
          {skillName}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </Center>
    </group>
  );
};