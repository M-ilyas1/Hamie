import Image from "next/image";

export const Category = ({ quizData }) => {
  console.log('Category component received quizData:', quizData);
  
  const getScoreColor = (score) => {
    const numericScore = parseFloat(score.split('/')[0]);
    if (numericScore >= 8) return 'text-green-400';
    if (numericScore >= 6) return 'text-yellow-400';
    if (numericScore >= 4) return 'text-orange-400';
    return 'text-red-400';
  };

  const getDotColor = (score) => {
    const numericScore = parseFloat(score.split('/')[0]);
    if (numericScore >= 8) return 'bg-green-400';
    if (numericScore >= 6) return 'bg-yellow-400';
    if (numericScore >= 4) return 'bg-orange-400';
    return 'bg-red-400';
  };

  const formatScore = (score) => {
    const [numerator, denominator] = score.split('/');
    const formattedNumerator = numerator.padStart(2, '0');
    return `${formattedNumerator}/${denominator}`;
  };

  const iconMap = {
    "Career Conformity": "/icons/unemployment.png",
    "Financial Fragility": "/icons/financial-loss.png",
    "Mental Conditioning": "/icons/lock.png",
    "Media Addiction": "/icons/social-media-addiction.png",
    "Social Environment": "/icons/social-circle.png",
    "Emotional Suppression": "/icons/motional.png",
    "Body-Mind Disconnection": "/icons/minds.png",
    "Cultural Conditioning": "/icons/culture.png",
    "Fear of Visibility": "/icons/fear.png",
    "Loss of Purpose / Creativity": "/icons/idiot.png"
  };

  // Convert API data to categories format
  const categories = quizData?.categoryScores ? Object.entries(quizData.categoryScores).map(([category, data]) => {
    console.log(`Processing category: ${category}`, data); // Debug log
    return {
      icon: iconMap[category] || "/icons/culture.png",
      title: category,
      subtitle: data.categoryDefinition,
      score: formatScore(data.score),
    };
  }) : [
    {
      icon: "/icons/unemployment.png",
      title: "Career Conformity",
      subtitle: "You're working someone else's dream—and your soul knows it.",
      score: "05/10",
    },
    {
      icon: "/icons/financial-loss.png",
      title: "Financial Struggles",
      subtitle: "Money stress is silently draining your energy.",
      score: "06/10",
    },
    {
      icon: "/icons/lock.png",
      title: "Toxic Relationships",
      subtitle: "Surrounded by people who hold you back.",
      score: "04/10",
    },
    {
      icon: "/icons/social-circle.png",
      title: "Health Neglect",
      subtitle: "Ignoring your body's warning signals.",
      score: "07/10",
    },
    {
      icon: "/icons/motional.png",
      title: "Time Mismanagement",
      subtitle: "Days pass, but progress feels stuck.",
      score: "05/10",
    },
    {
      icon: "/icons/minds.png",
      title: "Fear of Change",
      subtitle: "Comfort zone feels safe—but costly.",
      score: "06/10",
    },
    {
      icon: "/icons/culture.png",
      title: "Lost Identity",
      subtitle: "You're living by labels, not truth.",
      score: "03/10",
    },
    {
      icon: "/icons/fear.png",
      title: "Lack of Focus",
      subtitle: "Too many distractions, no clarity.",
      score: "06/10",
    },
    {
      icon: "/icons/idiot.png",
      title: "Low Self-Worth",
      subtitle: "Doubting your value and potential.",
      score: "04/10",
    }
  ];

  return (
    <section
      className="py-15 bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at left center, rgba(59,130,246,0.2), transparent 25%),
          radial-gradient(circle at right center, rgba(59,130,246,0.2), transparent 25%)
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 sm:w-4/5 md:w-3/5 mx-auto">
        <h1
          style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: "1",
          }}
          className="bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent text-center mb-10"
        >
          Category Definitions <br />
          and Scores
        </h1>

        <div className="bg-gray-900 rounded-2xl border-2 border-purple-500 shadow-lg p-6">
          <div className="w-full mb-6">
            <img
              src="/Rectangle-1.png"
              alt="Category"
              className="w-full h-auto"
            />
          </div>

          <div className="w-[95%] mx-auto space-y-6 py-4 sm:space-y-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <div>
                    <h2
                      style={{
                        fontFamily: "Ethnocentric",
                        fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                      }}
                      className="font-light text-white"
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "clamp(0.6rem, 2vw, .8rem)",
                      }}
                      className="text-gray-400"
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="sm:ml-auto flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getDotColor(item.score)}`}></div>
                  <span
                    style={{
                      fontFamily: "Ethnocentric",
                      fontSize: "clamp(1rem, 2.5vw, 1rem)", 
                    }}
                    className={`${getScoreColor(item.score)} font-light`}
                  >
                    {item.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
