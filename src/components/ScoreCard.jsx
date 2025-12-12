"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {Facebook, Twitter, Linkedin, Copy, Instagram, Youtube, MessageCircle, Check, MessageSquare,} from "lucide-react";

export default function ScoreCard({ quizData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [openShare, setOpenShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenShare(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const skills = quizData?.categoryScores
    ? Object.entries(quizData.categoryScores).map(([category, data], index) => ({
      id: String(index + 1).padStart(2, "0"),
      skill: category,
      value: data.score,
      percentage: parseFloat(data.score.split("/")[0]) * 10,
    }))
    : [
      { id: "01", skill: "Career Conformity", value: "90%", percentage: 90 },
      { id: "02", skill: "Financial Fragility", value: "100%", percentage: 100 },
      { id: "03", skill: "Mental Conditioning", value: "70%", percentage: 70 },
      { id: "04", skill: "Media Addiction", value: "65%", percentage: 65 },
      { id: "05", skill: "Social Environment", value: "60%", percentage: 60 },
      { id: "06", skill: "Emotional Suppression", value: "85%", percentage: 85 },
      { id: "07", skill: "Body-Mind Disconnection", value: "75%", percentage: 75 },
      { id: "08", skill: "Cultural Conditioning", value: "50%", percentage: 50 },
      { id: "09", skill: "Fear of Visibility", value: "60%", percentage: 60 },
      { id: "10", skill: "Loss of Purpose / Creativity", value: "70%", percentage: 70 },
    ];

  const faqs = [
    { q: "Your wheel Trap score:", a:quizData?.tierSummary, status: quizData?.totalScore || "79/100" },
    { q: "Entrapment Tier:", a: quizData?.tierInfo?.theme, status: quizData?.tierInfo?.tierName || "the wheellocked" },
    { q: "Phase:", a: quizData?.tierInfo?.theme, status: quizData?.tierInfo?.phase || "Asleep" },
    { q: "Your major traps:", a: quizData?.topTrapPersonalStory, status: quizData?.yourMajorTraps || "Financial fragility" },
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
            <div style={{ fontFamily: "Ethnocentric" }} className="space-y-5">
              {skills.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                    {item.skill}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-red-600 via-yellow-300 to-green-500"
                      style={{ width: `${item.percentage}%` }}
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
                  clipPath: "polygon(55px 0, 100% 0, 100% 100%, 0 100%, 0 50px)",
                  borderRadius: "12px",
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
                  {quizData?.tierInfo?.tierName || "The Self Liberator"}
                </h2>
              </div>

              {/* FAQs */}
              <div className="space-y-3 p-3 sm:p-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white/10 cursor-pointer transition hover:border-blue-800 "
                    onClick={() => toggleFAQ(i)}
                  >
                    <div className="bg-blue-400/20 flex justify-between items-center p-3 sm:p-4">
                      <p className="font-medium text-sm" style={{ fontFamily: "Ethnocentric" }}>{faq.q}</p>
                      <span className="text-sm">{faq.status}</span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-40 sm:max-h-60 p-3" : "max-h-0 p-0"
                        }`}
                    >
                      <p className="font-medium text-sm py-2 pb-4" style={{ fontFamily: "Ethnocentric" }}>{faq.q}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Share Button + Popup */}
              <div className="text-center p-4 sm:p-6 relative" ref={popupRef}>
                <button
                  onClick={() => setOpenShare(!openShare)}
                  className="relative inline-block w-[240px] h-[50px] rounded-lg shadow overflow-hidden "
                  style={{ fontFamily: "Ethnocentric" ,cursor: "pointer"}}
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
                    Share with Social
                  </span>
                </button>

                {openShare && (
                                     <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-gray-900 rounded-2xl shadow-2xl p-6 w-96 z-50 border border-purple-600">
                    <h3
                      style={{ fontFamily: "Ethnocentric" }}
                      className="text-white text-lg mb-4 text-center"
                    >
                      Share your ScoreCard
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
                            href={`https://wa.me/?text=${encodeURIComponent(quizData?.shareSocials || 'Check out my ScoreCard!')}`}
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
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://hamie.ai')}&quote=${encodeURIComponent(quizData?.shareSocials || 'Check out my ScoreCard!')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                          title="Share on Facebook"
                        >
                          <Facebook className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://hamie.ai')}&text=${encodeURIComponent(quizData?.shareSocials || 'Check my ScoreCard!')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full hover:scale-110 transition bg-purple-500 p-3 flex items-center justify-center"
                          title="Share on Twitter"
                        >
                          <Twitter className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://hamie.ai')}&title=${encodeURIComponent('My Hamie AI ScoreCard')}&summary=${encodeURIComponent(quizData?.shareSocials || 'Check out my ScoreCard!')}`}
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
          </div>
        </div>
      </div>
    </section>
  );
}
