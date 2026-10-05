import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://companion-lens.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CompanionLens — AI Girlfriend & AI Companion Reviews",
    template: "%s | CompanionLens",
  },
  description:
    "Independent guides, comparisons and affiliate reviews of AI girlfriend and AI companion platforms.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CompanionLens — AI Girlfriend & AI Companion Reviews",
    description: "Compare AI companion apps by features, pricing, privacy and affiliate terms.",
    type: "website",
    siteName: "CompanionLens",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
