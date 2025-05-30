import type { Metadata } from "next";
import { Crimson_Pro, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const crimsonProItalic = Crimson_Pro({
  variable: "--font-crimson-pro-italic",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const tiemposText = localFont({
  src: [
    {
      path: "../app/fonts/TiemposText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/TiemposText-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tiempos-text",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Rachel Chen",
  description: "0→1 Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} ${crimsonProItalic.variable} ${tiemposText.variable} antialiased custom-cursor custom-pointer font-[family-name:var(--font-geist-sans)]`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
