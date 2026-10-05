import type { MetadataRoute } from "next";
import { partnerSlugs } from "@/lib/partners";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://companion-lens.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/ai-girlfriend-sites", "/best-ai-girlfriend-apps", "/affiliate-programs", "/guides/ai-companion-privacy", "/affiliate-disclosure", "/editorial-methodology", "/about", "/privacy"];
  const reviewPaths = partnerSlugs.map(slug => `/reviews/${slug}`);
  const comparePaths = ["/compare/kupid-ai-vs-ourdream-ai", "/compare/secrets-ai-vs-kupid-ai", "/compare/ai-girl-vs-flirti"];
  return [...staticPaths, ...reviewPaths, ...comparePaths].map(path => ({ url: `${base}${path}`, lastModified: new Date("2026-10-05"), changeFrequency: path.includes("reviews") || path.includes("compare") ? "monthly" : "weekly", priority: path === "/" ? 1 : 0.7 }));
}
