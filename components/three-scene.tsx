"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, PerspectiveCamera, Text } from "@react-three/drei"

// 3D Primitives instead of GLB models
function ServerModel(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1.5, 1]} />
      <meshStandardMaterial color="#0066ff" />
      <Text position={[0, 0, 0.51]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        SERVER
      </Text>
    </mesh>
  )
}

function DatabaseModel(props) {
  return (
    <group {...props}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="#05D9E8" />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.6, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#05D9E8" />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.7, 0.6, 0.3, 32]} />
        <meshStandardMaterial color="#05D9E8" />
      </mesh>
      <mesh position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.8, 0.7, 0.3, 32]} />
        <meshStandardMaterial color="#05D9E8" />
      </mesh>
    </group>
  )
}

function CodeBlock(props) {
  const { position, rotation } = props

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="#222" />
      <Text position={[0, 0, 0.06]} fontSize={0.1} color="#00ff00" anchorX="center" anchorY="middle" maxWidth={1.8}>
        {`function deploy() {\n  return "Success!";\n}`}
      </Text>
    </mesh>
  )
}

function FloatingObjects() {
  const serverRef = useRef()
  const databaseRef = useRef()
  const codeRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Gentle rotation for server
    if (serverRef.current) {
      serverRef.current.rotation.y = Math.sin(t * 0.2) * 0.5
    }

    // Gentle rotation for database
    if (databaseRef.current) {
      databaseRef.current.rotation.y = Math.sin(t * 0.15) * 0.5
    }

    // Gentle rotation for code block
    if (codeRef.current) {
      codeRef.current.rotation.y = Math.sin(t * 0.1) * 0.3
    }
  })

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={serverRef} position={[-2, 0, 0]}>
          <ServerModel />
        </group>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <group ref={databaseRef} position={[2, -1, 1]}>
          <DatabaseModel />
        </group>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
        <group ref={codeRef} position={[0, 1, -1]}>
          <CodeBlock />
        </group>
      </Float>
    </>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Environment preset="city" />

      <FloatingObjects />
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas shadows>
      <Scene />
    </Canvas>
  )
}
