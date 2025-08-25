"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 bg-gradient-to-r from-black/90 via-transparent to-black/90 pt-10 pb-4">
      <div
        className="container w-[90%] mx-auto flex justify-between items-center px-6 py-2 
        bg-gradient-to-r from-black/50 via-transparent to-black/50 
        border border-purple-800 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <Image src="/logo.PNG" alt="Logo" width={80} height={40} />
        </div>

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

        <div className="hidden md:block">
          <Button
            href="/contact"
            text="Buy now"
            img="/short-button.png"
            width={140}
            height={50}
          />
        </div>

        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-4/4 h-full bg-blue-950 bg-gradient-to-r from-black/90 via-transparent to-black/90 text-white shadow-lg z-50 md:hidden"
          >

            <ul className="flex flex-col gap-6 px-6 py-10 font-medium">
              <div className="flex justify-between items-center px-4 py-2 border border-purple-800 rounded-lg">
                <div>
                  <Image src="/logo.PNG" alt="Logo" width={80} height={40} />
                </div>
                <button
                  className="md:hidden flex items-center text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <span className="text-3xl">&times;</span>
                  ) : (
                    <span className="text-3xl">&#9776;</span>
                  )}
                </button>
              </div>
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

              <li><Button
                href="/"
                text="Buy now"
                img="/short-button.png"
                width={140}
                height={50}
              /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
