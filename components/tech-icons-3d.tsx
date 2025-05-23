"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"

// Define tech icons with their colors
const techIcons = [
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Django", color: "#092E20" },
  { name: "Flask", color: "#000000" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AWS", color: "#FF9900" },
  { name: "Azure", color: "#0078D4" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "GitHub", color: "#181717" },
  { name: "Linux", color: "#FCC624" },
  { name: "MongoDB", color: "#47A248" },
  { name: "SQL", color: "#4479A1" },
  { name: "DevOps", color: "#EE0000" },
  { name: "Cloud", color: "#0080FF" },
  { name: "Security", color: "#FF5733" },
]

function TechIcon({ name, position, color, rotation = [0, 0, 0] }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.2
      // Gentle rotation
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[0.5, 0.5, 0.1]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
      <Text position={[0, 0, 0.06]} fontSize={0.15} color="white" anchorX="center" anchorY="middle" maxWidth={0.4}>
        {name}
      </Text>
    </mesh>
  )
}

function TechIconsScene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate the entire group slowly
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {techIcons.map((tech, index) => {
        // Position icons in a spherical pattern
        const phi = Math.acos(-1 + (2 * index) / techIcons.length)
        const theta = Math.sqrt(techIcons.length * Math.PI) * phi
        const radius = 8

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        return (
          <Float key={index} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <TechIcon
              name={tech.name}
              position={[x, y, z]}
              color={tech.color}
              rotation={[Math.random() * 0.2, Math.random() * 0.2, Math.random() * 0.2]}
            />
          </Float>
        )
      })}
    </group>
  )
}

export default function TechIcons3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <TechIconsScene />
      </Canvas>
    </div>
  )
}
