import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Provider from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LOL-APP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black py-24`}
      >
        <Provider>
          <header className="bg-primary text-white py-4 w-full fixed top-0 z-10">
            <nav className="container mx-auto flex justify-around">
              <Link href="/">홈</Link>
              <Link href="/champions">챔피언 목록</Link>
              <Link href="/items">아이템 목록</Link>
              <Link href="/rotation">챔피언 로테이션</Link>
            </nav>
          </header>
          <main className="container mx-auto px-4 lg:px-0">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
