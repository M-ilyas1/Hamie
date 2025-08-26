export const TruthBombs = () => {
  return (
    <section
      className="bg-black text-white py-12"
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
      <h1
        style={{
          fontFamily: "Ethnocentric",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          lineHeight: "1",
        }}
        className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-center mb-10"
      >
        Truth Bombs
      </h1>

      {/* Quote Card */}
      <div
        className="w-[90%] md:w-[70%] mx-auto py-10 px-6 rounded-2xl text-center bg-gray-900 border-2 border-purple-800"
        style={{
          backgroundImage: `
            radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
            radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
          `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
          }}
          className="font-semibold mb-6"
        >
          Emotional Suppression + Career Conformity = 16
        </h2>
        <span className="text-4xl">"</span>
        <p
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(1rem, 4vw, 1.8rem)",
            lineHeight: "1.3",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-center"
        >
          You've normalized silence, but your truth <br /> is screaming underneath
        </p>
      </div>

      <div
        className="w-[90%] md:w-[70%] mx-auto py-10 px-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 bg-gray-900 border-2 border-purple-800 my-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
            radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
          `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2
            style={{
              fontFamily: "Ethnocentric",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
            }}
            className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent font-bold mb-4"
          >
            Your Personal Story
          </h2>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
              lineHeight: "1.6",
            }}
            className="text-gray-300"
          >
            You’ve gotten so good at holding it together, no one realizes you’re
            unraveling inside. You say “I’m fine” so often you’ve started to
            believe it—but the version of you behind that smile is begging to be
            seen.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/large-character.png"
            alt="Character"
            className="w-40 sm:w-56 md:w-72 lg:w-80 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
