"use client";
import Button from "@/components/Button";

function WhyTakeQuiz() {
  const cardsData = [
    {
      img: "/quiz1.png",
      title: "How's trapped are you?",
      desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Gain clarity on how choices shape your destiny and empower your future.",
      buttonText: "Take the Wheel Trap",
      buttonLink: "/",
    },
    {
      img: "/quiz2.png",
      title: "What's sabotaging you from within?",
      desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Gain clarity on how choices shape your destiny and empower your future.",
      buttonText: "Discover More",
      buttonLink: "/",
    },
  ];

  return (
    <section className="relative bg-black w-full flex flex-col justify-center items-center text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70"></div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center z-10 text-center">
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2rem, 7vw, 5rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Why Take Quiz
        </h1>

        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
          }}
          className="bg-gradient-to-r from-gray-100 to-gray-700 bg-clip-text text-transparent py-2"
        >
          Destiny awaits
        </h2>

        <p className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent text-sm sm:text-base md:text-lg max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mt-12 w-full">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-purple-900 p-0.5 w-full flex"
              style={{
                clipPath:
                  "polygon(105px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 105px)",
              }}
            >
              <div
                className="bg-black/80 w-full flex flex-col items-center text-center text-white p-4 sm:p-6 md:p-8"
                style={{
                  clipPath:
                    "polygon(105px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 105px)",
                }}
              >
                <div
                  className="bg-gray-600/20 h-full"
                  style={{
                    clipPath:
                      "polygon(105px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 105px)",
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="mb-4 w-full h-auto object-contain"
                  />
                  <div className="p-4 sm:p-6 md:p-10">
                    <h3
                      style={{ fontFamily: "Ethnocentric" }}
                      className="bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent text-lg sm:text-2xl md:text-3xl font-extralight mb-2"
                    >
                      {card.title}
                    </h3>

                    <p className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg py-4">
                      {card.desc}
                    </p>

                    <div>
                      <Button
                        href={card.buttonLink}
                        text={card.buttonText}
                        img="/long-button.png"
                        width={260}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTakeQuiz;
