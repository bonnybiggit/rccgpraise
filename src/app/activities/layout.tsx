import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities | RCCG Praise Pavilion Parish",
  description: "Join us for our weekly activities and services. See our events, programs, and spiritual development initiatives.",
};

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
