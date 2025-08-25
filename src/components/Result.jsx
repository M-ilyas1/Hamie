import Link from "next/link";
import Image from "next/image";

export default function Result() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-24 flex justify-center text-white bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.3), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.3), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 sm:w-5/6 lg:w-4/5 mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side (60%) */}
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-6">
          <h1
            style={{ fontFamily: 'Ethnocentric', fontSize: '4rem', lineHeight: '1' }}
            className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent"
          >
            Total <br /> WheelTrap <br /> Explanation
          </h1>
          <p className="text-gray-300 text-center md:text-left text-sm sm:text-base md:text-lg leading-relaxed">
            You scored 73/100, landing in Tier 11: The Self Liberator (Phase:
            Activation). You’ve started building your life on truth—not
            programming. And you’re not looking back.
          </p>
          <div className="text-center md:text-left">
            <Link
              href="/contact"
              className="relative inline-block w-[180px] sm:w-[220px] md:w-[260px] h-[45px] sm:h-[55px] md:h-[60px] rounded-lg shadow overflow-hidden"
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

        {/* Right Side (40%) */}
        <div className="w-full md:w-2/5">
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col gap-6 bg-gray-900">
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-xl">
                <img
                  src="/small-character.png"
                  alt="profile"
                  className="w-16 sm:w-20"
                />
                <div className="text-center items-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-100">
                    Your Entrapment Type is
                  </p>
                  <h2 style={{ fontFamily: 'Ethnocentric', fontSize: '1.2rem', lineHeight: '1' }} className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    The Self Liberator
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-100">
                    Your WheelTrap Score: 79/100
                  </p>
                </div>
              </div>

              {/* Page Sections */}
              <div>
                <p className="text-gray-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  On This Page:
                </p>
                <ul className="space-y-2 text-sm sm:text-base">
                  {[
                    "1. Sharable scorecard",
                    "2. Category Definitions + Scores",
                    "3. Top 3 & Bottom 3 Categories Analysis",
                    "4. Truth Bombs",
                    "5. Your story",
                    "6. Next steps",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="px-2 sm:px-3 py-2 sm:py-3 border-l-4 border-transparent hover:border-blue-500 hover:bg-blue-500/10 transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
