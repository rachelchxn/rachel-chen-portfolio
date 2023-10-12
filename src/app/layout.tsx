import Navigation from "@/components/navigation";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/footer";
import Head from "next/head";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rachel <-> Chen",
  description: "Welcome to my tech space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/rachelchenfavicon.ico" />
        <title>Rachel Chen's Portfolio</title>
        <meta name="description" content="Welcome to my tech space." />
      </Head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
