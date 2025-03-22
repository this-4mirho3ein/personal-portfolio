import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer",
  description:
    "Personal portfolio showcasing my work and skills as a Frontend Developer.",
  keywords: [
    "portfolio",
    "frontend",
    "developer",
    "react",
    "nextjs",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "John Doe" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900 dark:text-white bg-white dark:bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
