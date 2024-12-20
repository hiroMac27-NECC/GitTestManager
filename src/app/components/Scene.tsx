
'use client'

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function TeddyBear() {
  return (
    <group position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.5, 1.8, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.5, 1.8, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Arms */}
      <mesh position={[-1.2, 0.2, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.25, 0.25, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[1.2, 0.2, 0]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.25, 0.25, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.4, -1.2, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.25, 0.25, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.4, -1.2, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.25, 0.25, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Inner face (lighter color) */}
      <mesh position={[0, 1.0, 0.5]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#D2946B" />
      </mesh>

      {/* Cheeks */}
      <mesh position={[-0.35, 1.0, 0.7]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#FFB6C1" opacity={0.6} transparent />
      </mesh>
      <mesh position={[0.35, 1.0, 0.7]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#FFB6C1" opacity={0.6} transparent />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 1.0, 0.9]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#4A2511" />
      </mesh>

      {/* Eyes - kawaii style */}
      <group position={[-0.25, 1.3, 0.75]}>
        <mesh>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, 0.1]}>
          <sphereGeometry args={[0.09, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.02, 0.02, 0.13]}>
          <sphereGeometry args={[0.03, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
      <group position={[0.25, 1.3, 0.75]}>
        <mesh>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, 0.1]}>
          <sphereGeometry args={[0.09, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.02, 0.02, 0.13]}>
          <sphereGeometry args={[0.03, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      {/* Mouth - cute smile */}
      <mesh position={[0, 0.9, 0.9]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.12, 0.03, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#4A2511" />
      </mesh>
    </group>
  )
}

export default function Scene() {
  const controlsRef = useRef(null)

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} gl={{ alpha: false }} style={{ background: '#B0B0B0' }}>
          <ambientLight intensity={0.4} />
          {/* メインライト（カメラ側から） */}
          <directionalLight
            position={[0, 2, 5]}
            intensity={1.5}
            castShadow
          />
          {/* 左上からの補助光 */}
          <pointLight 
            position={[-5, 5, 2]} 
            intensity={0.6} 
            color="#FFF"
          />
          {/* 右下からの補助光 */}
          <pointLight 
            position={[5, -2, -2]} 
            intensity={0.3} 
            color="#FFE0B2"
          />
          {/* 全体的な環境光 */}
          <hemisphereLight
            skyColor="#ffffff"
            groundColor="#B0B0B0"
            intensity={0.3}
          />
          <TeddyBear />
          <OrbitControls
            ref={controlsRef}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={1.0}
            autoRotate={true}
            autoRotateSpeed={2.0}
            enableZoom={true}
            enableRotate={true}
            enablePan={true}
            minDistance={3}
            maxDistance={10}
            target={[0, 0.5, 0]}
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
