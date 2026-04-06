import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Daraja - Expense management for SMEs and startups",
  description:
    "Daraja is the expense management and financial operations platform for SMEs and startups. Track spending, approve expenses in real time, and stay compliant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full [color-scheme:light]">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} min-h-full bg-white text-[#0a0a0a] font-[var(--font-sans)] antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden before:fixed before:inset-0 before:-z-10 before:content-[''] before:bg-[radial-gradient(900px_600px_at_5%_-10%,rgba(245,245,244,0.9),transparent_60%),radial-gradient(800px_600px_at_90%_10%,rgba(238,238,236,0.7),transparent_55%),linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
