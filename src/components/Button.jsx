"use client";

import Link from "next/link";
import Image from "next/image";

export default function Button({
  href = "/",
  text = "",
  img = "",
  width = 140,
  height = 60,
  onClick,
  disabled = false,
}) {
  const buttonContent = (
    <div className="relative inline-block rounded-lg shadow overflow-hidden" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={img}
        alt="Button BG"
        fill
        className="object-cover"
      />
      <span style={{
          fontFamily: "Ethnocentric",
          fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
        }} className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm sm:text-lg z-10">
        {text}
      </span>
    </div>
  );

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative inline-block rounded-lg shadow overflow-hidden ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Image
          src={img}
          alt="Button BG"
          fill
          className="object-cover"
        />
        <span style={{
            fontFamily: "Ethnocentric",
            fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
          }} className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm sm:text-lg z-10">
          {text}
        </span>
      </button>
    );
  }

  // Otherwise render as Link
  return (
    <div>
      <Link
        href={href}
        className="relative inline-block rounded-lg shadow overflow-hidden"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {buttonContent}
      </Link>
    </div>
  );
}
