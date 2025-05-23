"use client";

import dynamic from "next/dynamic";

const EnhancedTechIcons3D = dynamic(() => import("@/components/enhanced-tech-icons-3d"), {
  ssr: false,
});

export default function ClientEnhanced3D() {
  return <EnhancedTechIcons3D />;
}