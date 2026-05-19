import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons & Media | RCCG Praise Pavilion Parish",
  description: "Watch and listen to powerful sermons from RCCG Praise Pavilion Parish. Access our media library and stay connected.",
};

export default function SermonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
