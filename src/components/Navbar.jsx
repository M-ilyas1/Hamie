"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70 pt-10 pb-4">
      <div
        className="relative container w-[90%] mx-auto p-[2px] rounded-lg"
        style={{
          clipPath:
            "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
          background: "linear-gradient(to right, #9333ea, #3b82f6)",
        }}
      >
        <div
          className="flex justify-between items-center px-6 py-2 
          bg-gradient-to-r from-blue-950/100 via-black to-blue-950/100"
          style={{
            clipPath:
              "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
          }}
        >
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={80} height={40} />
          </div>

          <ul className="hidden lg:flex gap-8 text-white font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Hamieverse</Link></li>
            <li><Link href="/services">Hamie AI</Link></li>
            <li><Link href="/contact">The Siga</Link></li>
            <li><Link href="/contact">Community</Link></li>
            <li><Link href="/contact">Mission</Link></li>
            <li><Link href="/contact">RoadMap</Link></li>
            <li><Link href="/contact">WhitePaper</Link></li>
            <li><Link href="/contact">PPT Maker</Link></li>
          </ul>

          <div className="hidden lg:block">
            <Button
              href="/contact"
              text="Buy now"
              img="/short-button.png"
              width={140}
              height={50}
            />
          </div>

          <button
            className="lg:hidden flex items-center text-white"
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-1 p-[2px] rounded-lg"
              style={{
                clipPath:
                  "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
                background: "linear-gradient(to right, #9333ea, #3b82f6)",
              }}
            >
              <div
                className="bg-gradient-to-r from-blue-950/100 via-black to-blue-950/100 px-6 py-6"
                style={{
                  clipPath:
                    "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
                }}
              >
                <ul className="flex flex-col gap-6 text-white font-medium">
                  <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                  <li><Link href="/about" onClick={() => setIsOpen(false)}>Hamieverse</Link></li>
                  <li><Link href="/services" onClick={() => setIsOpen(false)}>Hamie AI</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>The Siga</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>Community</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>Mission</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>RoadMap</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>WhitePaper</Link></li>
                  <li><Link href="/contact" onClick={() => setIsOpen(false)}>PPT Maker</Link></li>
                </ul>

                <div className="mt-6">
                  <Button
                    href="/contact"
                    text="Buy now"
                    img="/short-button.png"
                    width={140}
                    height={50}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
