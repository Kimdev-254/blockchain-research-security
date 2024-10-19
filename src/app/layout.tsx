// app/layout.tsx
import { ReactNode } from "react"
import { Inter, Orbitron } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata = {
  title: "Blockchain Research and Security",
  description: "Enterprise-grade blockchain solutions for modern businesses",
  keywords:
    "enterprise blockchain, cryptocurrency, DeFi, smart contracts, business solutions",
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
