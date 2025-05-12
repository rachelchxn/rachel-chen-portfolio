"use client";

import React from "react";

export default function MenuIcon({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className="cursor-pointer hover:opacity-50"
    >
      <path
        className={`transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[2.5px]" : ""
        }`}
        d="M4 8H20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        className={`transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[3px]" : ""
        }`}
        d="M4 16H20"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
