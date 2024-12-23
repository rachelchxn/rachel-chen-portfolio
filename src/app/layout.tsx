import "./globals.scss";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Rachel Chen",
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
        <title>Rachel Chen's Portfolio</title>
        <meta name="description" content="Welcome to my tech space." />
      </Head>
      <body>{children}</body>
    </html>
  );
}
