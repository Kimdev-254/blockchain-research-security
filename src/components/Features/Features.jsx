"use client"
import { Shield, Cpu, Lock } from "lucide-react"
import { motion } from "framer-motion"
import Container from "../ui/Container"
import FeatureCard from "./FeatureCard"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and security protocols to protect your blockchain infrastructure.",
    },
    {
      icon: Cpu,
      title: "Smart Contracts",
      description:
        "Automated, secure, and efficient smart contract development and deployment.",
    },
    {
      icon: Lock,
      title: "Asset Protection",
      description:
        "Advanced digital asset protection with multi-signature authentication.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Built for scale, security, and performance.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
