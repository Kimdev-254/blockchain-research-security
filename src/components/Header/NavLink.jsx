// components/Header/NavLink.jsx
"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative group">
      <span className="text-slate-300 hover:text-white transition-colors">
        {children}
      </span>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      />
    </Link>
  )
}
