import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Head from "next/head";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Treasury",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={dmSans.className}>
        <Hero />
        <main className="px-4 sm:px-16 lg:px-40 bg-[#131b22]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
