import { Environment, OrbitControls, Stars, useDetectGPU } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Astronaut } from "./Astronaut";
import { Planet } from "./Planet";
import  StarrySky  from "./StarrySky";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
export default function WebCanvas() {
  const { tier, isMobile } = useDetectGPU();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 1000 }}
      gl={{ antialias: false , powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" background={false} />
      <Astronaut />
      <StarrySky nbParticles={tier === 0 || isMobile ? 300 : 1000}/>
      <Planet scale={0.3} />
      <EffectComposer>
        <Bloom mipmapBlur intensity={1.2} luminanceThreshold={1} />
      </EffectComposer>
    </Canvas>
  );
}
