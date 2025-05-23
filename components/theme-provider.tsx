"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Use a ref to track if we're mounted to avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Always render the children, but use the provider only after mounting
  // This ensures consistent rendering between server and client
  return (
    <NextThemesProvider {...props} enableSystem={mounted ? props.enableSystem : false}>
      {children}
    </NextThemesProvider>
  )
}
