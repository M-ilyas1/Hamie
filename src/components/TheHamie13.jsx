"use client";
import Button from "@/components/Button";

const tiersData = {
  asleep14: [
    { img: "/icons/culture.png", title: "Card One", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/public/icons/fear.png", title: "Card Two", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/public/icons/financial-loss.png", title: "Card Three", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Four", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
  ],
  asleep58: [
    { img: "/icons/culture.png", title: "Card Five", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Six", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Seven", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Eight", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
  ],
  asleep912: [
    { img: "/icons/culture.png", title: "Card Nine", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Ten", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Eleven", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
    { img: "/icons/culture.png", title: "Card Twelve", desc: "Identify limiting beliefs holding you back and replace them with empowering" },
  ],
};

const Card = ({ img, title, desc, number }) => (
  <div
    className="bg-gradient-to-r from-blue-500 to-purple-900 p-0.5 w-full flex"
    style={{
      clipPath:
        "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
    }}
  >
    <div
      className="bg-black/80 w-full flex flex-col items-start text-left text-white p-3 sm:p-4"
      style={{
        clipPath:
          "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
      }}
    >
      <div
        className="bg-gray-700/10 w-full p-2 h-full flex flex-col items-start justify-start"
        style={{
          clipPath:
            "polygon(40px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 20px 100%, 0 calc(100% - 20px), 0 40px)",
        }}
      >
        <div className="flex p-3 sm:p-4 gap-4 sm:gap-8 items-center">
          <img src={img} alt={title} className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
          <span
            className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-400/20 to-gray-400/20 bg-clip-text text-transparent"
            style={{ fontFamily: "Ethnocentric" }}
          >
            {number}
          </span>
        </div>

        <div className="p-2 h-full">
          <h3
            style={{ fontFamily: "Ethnocentric" }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent 
                       text-sm sm:text-lg lg:text-xl font-extralight mb-2"
          >
            {title}
          </h3>
          <p className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent 
                        text-xs sm:text-sm md:text-base mb-4">
            {desc}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CardGrid = ({ cardsData, startNumber }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full mt-8">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        img={card.img}
        title={card.title}
        desc={card.desc}
        number={String(startNumber + index).padStart(2, "0")}
      />
    ))}
  </div>
);

const TierSection = ({ title, desc, cards, start }) => (
  <section className="pt-12 sm:pt-16 lg:pt-20 w-full">
    <h2
      style={{ fontFamily: "Ethnocentric", fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
      className="bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent py-2"
    >
      {title}
    </h2>
    <p className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent 
                  text-xs sm:text-sm md:text-base text-center max-w-xl mx-auto">
      {desc}
    </p>
    <CardGrid cardsData={cards} startNumber={start} />
  </section>
);

function TheHamie13() {
  return (
    <section className="relative bg-black w-full flex flex-col justify-center items-center text-white py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70"></div>

      <div className="relative w-[92%] sm:w-[85%] max-w-7xl mx-auto flex flex-col items-center z-10 text-center">
        <h1
          style={{ fontFamily: "Ethnocentric", fontSize: "clamp(2rem, 6vw, 6rem)", lineHeight: "1.1" }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          The Hamie 13
        </h1>
        <h2
          style={{ fontFamily: "Ethnocentric", fontSize: "clamp(1rem, 2.5vw, 2.5rem)" }}
          className="bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent py-2"
        >
          Entrapment Tiers
        </h2>
        <p className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent 
                      text-xs sm:text-sm md:text-base max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua.
        </p>

        <TierSection title="Asleep (Tiers 1-4)" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua." cards={tiersData.asleep14} start={1} />
        <TierSection title="Asleep (Tiers 5-8)" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua." cards={tiersData.asleep58} start={5} />
        <TierSection title="Asleep (Tiers 9-12)" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua." cards={tiersData.asleep912} start={9} />
      </div>

      <div className="w-full mt-12 px-4">
        <div
          className="bg-gradient-to-r max-w-6xl mx-auto from-blue-500 to-purple-900 p-0.5 rounded-2xl"
          style={{
            clipPath:
              "polygon(80px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 80px)",
          }}
        >
          <div
            className="relative rounded-2xl py-8 px-6 sm:py-12 sm:px-10 flex flex-col items-center text-center"
            style={{
              clipPath:
                "polygon(80px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 80px)",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: "url('/game-bg.webp')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-black/80 to-gray-900/90 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col gap-10 w-full">
              <div className="flex flex-col items-center gap-3 text-center">
                <h2
                  style={{ fontFamily: "Ethnocentric", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  className="bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent"
                >
                  Ascension (Tier 13)
                </h2>
                <p className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent 
                              text-xs sm:text-sm md:text-base max-w-xl">
                  You didn’t just break the wheel. You built something better.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 flex flex-col items-start space-y-4 text-left">
                  <div className="flex flex-col gap-4">
                    <img src="/icons/minds.png" alt="Ascension Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <h3
                      style={{ fontFamily: "Ethnocentric" }}
                      className="text-lg sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent"
                    >
                      The Wheel Shatterer Tier
                    </h3>
                  </div>
                  <p className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent 
                                text-xs sm:text-sm md:text-base max-w-xl">
                    You are the glitch, the blueprint, and the storm.
                  </p>
                </div>

                <div className="flex-1 flex justify-center lg:justify-end">
                  <img src="/Hamie_Final.png" alt="Ascension Tier" className="w-full max-w-xs sm:max-w-sm rounded-xl object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheHamie13;
