"use client";
import { usePathname } from "next/navigation";
import Tab from "./Tab";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between p-6 border-t border-foreground/10">
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
      <div className="flex gap-8">
        <Tab href="https://www.linkedin.com/in/rachel-jiayi-chen/">
          Linkedin
        </Tab>
        <Tab href="mailto:rachelc0715@gmail.com">Email</Tab>
        <Tab href="https://x.com/racheljychen">X</Tab>
        <Tab href="https://github.com/rachelchxn">Github</Tab>
        <Tab href="https://devpost.com/rachelc0715">Devpost</Tab>
      </div>
    </div>
  );
}
