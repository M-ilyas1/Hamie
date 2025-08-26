import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { Twitter, Send } from "lucide-react"; // Send icon looks like Telegram

export const UnlockTheForge = () => {
  return (
    <section
      className="bg-black text-white py-15 px-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          fontFamily: "Ethnocentric",
          fontSize: "clamp(2rem, 5vw, 4rem)",
        }}
        className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent font-bold text-center mb-3"
      >
        Unlock The Forge
      </h1>
      <p className="text-center text-gray-300 mb-12">
        Unlock the Forge within you and ignite your true potential.
      </p>

      <div
        className="relative w-[95%] sm:w-[90%] md:w-[70%] mx-auto p-4 rounded-2xl flex items-center gap-6 md:gap-8 border-2 border-purple-800 bg-cover bg-center overflow-hidden mb-8"
        style={{ backgroundImage: "url('/game-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-950/90 to-blue-950/90 rounded-2xl"></div>
        <div className="relative flex items-center w-full gap-6 md:gap-8">
          <div className="w-[35%] sm:w-[30%] flex justify-center">
            <img
              src="/Rectangle-3.png"
              alt="Character"
              className="w-28 sm:w-40 md:w-56 lg:w-72 md:h-50 drop-shadow-2xl"
            />
          </div>
          <div className="w-[65%] sm:w-[70%]">
            <h2
              style={{
                fontFamily: "Ethnocentric",
                fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
              }}
              className="font-bold mb-3"
            >
              Emotional Suppression + Career Conformity = 16
            </h2>
            <p
              style={{
                fontSize: "clamp(0.8rem, 2.2vw, 1rem)",
              }}
              className="text-gray-300 leading-relaxed"
            >
              You've normalized silence, but your truth <br /> is screaming
              underneath.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative w-[95%] sm:w-[90%] md:w-[70%] mx-auto p-4 rounded-2xl flex items-center gap-6 md:gap-8 border-2 border-purple-800 bg-cover bg-center overflow-hidden mb-12"
        style={{ backgroundImage: "url('/game-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-950/90 to-blue-950/90 rounded-2xl"></div>
        <div className="relative flex items-center w-full gap-6 md:gap-8">
          <div className="w-[35%] sm:w-[30%] flex justify-center">
            <img
              src="/Rectangle-4.png"
              alt="Character"
              className="w-28 sm:w-40 md:w-56 lg:w-72 md:h-50 drop-shadow-2xl"
            />
          </div>
          <div className="w-[65%] sm:w-[70%] text-center md:text-left">
            <h2
              style={{
                fontFamily: "Ethnocentric",
                fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
              }}
              className="font-bold mb-3"
            >
              C Emotional Suppression + Career Conformity = 16
            </h2>
            <p
              style={{
                fontSize: "clamp(0.8rem, 2.2vw, 1rem)",
              }}
              className="text-gray-300 leading-relaxed"
            >
              You've normalized silence, but your truth <br /> is screaming
              underneath.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] md:w-[70%] mx-auto text-center my-14 md:my-20">
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent font-bold text-center mb-3"
        >
          This Wasn’t a <br /> Personality Test
        </h1>
        <p
          style={{
            fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
            lineHeight: "1.6",
          }}
          className="text-gray-300 mb-8 leading-relaxed"
        >
          This wasn’t a personality test. It was a mirror. Now you know where
          you’re trapped. Now you see the system.{" "}
          <br className="hidden sm:block" />
          And now—you get to decide what to do about it.
        </p>
        <div>
          <Button
            href="/"
            text="Begin Quiz 2"
            img="/long-button.png"
            width={240}
            height={50}
          />
        </div>
      </div>


      <div>
        <div
          className="w-[90%] md:w-[70%] mx-auto rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 bg-gray-900 border-2 border-purple-800 my-10"
        >
          <div className="w-[90%] md:w-[60%] text-center md:text-left p-10">
            <h2
              style={{
                fontFamily: "Ethnocentric",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
              }}
              className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent font-bold mb-4"
            >
              Join The Community
            </h2>
            <p
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
                lineHeight: "1.6",
              }}
              className="text-gray-300"
            >
              You’ve gotten so good at holding it together, no one realizes you’re
              unraveling inside. You say I’m fine.
            </p>

            <div className="flex gap-4 md:justify-start justify-center mt-4">
              <div className="p-3 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
                <Twitter className="w-6 h-6 text-white" />
              </div>

              <div className="p-3 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
                <Send className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[40%] pt-2 md:pt-10 flex justify-center">
            <img
              src="/Hamie_Final.png"
              alt="Character"
              className="w-260 drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
