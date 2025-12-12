"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "01. What is name unchained?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "02. How do I buy hamie token?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "03. What are hamieverse NFTs?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "04. What is the hamie roadmap?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent text-center mb-5"
        >
          Your Questions,
        </h1>
        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 6vw, 2rem)",
          }}
          className="bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent text-center mb-10"
        >
          Our clear Answers
        </h2>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggle(index)} // 🔥 pura div click se toggle hoga
              className="bg-gray-900/50 rounded-lg p-6 border border-purple-500 cursor-pointer hover:bg-gray-900/70 transition-colors duration-300"
            >
              <div className="flex justify-between items-center">
                <h3
                  style={{
                    fontFamily: "Ethnocentric",
                    fontSize: "clamp(0.9rem, 6vw, 1.3rem)",
                  }}
                  className="font-medium w-[80%]"
                >
                  {faq.question}
                </h3>

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r shadow-md shadow-purple-600 from-blue-500 to-purple-500 text-white font-bold text-lg transition-transform duration-300"
                >
                  {openIndex === index ? "-" : "+"}
                </div>
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-300 overflow-hidden w-[80%]"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
