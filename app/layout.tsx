import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adult 101 — practical life skills school skipped",
    template: "%s · Adult 101",
  },
  description:
    "A free hub of short lessons on money, renting, car insurance, wills, and starting a business. Education, not legal or financial advice.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
