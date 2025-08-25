import Link from "next/link";
import Image from "next/image";

export const UnlockTheForge = () => {
  return (
    <section
      className="bg-black text-white py-12 px-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <h1 style={{ fontFamily: 'Ethnocentric', fontSize: '4rem'}} className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3">
        Unlock The Forge
      </h1>
      <p className="text-center text-gray-300 mb-12">
        Unlock the Forge within you and ignite your true potential.
      </p>

      {/* Card 1 */}
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
          <div className="w-[65%] sm:w-[70%] text-center md:text-left">
            <h2 style={{ fontFamily: 'Ethnocentric'}} className="text-sm sm:text-md md:text-md font-bold mb-3">
              Emotional Suppression + Career Conformity = 16
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed">
              You've normalized silence, but your truth <br /> is screaming
              underneath.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
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
            <h2 style={{ fontFamily: 'Ethnocentric'}} className="text-sm sm:text-md md:text-md font-bold mb-3">
              C Emotional Suppression + Career Conformity = 16
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed">
              You've normalized silence, but your truth <br /> is screaming
              underneath.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] md:w-[70%] mx-auto text-center my-14 md:my-20" >
        <h1 style={{ fontFamily: 'Ethnocentric', fontSize: '4rem'}} className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3">
         This Wasn’t a <br/> Personality Test
      </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          This wasn’t a personality test. It was a mirror. Now you know where
          you’re trapped. Now you see the system. <br className="hidden sm:block" />
          And now—you get to decide what to do about it.
        </p>
        <div>
          <Link
            href="/contact"
            className="relative inline-block w-[160px] sm:w-[200px] md:w-[240px] h-[45px] sm:h-[55px] md:h-[60px] rounded-lg shadow overflow-hidden"
          >
            <Image
              src="/long-button.png"
              alt="Button BG"
              fill
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-lg">
              Share Results
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
