// RotatingMesh.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingMesh({ children }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.005;
    }
  });

  return <mesh ref={ref} scale={2}>{children}</mesh>;
}
