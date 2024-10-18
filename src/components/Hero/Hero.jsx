// components/Hero/Hero.jsx
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Container from "../ui/Container"
import HeroStats from "./HeroStats"

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-6xl font-orbitron font-bold leading-tight">
              Blockchain{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Research
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 text-transparent bg-clip-text">
                Security
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Your trusted partner in the Web3 revolution. We guide businesses
              through the critical transition from centralized Web2 to
              decentralized Web3 architecture, ensuring security and innovation
              at every step.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </div>
            <HeroStats />
          </motion.div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20" />
            <Image
              src="/blockchain-security.jpg"
              alt="Blockchain Security Visualization"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl relative"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
