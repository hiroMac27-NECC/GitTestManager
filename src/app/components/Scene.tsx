'use client'

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Scene() {
  const coneRef = useRef<THREE.Mesh>(null)

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh
          ref={coneRef}
          position={[0, 0, 0]}
        >
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial color="#90EE90" /> {/* 黄緑色 */}
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}