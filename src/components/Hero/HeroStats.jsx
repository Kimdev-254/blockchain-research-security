// components/HeroStats/HeroStats.jsx
"use client"
import { motion } from "framer-motion"

export default function HeroStats() {
  const stats = [
    { value: "100+", label: "Security Audits" },
    { value: "50+", label: "Research Papers" },
    { value: "1000+", label: "Web3 Transitions" },
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
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            {stat.value}
          </div>
          <div className="text-slate-400 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
