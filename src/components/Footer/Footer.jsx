// components/Footer/Footer.jsx
"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react"
import Container from "../ui/Container"
import Newsletter from "./Newsletter"
import FooterSection from "./FooterSection"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  const services = [
    "Security Audits",
    "Blockchain Research",
    "Web3 Consulting",
    "Smart Contract Development",
    "Security Training",
    "Risk Assessment",
  ]

  const resources = [
    "Research Papers",
    "Case Studies",
    "Documentation",
    "Blog",
    "Webinars",
    "Security Updates",
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-cyan-500" />
              <h2 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Block Research
              </h2>
            </div>
            <p className="text-slate-400">
              Leading the revolution in blockchain security and Web3
              transformation through cutting-edge research and innovation.
            </p>
            <SocialLinks />
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FooterSection title="Services">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-cyan-500 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FooterSection title="Resources">
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-cyan-500 transition-colors"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Newsletter />
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800"
        >
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin size={16} className="text-cyan-500" />
            <span>123 Blockchain Ave, Karatina</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Phone size={16} className="text-cyan-500" />
            <span>+254 XXXXXXXX</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Mail size={16} className="text-cyan-500" />
            <span>contact@blockresearch.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock size={16} className="text-cyan-500" />
            <span>24/7 Security Operations</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400"
        >
          <p>© {new Date().getFullYear()} Kimdev254. All rights reserved.</p>
        </motion.div>
      </Container>
    </footer>
  )
}
