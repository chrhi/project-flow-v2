import { ensureStartsWith } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black selection:bg-yellow-500 dark:bg-neutral-900 dark:text-white selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
