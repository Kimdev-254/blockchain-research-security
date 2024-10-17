// components/Header/Header.jsx
"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Container from "../ui/Container"
import NavLink from "./NavLink"

export default function Header() {
  const navItems = ["Solutions", "Products", "Resources", "Enterprise"]

  return (
    <motion.header
      className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
          >
            CryptoChain
          </Link>

          <nav className="hidden md:flex items-center space-x-8 font-medium">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
            <motion.button
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </nav>
        </div>
      </Container>
    </motion.header>
  )
}
