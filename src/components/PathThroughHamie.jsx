"use client";
import Button from "@/components/Button";

function PathThroughHamie() {
  const cardData = [
    {
      img: "/path1.png",
      title: "The Mirror",
      desc: "Navigate through Hamie AI and unlock new opportunities with intelligent insights. Understand your journey, make better decisions, and step confidently into the future.",
      buttonText: "Start Your Journey",
      buttonLink: "/",
    },
    {
      img: "/path2.png",
      title: "The forge",
      desc: "Identify the challenges that hold you back and learn how Hamie AI empowers you to move past them with clarity and strength.",
      buttonText: "Overcome Now",
      buttonLink: "/",
    },
    {
      img: "/path3.png",
      title: "The Journey",
      desc: "Visualize your desired future and take actionable steps with Hamie AI guiding your decisions along the way.",
      buttonText: "Shape It",
      buttonLink: "/",
    },
    {
      img: "/path4.png",
      title: "The Reflection Chamber",
      desc: "Discover hidden strengths and unleash your full potential with insights designed to help you grow and succeed.",
      buttonText: "Unlock Potential",
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
            fontSize: "clamp(2rem, 7vw, 5.5rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
        >
          Your Path
        </h1>

        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
          }}
          className="bg-gradient-to-r from-gray-100 to-gray-700 bg-clip-text text-transparent py-2"
        >
          Through Hamie AI
        </h2>

        <div className="w-full mt-12 flex flex-col space-y-12">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 to-blue-900 p-0.5 rounded-2xl"
              style={{
                clipPath:
                  "polygon(80px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 80px)",
              }}
            >
              <div
                className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 rounded-2xl p-4 sm:p-6 lg:p-8"
                style={{
                  clipPath:
                    "polygon(80px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 80px)",
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center text-left">
                  <div
                    className="w-full lg:w-[40%]"
                    style={{
                      clipPath:
                        "polygon(80px 0, calc(100% - 42px) 0, 100% 42px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 80px)",
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="rounded-xl w-full h-56 sm:h-72 md:h-80 lg:h-full object-cover"
                    />
                  </div>

                  <div className="w-full lg:w-[55%] flex flex-col space-y-4 sm:space-y-6">
                    <h3
                      style={{ fontFamily: "Ethnocentric" }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-gray-100 to-gray-800 bg-clip-text text-transparent text-center lg:text-left"
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                      {card.desc}
                    </p>
                    <div className="mx-auto lg:mx-0">
                      <Button
                        href={card.buttonLink}
                        text={card.buttonText}
                        img="/long-button.png"
                        width={240}
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

export default PathThroughHamie;
