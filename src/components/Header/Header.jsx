"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Container from "../ui/Container"
import NavLink from "./NavLink"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ["Solutions", "Products", "Resources", "About Us"]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg py-4">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="BRS Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-semibold text-xl">BRS.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`/${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-200 ease-in-out" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-200 ease-in-out" />
            )}
          </button>

          {/* Contact Us Button (Desktop) */}
          <Link
            href="/contact"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 bg-slate-950/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg"
              >
                {item}
              </NavLink>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
