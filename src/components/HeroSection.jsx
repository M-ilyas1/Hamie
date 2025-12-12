import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ quizData }) {
  return (
    <section
      className="relative bg-black flex justify-center items-center text-white py-10"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70"></div>

      <div className="relative flex-col items-center z-10 text-center">
        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent"
        >
          Your Entrapment type is:
        </h2>

        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent"
        >
          {quizData?.tierInfo?.tierName || "The self Liberator"}
        </h1>

        <div>
          <img
            src="/small-character.png"
            alt="Character"
            className="relative z-10 top-20 md:top-28 w-48 md:w-94 drop-shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
