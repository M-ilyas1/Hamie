import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-blue-950 flex justify-center items-center text-white py-10"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90"></div>

      <div className="relative flex-col items-center z-10 text-center">
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent"
        >
          Your Entrapment type is:
        </h1>

        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent"
        >
          The self <br /> Liberator
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
