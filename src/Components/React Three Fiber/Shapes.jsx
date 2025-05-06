// Shapes.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import RotatingMesh from "./RotatingMesh";
import { AbstractOne } from "./Abstract";
import { AbstractTwo } from "./Abstract2";
import { AbstractThree } from "./Abstract3";
import { AbstractBall } from "./Abstract_ball";
import { Environment } from "@react-three/drei";

const canvasStyle = {
  width: "100%",
  height: "200px",
};

const CommonLights = () => (
  <>
    <Environment preset="sunset" background={false} />
  </>
);

export const CubeShape = () => (
  <Canvas style={canvasStyle} camera={{ position: [0,0,5] , fov: 75 }}>
    <CommonLights />
    <RotatingMesh>
      <AbstractOne />
    </RotatingMesh>
  </Canvas>
);

export const SphereShape = () => (
  <Canvas style={canvasStyle} camera={{ position: [0,0,5] , fov: 75 }}>
    <CommonLights />
    <RotatingMesh>
      <AbstractTwo />
    </RotatingMesh>
  </Canvas>
);

export const TorusShape = () => (
  <Canvas style={canvasStyle} camera={{ position: [0,0,5] , fov: 75 }}>
    <CommonLights />
    <RotatingMesh>
      <AbstractThree />
    </RotatingMesh>
  </Canvas>
);

export const HexagonShape = () => (
  <Canvas style={canvasStyle} camera={{ position: [0,0,5] , fov: 75 }}>
    <CommonLights />
    <RotatingMesh>
      <AbstractBall />
    </RotatingMesh>
  </Canvas>
);
