"use client";
import Tab from "./Tab";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center p-6 border-t border-foreground/10">
      <div className="flex flex-col max-w-[1600px] md:flex-row w-full items-start md:items-center justify-between gap-6">
        <div className="flex gap-2">
          <span>
            <h4 className="font-bold flex items-center gap-2">
              Designed + Coded with{" "}
            </h4>
          </span>
          <span>
            <Image src="/home/heart.svg" alt="heart" width={24} height={24} />
          </span>
          <span>
            <h4>by Rachel Chen</h4>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-8">
          <Tab href="https://www.linkedin.com/in/rachel-jiayi-chen/">
            Linkedin
          </Tab>
          <button
            onClick={() => {
              navigator.clipboard.writeText("rachelc0715@gmail.com");
            }}
            data-cursor="email"
            className="hover:!opacity-100 opacity-60 text-foreground font-mono font-medium text-start"
          >
            EMAIL
          </button>
          <Tab href="https://x.com/racheljychen">X</Tab>
          <Tab href="https://github.com/rachelchxn">Github</Tab>
          <Tab href="https://devpost.com/rachelc0715">Devpost</Tab>
        </div>
      </div>
    </footer>
  );
}
