// components/Footer/SocialLinks.jsx
"use client"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Youtube } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-500 hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            <Icon size={20} />
          </motion.a>
        )
      })}
    </div>
  )
}
