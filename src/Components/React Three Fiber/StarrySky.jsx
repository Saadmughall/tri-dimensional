import { Instance, Instances, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { AdditiveBlending, Color } from "three";
import { lerp, randFloat, randFloatSpread } from "three/src/math/MathUtils.js";

export default function StarrySky({ nbParticles = 1000 }) {
  const texture = useTexture("/textures/star_02.png");
  const particles = useMemo(() =>
    // eslint-disable-next-line no-unused-vars
    Array.from({ length: nbParticles }, (_, idx) => ({
      position: [randFloat(5, 15), randFloatSpread(20), 0],
      rotation: [0, randFloat(0, Math.PI * 2), 0],
      size: randFloat(0.01, 0.1),
      lefttime: randFloat(1, 6),
    }))
  );
  return (
    <Instances range={nbParticles} limit={nbParticles} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        alphaMap={texture}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
      />
      {particles.map((props, idx) => (
        <Particle key={idx} {...props} />
      ))}
    </Instances>
  );
}

useTexture.preload("/textures/star_02.png");
const colorStart = new Color("pink").multiplyScalar(30); // 10 is the alpha value
const colorEnd = new Color("white").multiplyScalar(30); // 10 is the alpha value


const Particle = ({ position, size, rotation, lefttime }) => {
  const ref = useRef();
  const age = useRef(0);
  useFrame(({ camera }, delta) => {
    age.current += delta;
    if (!ref.current) return;
    if (age.current > lefttime) {
      age.current = 0;
    }
    const lifetimeProgression = age.current / lefttime;
    ref.current.scale.x =
      ref.current.scale.y =
      ref.current.scale.z =
        lifetimeProgression < 0.5
          ? lerp(0, size, lifetimeProgression)  // scale in
          : lerp(size, 0, lifetimeProgression); // scale out

    ref.current.color.r = lerp(colorStart.r, colorEnd.r, lifetimeProgression);
    ref.current.color.g = lerp(colorStart.g, colorEnd.g, lifetimeProgression);
    ref.current.color.b = lerp(colorStart.b, colorEnd.b, lifetimeProgression);      
    ref.current.lookAt(camera.position);
  });
  return (
    <group rotation={rotation}>
      <Instance ref={ref} position={position} scale={size} />;
    </group>
  );
};
