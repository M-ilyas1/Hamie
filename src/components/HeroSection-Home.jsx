"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection({ quizData }) {
    return (
        <section
            className="relative bg-black flex justify-center items-center text-white py-10 px-4 sm:px-6 lg:px-12"
            style={{
                backgroundImage: "url('/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70"></div>

            <div className="relative flex flex-col items-center z-10 text-center max-w-6xl mx-auto">
                <h2
                    style={{
                        fontFamily: "Ethnocentric",
                        fontSize: "clamp(1rem, 2.5vw, 1.7rem)",
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent"
                >
                    Your Entrapment type is:
                </h2>

                <h1
                    style={{
                        fontFamily: "Ethnocentric",
                        fontSize: "clamp(2rem, 8vw, 5rem)",
                        lineHeight: "1.1",
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text my-3 text-transparent"
                >
                    Let's Find Out!
                </h1>

                <div className="mt-6 mb-4">
                    <Button
                        text="Take Quiz Now"
                        img="/long-button.png"
                        width={220}
                        height={50}
                        onClick={() => {
                            window.location.href = "/hamie-quiz";
                        }}
                    />
                </div>

                <div>
                    <img
                        src="/large-character.png"
                        alt="Character"
                        className="relative z-10 w-40 sm:w-52 md:w-72 lg:w-96 xl:w-[28rem] drop-shadow-2xl mx-auto mt-6"
                    />
                </div>
            </div>
        </section>
    );
}
