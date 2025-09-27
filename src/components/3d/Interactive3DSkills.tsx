import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { InteractiveSkillOrb } from './Interactive3D';
import { Card } from '@/components/ui/card';

export const Interactive3DSkills = () => {
  const skills3D = [
    { name: 'React', color: '#61dafb', position: [-2, 1, 0] as [number, number, number] },
    { name: 'TypeScript', color: '#3178c6', position: [2, 1, 0] as [number, number, number] },
    { name: 'Node.js', color: '#339933', position: [0, -1, 0] as [number, number, number] },
    { name: 'Three.js', color: '#000000', position: [-1, -1, 1] as [number, number, number] },
    { name: 'Next.js', color: '#000000', position: [1, -1, 1] as [number, number, number] },
  ];

  return (
    <Card className="p-8 card-hover bg-gradient-to-br from-primary/5 to-accent/5">
      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
        Interactive 3D Skills
      </h3>
      <p className="text-muted-foreground text-center mb-8">
        Drag to rotate • Scroll to zoom • Click and explore
      </p>
      
      <div className="h-96 w-full rounded-lg overflow-hidden">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          
          {/* Enhanced lighting for better visibility */}
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
          <spotLight position={[0, 5, 0]} intensity={0.5} color="#f97316" />
          
          <Environment preset="sunset" />
          
          {/* Interactive 3D Skills */}
          {skills3D.map((skill, index) => (
            <Float key={skill.name} speed={1 + index * 0.2} rotationIntensity={0.3} floatIntensity={0.4}>
              <InteractiveSkillOrb
                position={skill.position}
                color={skill.color}
                scale={0.8}
              />
            </Float>
          ))}
          
          {/* Interactive orbit controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={false}
            maxDistance={15}
            minDistance={5}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
        </Canvas>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        Interactive 3D visualization of my core technologies
      </p>
    </Card>
  );
};