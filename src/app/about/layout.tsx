import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RCCG Praise Pavilion Parish",
  description: "Learn about RCCG Praise Pavilion Parish - Our mission, vision, and commitment to explosive growth and soul winning.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
