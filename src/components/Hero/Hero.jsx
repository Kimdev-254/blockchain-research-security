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
              Enterprise <span className="text-cyan-500">Blockchain</span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-slate-300">
              Secure, scalable, and efficient blockchain infrastructure for the
              modern enterprise.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
            <HeroStats />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/blockchain-enterprise.jpg"
              alt="Enterprise Blockchain"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
