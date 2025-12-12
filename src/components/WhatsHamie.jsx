"use client";
import Button from "@/components/Button";

function WhyTakeQuiz() {
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
          Hamie AI
        </h1>

        <h2
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
          }}
          className="bg-gradient-to-r from-gray-100 to-gray-700 bg-clip-text text-transparent py-2"
        >
          What is Hamie AI
        </h2>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 mt-10 md:mt-16 w-full text-left">
  
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6 px-2 sm:px-6">
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
              We are dedicated to helping you understand yourself better. Our
              mission is to uncover hidden patterns, empower you to make mindful
              decisions, and guide you toward a path of self-liberation.
              <br />
              <br />
              We are dedicated to helping you understand yourself better. Our
              mission is to uncover hidden patterns, empower you to make mindful
              decisions, and guide you toward a path of self-liberation.
            </p>
            <div className="mx-auto lg:mx-0">
              <Button
                href="/about"
                text="Read More"
                img="/long-button.png"
                width={240}
                height={60}
              />
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-blue-500 to-purple-900 p-0.5 w-full flex"
            style={{
              clipPath:
                "polygon(20px 0, calc(100% - 60px) 0, 100% 60px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 60px 100%, 0 calc(100% - 60px), 0 20px)",
            }}
          >
            <div
              className="bg-black/80 w-full flex justify-center items-center p-4 sm:p-6 md:p-8"
              style={{
                clipPath:
                  "polygon(20px 0, calc(100% - 60px) 0, 100% 60px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 60px 100%, 0 calc(100% - 60px), 0 20px)",
              }}
            >
              <div
                className="bg-gray-600/20 w-full h-full flex justify-center items-center"
                style={{
                  clipPath:
                    "polygon(20px 0, calc(100% - 60px) 0, 100% 60px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 60px 100%, 0 calc(100% - 60px), 0 20px)",
                }}
              >
                <img
                  src="/about.PNG"
                  alt="About Us Visual"
                  className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTakeQuiz;
