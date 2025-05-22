"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Tab({
  href,
  active = false,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();

  if (href.startsWith("https://")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:!opacity-100"
      >
        <h4
          className={`${
            active && "!text-primary !opacity-100 cursor-default"
          } cursor-pointer !opacity-100 hover:!text-foreground`}
        >
          {children}
        </h4>
      </a>
    );
  } else {
    return (
      <div onClick={() => router.push(href)}>
        <h4
          className={`${
            active
              ? "!text-primary !opacity-100 cursor-default"
              : "hover:!text-foreground"
          } cursor-pointer`}
          onClick={() => router.push(href)}
        >
          {children}
        </h4>
      </div>
    );
  }
}
