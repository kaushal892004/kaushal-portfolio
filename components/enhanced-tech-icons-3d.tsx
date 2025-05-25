"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, Environment } from "@react-three/drei"
import { Vector3, MathUtils } from "three"

// Define tech icons with their colors and categories
const techIcons = [
  // Languages
  { name: "Python", color: "#3776AB", category: "language" },
  { name: "JavaScript", color: "#F7DF1E", category: "language" },
  { name: "TypeScript", color: "#3178C6", category: "language" },
  { name: "C++", color: "#00599C", category: "language" },
  { name: "C", color: "#A8B9CC", category: "language" },

  // Backend
  { name: "Django", color: "#092E20", category: "backend" },
  { name: "Flask", color: "#000000", category: "backend" },
  { name: "FastAPI", color: "#009688", category: "backend" },
  { name: "Node.js", color: "#339933", category: "backend" },
  { name: "Express", color: "#000000", category: "backend" },

  // Frontend
  { name: "React", color: "#61DAFB", category: "frontend" },
  { name: "Next.js", color: "#000000", category: "frontend" },
  { name: "Tailwind", color: "#06B6D4", category: "frontend" },
  { name: "HTML5", color: "#E34F26", category: "frontend" },
  { name: "CSS3", color: "#1572B6", category: "frontend" },

  // DevOps
  { name: "Docker", color: "#2496ED", category: "devops" },
  { name: "Kubernetes", color: "#326CE5", category: "devops" },
  { name: "Terraform", color: "#7B42BC", category: "devops" },
  { name: "Ansible", color: "#EE0000", category: "devops" },
  { name: "Jenkins", color: "#D24939", category: "devops" },

  // Cloud
  { name: "AWS", color: "#FF9900", category: "cloud" },
  { name: "Azure", color: "#0078D4", category: "cloud" },
  { name: "GCP", color: "#4285F4", category: "cloud" },

  // Database
  { name: "MongoDB", color: "#47A248", category: "database" },
  { name: "PostgreSQL", color: "#4169E1", category: "database" },
  { name: "MySQL", color: "#4479A1", category: "database" },
  { name: "Redis", color: "#DC382D", category: "database" },

  // Tools
  { name: "Git", color: "#F05032", category: "tools" },
  { name: "GitHub", color: "#181717", category: "tools" },
  { name: "GitLab", color: "#FCA121", category: "tools" },
  { name: "Linux", color: "#FCC624", category: "tools" },
  { name: "Postman", color: "#FF6C37", category: "tools" },

  // Security
  { name: "Cybersecurity", color: "#FF5733", category: "security" },
  { name: "Encryption", color: "#7B68EE", category: "security" },
  { name: "Firewall", color: "#FF4500", category: "security" },
]

// Floating tech icon component
function TechIcon({ name, position, color, rotation = [0, 0, 0], size = 0.5 }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Generate a unique speed and amplitude for each icon
  const speed = useRef(MathUtils.randFloat(0.3, 0.7))
  const amplitude = useRef(MathUtils.randFloat(0.1, 0.3))
  const rotationSpeed = useRef(MathUtils.randFloat(0.001, 0.003))

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed.current) * amplitude.current

      // Gentle rotation
      meshRef.current.rotation.y += rotationSpeed.current
      meshRef.current.rotation.x += rotationSpeed.current * 0.5
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[size, size, 0.1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
      {/* <Text
        position={[0, 0, 0.06]}
        fontSize={size * 0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={size * 0.8}
        font="/fonts/Geist_Bold.json"
      >
        {name}
      </Text> */}
      <Text
  position={[0, 0, 0.06]}
  fontSize={size * 0.3}
  color="white"
  anchorX="center"
  anchorY="middle"
  maxWidth={size * 0.8}
>
  {name}
</Text>

    </mesh>
  )
}

// Glowing orb component
function GlowingOrb({ position, color, size = 1 }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Pulsating effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.15} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

// // Particle system for background
// function ParticleSystem({ count = 100 }) {
//   const particles = useRef([])
//   const meshRef = useRef()

