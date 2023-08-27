import { ensureStartsWith } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black selection:bg-orange-500 dark:bg-neutral-900 dark:text-white selection:text-white">
        {children}
      </body>
    </html>
  );
}
