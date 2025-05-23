"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"

export default function SkillSphereCanvas({ skills }) {
  const flattenedSkills = skills.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill,
      color: category.color,
    })),
  )

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />

      {flattenedSkills.map((skill, i) => {
        // Position skills in a spherical pattern
        const phi = Math.acos(-1 + (2 * i) / flattenedSkills.length)
        const theta = Math.sqrt(flattenedSkills.length * Math.PI) * phi
        const radius = 8

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        return (
          <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <Text position={[x, y, z]} color={skill.color} fontSize={0.5} anchorX="center" anchorY="middle">
              {skill.name}
            </Text>
          </Float>
        )
      })}
    </Canvas>
  )
}
