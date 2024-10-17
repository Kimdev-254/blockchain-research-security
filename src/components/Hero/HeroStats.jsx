// components/Hero/HeroStats.jsx
"use client"
import { motion } from "framer-motion"

export default function HeroStats() {
  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "$2B+", label: "Assets Secured" },
    { value: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="grid grid-cols-3 gap-8 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-cyan-500">{stat.value}</div>
          <div className="text-slate-400 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
