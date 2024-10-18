"use client"
import Link from "next/link"
import Image from "next/image"
import Container from "../ui/Container"
import NavLink from "./NavLink"

export default function Header() {
  const navItems = ["Solutions", "Products", "Resources", "About Us"]

  return (
    <header className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg py-4">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png" // Make sure to add your logo to the public folder
              alt="BRS Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-semibold text-xl">BRS.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`/${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </div>

          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </Container>
    </header>
  )
}
