import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upenya | Professional Training Marketplace",
  description: "Find and book professional corporate trainers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
