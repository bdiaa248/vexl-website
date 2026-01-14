
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  theme: 'light' | 'dark';
}

const Globe = ({ theme }: { theme: 'light' | 'dark' }) => {
  const ref = useRef<THREE.Points>(null);
  
  // OPTIMIZED: Reduced count from 6000 to 3000 for smoother load times
  const count = 3000; 
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const radius = 4.8; 

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const r = radius + (Math.random() * 0.15);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  const pointColor = theme === 'dark' ? '#0891b2' : '#334155'; 

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={pointColor}
          size={0.02} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'dark' ? 0.8 : 0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const DataRings = ({ theme }: { theme: 'light' | 'dark' }) => {
    const ringColor = theme === 'dark' ? '#22d3ee' : '#0f172a'; 

    return (
        <group rotation={[Math.PI / 3, 0, 0]}>
             <mesh rotation={[0, 0, 0]}>
                <torusGeometry args={[5.8, 0.005, 16, 100]} />
                <meshBasicMaterial color={ringColor} opacity={0.3} transparent />
            </mesh>
            <mesh rotation={[0.5, 0, 0]}>
                <torusGeometry args={[7.2, 0.003, 16, 100]} />
                <meshBasicMaterial color={ringColor} opacity={0.2} transparent />
            </mesh>
        </group>
    )
}

const Scene: React.FC<SceneProps> = ({ theme }) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 11], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1} />
        <Globe theme={theme} />
        <DataRings theme={theme} />
      </Canvas>
      
      <div className={`absolute inset-0 pointer-events-none z-10 ${theme === 'dark' ? 'block' : 'hidden'}`}>
        {/* Adjusted Gradient: Smoother falloff (transparent 0% -> black 120%) avoids sharp banding */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#02040a_120%)] opacity-90" />
      </div>

       <div className={`absolute inset-0 pointer-events-none z-10 ${theme === 'light' ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_120%)] opacity-90" />
      </div>
    </div>
  );
};

export default Scene;
