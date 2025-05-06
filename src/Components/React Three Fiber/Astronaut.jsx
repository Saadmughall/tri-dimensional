import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Astronaut(props) {
  const { nodes, materials } = useGLTF('/Models/Astronaut.glb')
  const AstroRef = useRef()
  useFrame(() => {
    if (AstroRef.current) {
      AstroRef.current.rotation.y += 0.01
    }
  })
  useEffect(() => {
    
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth) * 2 - 1
      const y = (e.clientY / innerHeight) * 2 - 1
    
      if (AstroRef.current) {
        gsap.to(AstroRef.current.rotation, {
          y: x * 0.5,
          x: y * 0.5,
          duration: 0.6,
          ease: 'power4.out'
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  const AstronautScale = window.innerWidth < 768 ? 1 : 1.6
  return (
    <group {...props} dispose={null} ref={AstroRef}>
      <mesh
        name="Mesh_0001"
        geometry={nodes.Mesh_0001.geometry}
        material={materials.Material_0}
        material-roughness={1}
        material-metalness={0}  
        position={[0, 0, 0]}
        rotation={[-Math.PI, Math.PI, -Math.PI]}
        scale={AstronautScale}
      />
    </group>
  )
}

useGLTF.preload('/Models/Astronaut.glb')
