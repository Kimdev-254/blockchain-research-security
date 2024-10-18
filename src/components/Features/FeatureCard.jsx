// components/Features/FeatureCard.jsx
"use client"
import { motion } from "framer-motion"

export default function FeatureCard({ Icon, title, description }) {
  return (
    <motion.div
      className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors"
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-cyan-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  )
}
