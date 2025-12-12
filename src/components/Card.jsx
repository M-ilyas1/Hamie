"use client";

export default function Card({ img, title, desc }) {
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-900 p-0.5 w-full flex"
      style={{
        clipPath:
          "polygon(70px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 75px)",
      }}
    >
      <div
        className="bg-black/80 w-full flex flex-col items-center text-center text-white p-4"
        style={{
          clipPath:
            "polygon(70px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 75px)",
        }}
      >
        <div
          className="bg-gray-600/20 h-full"
          style={{
            clipPath:
              "polygon(70px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 75px)",
          }}
        >
          <img src={img} alt={title} className="mb-4" />
          <h3
            style={{ fontFamily: "Ethnocentric" }}
            className="text-xl sm:text-2xl font-medium mb-2 md:p-4 p-2 text-gray-200"
          >
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 md:p-4 p-2">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
