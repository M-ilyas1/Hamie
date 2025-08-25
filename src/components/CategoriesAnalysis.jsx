import React from "react";

const categories = [
  {
    icon: "/icons/lock.png",
    title: "Toxic Relationships",
    subtitle: "Surrounded by people who hold you back.",
  },
  {
    icon: "/icons/unemployment.png",
    title: "Career Conformity",
    subtitle: "You’re working someone else’s dream—and your soul knows it.",
  },
  {
    icon: "/icons/fear.png",
    title: "Lack of Focus",
    subtitle: "Too many distractions, no clarity.",
  },
];

export const CategoriesAnalysis = () => {
  return (
    <section
      className="py-12 bg-black text-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >

      <h1 style={{ fontFamily: 'Ethnocentric', fontSize: '4rem', lineHeight: '1' }} className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-center mb-10">
          Top 3 & Bottom 3 <br />
        Categories Analysis
        </h1>

      {/* Container responsive width */}
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-8 lg:gap-10">
        {/* Left Card */}
        <div className="flex-1 bg-gray-900 rounded-2xl border-2 border-purple-500 shadow-lg p-6">
          <div className="w-full mb-6">
            <img
              src="/Rectangle-1.png"
              alt="Top Category"
              className="rounded-xl w-full h-auto"
            />
          </div>

          <h2 style={{ fontFamily: 'Ethnocentric'}} className="text-base text-gray-300 sm:text-lg md:text-xl py-4 font-bold">
            Your Top Traps:
          </h2>

          <div className="flex flex-col gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-b border-gray-700 pb-3 last:border-b-0"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-medium text-white">
                      {item.title}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-gray-900 rounded-2xl border-2 border-purple-500 shadow-lg p-6">
          <div className="w-full mb-6">
            <img
              src="/Rectangle-1.png"
              alt="Bottom Category"
              className="rounded-xl w-full h-auto"
            />
          </div>

          <h2 style={{ fontFamily: 'Ethnocentric'}} className="text-base text-gray-300 sm:text-lg md:text-xl py-4 font-bold">
            Where Your Most Free:
          </h2>

          <div className="flex flex-col gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-b border-gray-700 pb-3 last:border-b-0"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-medium text-white">
                      {item.title}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
