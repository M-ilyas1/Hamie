"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { useState, useRef, useEffect } from "react";
import {Facebook, Twitter, Linkedin, Copy, Instagram, Youtube, Check,} from "lucide-react";

export default function Result({ quizData }) {
  const [openShare, setOpenShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenShare(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log('Result component received quizData:', quizData); // Debug log
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-24 flex justify-center text-white bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.3), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.3), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 sm:w-5/6 lg:w-4/5 mx-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-6">
          <h1
            style={{
              fontFamily: "Ethnocentric",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              lineHeight: "1",
            }}
            className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text md:text-left text-center text-transparent"
          >
            Total <br /> WheelTrap <br /> Explanation
          </h1>

          <p className="text-gray-300 text-center md:text-left text-sm sm:text-base md:text-lg leading-relaxed">
            {quizData?.tierSummary || "You scored 73/100, landing in Tier 11: The Self Liberator (Phase: Activation). You've started building your life on truth—not programming. And you're not looking back."}
          </p>

          <div className="text-center md:text-left relative" ref={popupRef}>
            <button
              onClick={() => setOpenShare(!openShare)}
              className="relative inline-block w-[240px] h-[50px] rounded-lg shadow overflow-hidden"
              style={{ fontFamily: "Ethnocentric", cursor: "pointer" }}
            >
              <Image
                src="/long-button.png"
                alt="Button BG"
                fill
                className="object-cover"
              />
              <span
                style={{
                  fontFamily: "Ethnocentric",
                  fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
                }}
                className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm sm:text-lg"
              >
                Share Result
              </span>
            </button>

            {openShare && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-gray-900 rounded-2xl shadow-2xl p-6 w-96 z-50 border border-purple-600">
                <h3
                  style={{ fontFamily: "Ethnocentric" }}
                  className="text-white text-lg mb-4 text-center"
                >
                  Share your Result
                </h3>

                <div className="flex items-center mb-5 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                  <input
                    type="text"
                    value={quizData?.shareSocials}
                    readOnly
                    className="w-full px-3 py-2 text-gray-300 bg-transparent text-sm outline-none"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(quizData?.shareSocials);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-700 transition flex items-center justify-center min-w-[60px]"
                  >
                    {copied ? (
                      <div className="flex items-center space-x-1">
                        <Check className="w-4 h-4 text-white" />
                        <span className="text-white text-xs">Copied!</span>
                      </div>
                    ) : (
                      <Copy className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>

                <div className="text-center mb-4">
                  <p className="text-gray-300 text-sm mb-3">
                    Copy the text above and paste it in your social media posts
                  </p>
                </div>
                
                <div className="flex justify-between items-center text-white space-x-3">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(quizData?.shareSocials || 'Check out my Result!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                    title="Share via WhatsApp (pre-filled message)"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://hamie.ai')}&quote=${encodeURIComponent(quizData?.shareSocials || 'Check out my Result!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://hamie.ai')}&text=${encodeURIComponent(quizData?.shareSocials || 'Check my Result!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://hamie.ai')}&title=${encodeURIComponent('My Hamie AI Result')}&summary=${encodeURIComponent(quizData?.shareSocials || 'Check out my Result!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                    title="Copy the text above and paste it in your Instagram post"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                    title="Copy the text above and share it in your YouTube community post or video description"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col gap-6 bg-gray-900">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-xl">
                <img
                  src="/small-character.png"
                  alt="profile"
                  className="w-16 sm:w-20"
                />
                <div className="text-center items-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-100">
                    Your Entrapment Type is
                  </p>
                  <h2
                    style={{
                      fontFamily: "Ethnocentric",
                      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                      lineHeight: "1",
                    }}
                    className="font-bold text-white"
                  >
                    {quizData?.tierInfo?.tierName || "The Self Liberator"}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-100">
                    Your WheelTrap Score: {quizData?.totalScore || "79/100"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  On This Page:
                </p>
                <ul className="space-y-2 text-sm sm:text-base">
                  {[
                    "1. Sharable scorecard",
                    "2. Category Definitions + Scores",
                    "3. Top 3 & Bottom 3 Categories Analysis",
                    "4. Truth Bombs",
                    "5. Your story",
                    "6. Next steps",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="px-2 sm:px-3 py-2 sm:py-3 border-l-4 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
