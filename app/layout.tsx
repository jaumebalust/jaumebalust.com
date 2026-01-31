import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaume Balust — Full Stack Developer",
  description:
    "Full Stack Developer since 2015. Industrial Engineer turned developer. TypeScript, React, Next.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0f] text-[#e4e4ed] antialiased`}>
        {children}
      </body>
    </html>
  );
}
