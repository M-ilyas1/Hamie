"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function ScoreCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const skills = [
    { id: "01", skill: "Career Conformity", value: "90%" },
    { id: "02", skill: "Financial Fragility", value: "100%" },
    { id: "03", skill: "Mental Conditioning", value: "70%" },
    { id: "04", skill: "Media Addiction", value: "65%" },
    { id: "05", skill: "Social Environment", value: "60%" },
    { id: "06", skill: "Emotional Suppression", value: "85%" },
    { id: "07", skill: "Body-Mind Disconnection", value: "75%" },
    { id: "08", skill: "Cultural Conditioning", value: "50%" },
    { id: "09", skill: "Fear of Visibility", value: "60%" },
    { id: "10", skill: "Loss of Purpose / Creativity", value: "70%" },
  ];

  const faqs = [
    { q: "What is this?", a: "This is a sample FAQ section with expandable answers." },
    { q: "How does it work?", a: "Click on a question to expand and see the answer." },
    { q: "Why choose us?", a: "Because we provide simple, clear, and reliable solutions." },
    { q: "Where can I start?", a: "You can start by exploring our services and contacting us." },
  ];

  return (
    <section
      className="relative py-15 sm:py-16 flex justify-center text-white bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 sm:w-5/6 lg:w-4/5 mx-auto">
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-center mb-10"
        >
          Sharable <br /> ScoreCard
        </h1>

        <div className="p-6 sm:p-10 border-2 bg-gray-900/80 border-purple-600 rounded-2xl flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-3/5">
            <div style={{
              fontFamily: "Ethnocentric",
            }} className="space-y-5">
              {skills.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                    {item.skill}
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-red-600 via-yellow-300 to-green-500"
                      style={{ width: item.value }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 mt-1">
                    <span>{item.id}</span>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <div
              className="bg-gray-900 rounded-2xl space-y-6 shadow-lg"
              style={{
                backgroundImage: "url('/bg-pattern.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
  className="flex flex-col items-center text-center p-4 sm:p-6"
  style={{
    backgroundImage: `
      linear-gradient(to bottom right, rgba(168,85,247,0.6), rgba(59,130,246,0.6)),
      url('/Rectangle.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    clipPath: "polygon(55px 0, 100% 0, 100% 100%, 0 100%, 0 50px)", // 👈 cut corner
    borderRadius: "12px"
  }}
>
  <img
    src="/small-character.png"
    alt="Character"
    className="w-20 sm:w-28 md:w-36 drop-shadow-2xl mx-auto pb-4"
  />
  <h2
    style={{
      fontFamily: "Ethnocentric",
      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
      lineHeight: "1",
    }}
    className="font-medium text-white"
  >
    The Self Liberator
  </h2>
</div>


              <div className="space-y-3 p-3 sm:p-4" style={{ fontFamily: "Ethnocentric" }}>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-lg cursor-pointer transition hover:border-blue-800 hover:bg-blue-500/10"
                    onClick={() => toggleFAQ(i)}
                  >
                    <div className="flex justify-between items-center p-3 sm:p-4">
                      <p className="font-medium text-sm sm:text-base">{faq.q}</p>
                      <span className="text-blue-400 text-lg sm:text-xl">
                        {openIndex === i ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-40 sm:max-h-60 p-3" : "max-h-0 p-0"
                        }`}
                    >
                      <p className="text-gray-300 text-xs sm:text-sm">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center p-4 sm:p-6">
                <div>
                  <Button
                    href="/"
                    text="Share to Socials"
                    img="/long-button.png"
                    width={240}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