//   // Initialize particles
//   useEffect(() => {
//     particles.current = Array.from({ length: count }, () => ({
//       position: new Vector3(
//         MathUtils.randFloatSpread(40),
//         MathUtils.randFloatSpread(40),
//         MathUtils.randFloatSpread(40),
//       ),
//       speed: MathUtils.randFloat(0.01, 0.05),
//       direction: new Vector3(
//         MathUtils.randFloatSpread(0.2),
//         MathUtils.randFloatSpread(0.2),
//         MathUtils.randFloatSpread(0.2),
//       ),
//     }))
//   }, [count])

//   useFrame(() => {
//     if (!meshRef.current) return

//     const positions = meshRef.current.geometry.attributes.position.array

//     particles.current.forEach((particle, i) => {
//       // Update particle position
//       // particle.position
//       //   .add(particle.direction.clone().multiplyScalar(particle.speed))

//       //   [
//       //     // Boundary check and bounce
//       //     ("x", "y", "z")
//       //   ].forEach((axis) => {
//       //     if (Math.abs(particle.position[axis]) > 20) {
//       //       particle.direction[axis] *= -1
//       //     }
//       //   })
//       // Update particle position
// particle.position.add(particle.direction.clone().multiplyScalar(particle.speed))

// // Boundary check and bounce
// ["x", "y", "z"].forEach((axis) => {
//   if (Math.abs(particle.position[axis]) > 20) {
//     particle.direction[axis] *= -1
//   }
// })


//       // Update buffer geometry
//       const idx = i * 3
//       positions[idx] = particle.position.x
//       positions[idx + 1] = particle.position.y
//       positions[idx + 2] = particle.position.z
//     })

//     meshRef.current.geometry.attributes.position.needsUpdate = true
//   })

//   return (
//     <points ref={meshRef}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" count={count} array={new Float32Array(count * 3)} itemSize={3} />
//       </bufferGeometry>
//       <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.3} />
//     </points>
//   )
// }

function ParticleSystem({ count = 100 }) {
  const particles = useRef([]);
  const meshRef = useRef();

  // Initialize particles
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: new Vector3(
        MathUtils.randFloatSpread(40),
        MathUtils.randFloatSpread(40),
        MathUtils.randFloatSpread(40)
      ),
      speed: MathUtils.randFloat(0.01, 0.05),
      direction: new Vector3(
        MathUtils.randFloatSpread(0.2),
        MathUtils.randFloatSpread(0.2),
        MathUtils.randFloatSpread(0.2)
      ),
    }));
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;

    const positions = meshRef.current.geometry.attributes.position.array;

    particles.current.forEach((particle, i) => {
      // Move the particle
      particle.position.add(particle.direction.clone().multiplyScalar(particle.speed));

      // Bounce off edges
      ["x", "y", "z"].forEach((axis) => {
        if (Math.abs(particle.position[axis]) > 20) {
          particle.direction[axis] *= -1;
        }
      });

      // Update buffer geometry
      const idx = i * 3;
      positions[idx] = particle.position.x;
      positions[idx + 1] = particle.position.y;
      positions[idx + 2] = particle.position.z;
    });

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.3} />
    </points>
  );
}

// Main scene component
function TechIconsScene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate the entire group very slowly
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central glowing orb */}
      <GlowingOrb position={[0, 0, 0]} color="#0066ff" size={2} />

      {/* Tech icons distributed in a spherical pattern */}
      {techIcons.map((tech, index) => {
        // Position icons in a spherical pattern
        const phi = Math.acos(-1 + (2 * index) / techIcons.length)
        const theta = Math.sqrt(techIcons.length * Math.PI) * phi

        // Different radius based on category to create layers
        let radius = 10
        if (tech.category === "language") radius = 8
        else if (tech.category === "backend" || tech.category === "frontend") radius = 10
        else if (tech.category === "devops" || tech.category === "cloud") radius = 12
        else radius = 14

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        // Random rotation
        const rotation = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2]

        // Size variation based on importance
        const size = tech.category === "language" || tech.category === "devops" ? 0.7 : 0.5

        return (
          <Float key={index} speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <TechIcon name={tech.name} position={[x, y, z]} color={tech.color} rotation={rotation} size={size} />
          </Float>
        )
      })}

      {/* Background particles */}
      <ParticleSystem count={200} />
    </group>
  )
}

export default function EnhancedTechIcons3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />
        <Environment preset="city" />
        <TechIconsScene />
      </Canvas>
    </div>
  )
}
