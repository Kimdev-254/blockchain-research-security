// components/Features/Features.jsx
"use client"
import {
  ShieldCheck,
  Lightbulb,
  Network, // Changed from Blockchain as it's not available in lucide
  Lock,
  RefreshCw,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import Container from "../ui/Container"
import FeatureCard from "./FeatureCard"

export default function Features() {
  const features = [
    {
      Icon: ShieldCheck,
      title: "Security Research",
      description:
        "Cutting-edge blockchain security research and vulnerability assessment protocols.",
    },
    {
      Icon: Lightbulb,
      title: "Innovation Lab",
      description:
        "Pioneering research in Web3 technologies and decentralized systems.",
    },
    {
      Icon: Network, // Changed from Blockchain
      title: "Web3 Integration",
      description:
        "Seamless transition strategies from Web2 to Web3 architecture.",
    },
    {
      Icon: Lock,
      title: "Security Audits",
      description:
        "Comprehensive smart contract and blockchain security audits.",
    },
    {
      Icon: RefreshCw,
      title: "Digital Evolution",
      description:
        "Guide your business through the digital transformation journey.",
    },
    {
      Icon: Users,
      title: "Expert Guidance",
      description:
        "Dedicated team of Web3 security researchers and blockchain experts.",
    },
  ]

  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            Comprehensive Web3 Security Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our suite of services ensures your transition to Web3 is secure,
            efficient, and future-proof.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
