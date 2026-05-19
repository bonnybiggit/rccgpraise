import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "RCCG Praise Pavilion Parish | Zonal Headquarters",
  description: "Welcome to RCCG Praise Pavilion Parish - A place of explosive growth and soul winning. Join us for a life-transforming worship experience.",
  keywords: ["RCCG", "Praise Pavilion", "Church Lagos", "Redeemed Christian Church of God", "Ifako Ijaiye", "Christian Worship"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
