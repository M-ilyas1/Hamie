"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 bg-gradient-to-r from-black/90 via-transparent to-black/90 pt-10 pb-4">
      <div
        className="container w-[90%] mx-auto flex justify-between items-center px-6 py-2 
        bg-gradient-to-r from-black/50 via-transparent to-black/50 
        border border-purple-800 rounded-lg"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.PNG" alt="Logo" width={80} height={40} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Hamieverse</Link></li>
          <li><Link href="/services">Hamie AI</Link></li>
          <li><Link href="/contact">The Siga</Link></li>
          <li><Link href="/contact">Community</Link></li>
          <li><Link href="/contact">Mission</Link></li>
          <li><Link href="/contact">RoadMap</Link></li>
          <li><Link href="/contact">WhitePaper</Link></li>
          <li><Link href="/contact">PPT Maker</Link></li>
          <li><Link href="/contact">Merch</Link></li>
        </ul>

        {/* Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative inline-block w-[160px] h-[50px] rounded-lg shadow overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src="/short-button.png"
              alt="Button BG"
              fill
              className="object-cover"
            />
            {/* Text Overlay */}
            <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
              Buy Now
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span> // Close (X)
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden text-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 font-medium">
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>Hamieverse</Link></li>
              <li><Link href="/services" onClick={() => setIsOpen(false)}>Hamie AI</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>The Siga</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Community</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Mission</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>RoadMap</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>WhitePaper</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>PPT Maker</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Merch</Link></li>

              {/* Mobile Button */}
              <li>
                <Link
                  href="/contact"
                  className="relative inline-block w-[140px] h-[40px] rounded-lg shadow overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/button.PNG"
                    alt="Button BG"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                    Buy Now
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
