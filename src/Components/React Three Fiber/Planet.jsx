import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Planet(props) {
  const { nodes, materials } = useGLTF('/Models/Planet-transformed.glb')
  const PlanetRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (PlanetRef.current) {
      // Use sin and cos for smoother, natural motion
      PlanetRef.current.rotation.x = Math.sin(t * 0.3) * 0.2
      PlanetRef.current.rotation.y = Math.cos(t * 0.2) * 1.2
      PlanetRef.current.rotation.z = Math.sin(t * 0.1) * 0.05
    }
  })

  return (
    <group {...props} dispose={null}>
      <group position={[13, -5, 0]}>
        <mesh
          geometry={nodes.Planet_11.geometry}
          material={materials.Atlas}
          scale={100}
          ref={PlanetRef}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Models/Planet-transformed.glb')
