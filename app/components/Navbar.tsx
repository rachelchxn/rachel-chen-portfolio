"use client";
import { usePathname } from "next/navigation";
import Tab from "./Tab";
import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center p-6 border-b border-foreground/10 relative">
      <div className="flex items-center justify-between w-full max-w-[1600px]">
        <div className="flex flex-col sm:flex-row sm:inline-flex sm:gap-4 gap-0">
          <h4 className="font-bold !opacity-100">Rachel Chen</h4>
          <h4 className="opacity-50 flex items-center gap-0">
            0
            <span>
              <Image
                src={"/arrow-right.svg"}
                alt="Right"
                width={18}
                height={18}
              />
            </span>
            1 Design Engineer
          </h4>
        </div>
        <div className="md:flex hidden gap-8">
          <Tab href="/" active={pathname === "/"}>
            Work
          </Tab>

          <Tab href="/projects" active={pathname === "/projects"}>
            Fun
          </Tab>
          <Tab href="/about" active={pathname === "/about"}>
            About
          </Tab>
          <Tab href="/resume">Resume</Tab>
        </div>
        <div className="md:hidden flex gap-4">
          <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <div
            className={`
            absolute left-0 z-10 top-[100%] p-6 border-b border-foreground/10 w-full bg-background
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
          >
            <div className="flex flex-col gap-4">
              <Tab href="/" active={pathname === "/"}>
                Work
              </Tab>
              <Tab href="/projects" active={pathname === "/projects"}>
                Fun
              </Tab>
              <Tab href="/about" active={pathname === "/about"}>
                About
              </Tab>
              <Tab href="/resume">Resume</Tab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
