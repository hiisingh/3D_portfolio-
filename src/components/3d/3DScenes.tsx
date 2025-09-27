import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingOrb, CodeCube, TechRings } from './3DElements';

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        
        {/* Environment for reflections */}
        <Environment preset="sunset" />
        
        {/* 3D Elements */}
        <FloatingOrb position={[-4, 2, -2]} color="#6366f1" scale={0.8} />
        <FloatingOrb position={[4, -1, -3]} color="#f97316" scale={0.6} />
        <CodeCube position={[-2, -2, -1]} />
        <CodeCube position={[3, 1, -2]} />
        
        {/* Tech Rings in background */}
        <TechRings position={[0, 0, -5]} />
        
        {/* Subtle orbit controls for interactive feel */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export const SkillsScene = () => {
  return (
    <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#6366f1" />
        
        <Environment preset="sunset" />
        
        {/* Floating skill orbs */}
        <FloatingOrb position={[-1, 1, 0]} color="#61dafb" scale={0.4} /> {/* React */}
        <FloatingOrb position={[1, 0, 0]} color="#f7df1e" scale={0.3} /> {/* JavaScript */}
        <FloatingOrb position={[0, -1, 0]} color="#3178c6" scale={0.35} /> {/* TypeScript */}
        <FloatingOrb position={[-1, -1, 1]} color="#06b6d4" scale={0.25} /> {/* Tailwind */}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export const ProjectsScene = () => {
  return (
    <div className="absolute top-10 left-10 w-80 h-80 pointer-events-none opacity-20">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={0.6} />
        
        <Environment preset="city" />
        
        {/* Project representation cubes */}
        <CodeCube position={[-1, 1, 0]} />
        <CodeCube position={[1, 1, 0]} />
        <CodeCube position={[-1, -1, 0]} />
        <CodeCube position={[1, -1, 0]} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};