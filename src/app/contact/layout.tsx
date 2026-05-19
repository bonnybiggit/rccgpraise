import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RCCG Praise Pavilion Parish",
  description: "Get in touch with RCCG Praise Pavilion Parish. Find our location, contact information, and send us a message.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
