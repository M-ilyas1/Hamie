"use client";
import Button from "@/components/Button";

function HamieTopics() {
  const cardsData = [
    {
      img: "/icons/culture.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/fear.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/financial-loss.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/idiot.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/lock.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/minds.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/motional.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
    {
      img: "/icons/social-circle.png",
      title: "How's trapped are you?",
      desc: "Identify limiting beliefs holding you back and replace them with empowering choices for a brighter future.",
      buttonText: "Take the Wheel Trap Test",
      buttonLink: "/",
    },
  ];

  return (
    <section className="relative bg-black w-full flex flex-col justify-center items-center text-white py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-transparent to-blue-950/60"></div>

      <div className="relative w-[95%] sm:w-[90%] max-w-7xl mx-auto flex flex-col items-center z-10 text-center">
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2rem, 7vw, 5rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Topics
        </h1>
        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
          }}
          className="bg-gradient-to-r from-gray-100 to-gray-700 bg-clip-text text-transparent py-2"
        >
          Hamie's AI Trained For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 w-full">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-purple-900 p-0.5 w-full flex"
              style={{
                clipPath:
                  "polygon(50px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 50px)",
              }}
            >
              <div
                className="bg-black/80 w-full flex flex-col items-start text-left text-white p-4"
                style={{
                  clipPath:
                    "polygon(50px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 50px)",
                }}
              >
                <div className="bg-gray-700/10 p-4 h-full flex flex-col justify-between">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mt-4 mb-4"
                  />

                  <div className="flex flex-col flex-1">
                    <h3
                      style={{ fontFamily: "Ethnocentric" }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-lg sm:text-xl font-extralight mb-3"
                    >
                      {card.title}
                    </h3>
                    <p className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent text-sm sm:text-base mb-4">
                      {card.desc}
                    </p>

                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent text-sm sm:text-base"
                      style={{ fontFamily: "Ethnocentric" }}
                    >
                      read more +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button
            href=""
            text="read more"
            img="/long-button.png"
            width={220}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}

export default HamieTopics;
