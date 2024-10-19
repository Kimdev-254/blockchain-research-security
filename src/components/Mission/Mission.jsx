// components/Mission/Mission.jsx
"use client"
import { motion } from "framer-motion"
import Container from "../ui/Container"

export default function Mission() {
  return (
    <section className="py-20 bg-slate-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-orbitron font-bold">
            Pioneering the Future of Web3
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            In today&apos;s rapidly evolving digital landscape, the transition
            from Web2 to Web3 isn&apos;t just an upgrade—it&apos;s a fundamental
            transformation in how we approach digital security and
            decentralization. At Block Research Security Limited, we&apos;re
            committed to making this journey secure, seamless, and strategic for
            your business.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
