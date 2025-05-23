import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import dynamic from "next/dynamic"

// Dynamically import the enhanced 3D background to avoid SSR issues
// const EnhancedTechIcons3D = dynamic(() => import("@/components/enhanced-tech-icons-3d"), { ssr: false })
import ClientEnhanced3D from "@/components/ClientEnhanced3D";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Kaushal-portfolio",
  description:
    "Portfolio of Kaushal Parmar, a passionate Backend Developer and DevOps Engineer.",
  keywords: ["Backend", "DevOps", "Python", "Developer", "Portfolio", "Kaushal Parmar"],
  // generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // The 'hydrated' class was causing hydration mismatches
                // This script prevents that class from being added during SSR
                if (typeof window !== 'undefined') {
                  document.documentElement.classList.remove('hydrated');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* <EnhancedTechIcons3D /> */}
          <ClientEnhanced3D />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
