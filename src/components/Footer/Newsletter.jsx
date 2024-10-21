"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Newsletter() {
  return (
    <motion.div
      className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
      <p className="text-slate-400 mb-4">
        Subscribe to our newsletter for the latest in blockchain security and
        research.
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 transition-colors min-w-0"
        />
        <motion.button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
          <Send size={16} />
        </motion.button>
      </form>
    </motion.div>
  )
}
