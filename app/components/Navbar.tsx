"use client";
import { usePathname } from "next/navigation";
import Tab from "./Tab";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between p-6 border-b border-foreground/10">
      <div className="flex gap-4">
        <h4 className="font-bold !opacity-100">Rachel Chen</h4>
        <h4 className="opacity-50">0{"->"}1 Design Engineer</h4>
      </div>
      <div className="flex gap-8">
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
  );
}
