'use client'

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Scene() {
  const coneRef = useRef<THREE.Mesh>(null)
  const controlsRef = useRef(null)

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh
            ref={coneRef}
            position={[0, 0, 0]}
          >
            <coneGeometry args={[1, 2, 32]} />
            <meshStandardMaterial color="#90EE90" /> {/* 黄緑色 */}
          </mesh>
          <OrbitControls
            ref={controlsRef}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={1.0}
            autoRotate={true}
            autoRotateSpeed={2.0}
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            target={[0, 0, 0]}
            screenSpacePanning={true}
          />
        </Canvas>
      </div>
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Reset View
      </button>
    </div>
  )
}