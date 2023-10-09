import Navigation from "@/components/navigation";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rachel Chen's Portfolio",
  description: "Welcome to my tech space.",
  icons: "/rachelchenfavicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rachelchenfavicon.ico" sizes="any" />
      </head>
      <body className={manrope.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
