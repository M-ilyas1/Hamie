"use client";
import Card from "./Card";

function HeroSectionHamieQuiz() {
  const cardsData = [
    {
      img: "/Rectangle-1.png",
      title: "Complete the test",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Understand your decision-making style and how it impacts your life.",
    },
    {
      img: "/Rectangle-1.png",
      title: "View Detailed results",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Understand your decision-making style and how it impacts your life.",
    },
    {
      img: "/Rectangle-1.png",
      title: "Unlock Your Potential",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Understand your decision-making style and how it impacts your life.",
    },
  ];

  return (
    <section className="relative bg-black w-full flex flex-col justify-center items-center text-white py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70"></div>

      <div className="relative w-[90%] max-w-7xl mx-auto flex flex-col items-center z-10 text-center">
        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
          }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Free personality test:
        </h2>

        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2.2rem, 8vw, 6rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent mb-12"
        >
          Know Your <br /> Entrapment <br /> Tier
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:my-10 w-full">
          {cardsData.map((card, index) => (
            <Card key={index} img={card.img} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSectionHamieQuiz;
