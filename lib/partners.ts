export type Partner = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  affiliateUrl: string;
  commission: string;
  model: string;
  bestFor: string;
  features: string[];
  notes: string[];
};

// Replace the affiliateUrl values below with your personal tracking URLs
// after your affiliate applications are approved. Keep all outbound links
// centralized here so the rest of the site never needs editing.
export const partners: Partner[] = [
  {
    slug: "kupid-ai",
    name: "Kupid AI",
    tagline: "A highly visual AI girlfriend platform with strong customization.",
    description:
      "Kupid focuses on customizable AI companions, realistic conversations and a creator-friendly experience. It is a strong candidate for readers who care about realism and personalization.",
    website: "https://www.kupid.ai/",
    affiliateUrl: "https://www.kupid.ai/",
    commission: "45% lifetime recurring",
    model: "Revenue share",
    bestFor: "Realism + customization",
    features: ["Custom companions", "Chat", "Image generation", "Personalization"],
    notes: [
      "Official affiliate materials advertise 45% lifetime recurring commissions.",
      "The affiliate page currently highlights creator support and long attribution.",
    ],
  },
  {
    slug: "ourdream-ai",
    name: "OurDream AI",
    tagline: "Visual-first AI companions with image and video generation.",
    description:
      "OurDream is especially relevant for users who want an AI companion experience built around generated visuals as well as chat.",
    website: "https://ourdream.ai/",
    affiliateUrl: "https://ourdream.ai/",
    commission: "Up to 40% RevShare or up to $70 CPA",
    model: "RevShare + CPA",
    bestFor: "Images + video",
    features: ["Companion chat", "Image generation", "Video generation", "Character creation"],
    notes: [
      "The affiliate program currently publishes both recurring RevShare and CPA tiers.",
      "Payout terms and tier levels should be rechecked before publishing hard numbers in articles.",
    ],
  },
  {
    slug: "ai-girl",
    name: "AI Girl",
    tagline: "AI characters with a simple recurring partner model.",
    description:
      "AI Girl offers customizable AI characters and a partner program built around revenue share, making it useful for publishers testing long-term recurring affiliate income.",
    website: "https://aigirl.one/",
    affiliateUrl: "https://aigirl.one/",
    commission: "50% revenue share",
    model: "Revenue share",
    bestFor: "Affiliate economics",
    features: ["AI characters", "Chat", "Customization", "Partner dashboard"],
    notes: [
      "The official partner page currently advertises 50% revenue share and monthly payouts in TON.",
      "Crypto payout mechanics should be explained clearly to readers before they sign up.",
    ],
  },
  {
    slug: "flirti",
    name: "Flirti",
    tagline: "A broad AI companion catalogue with flexible affiliate options.",
    description:
      "Flirti is aimed at people browsing large numbers of AI companions, while its affiliate program offers a choice between recurring revenue share and one-time CPA.",
    website: "https://adflirti.com/",
    affiliateUrl: "https://adflirti.com/",
    commission: "40% lifetime RevShare or $40–$60 CPA",
    model: "RevShare + CPA",
    bestFor: "Recurring vs CPA testing",
    features: ["Large companion catalogue", "Chat", "Multiple personas", "Affiliate dashboard"],
    notes: [
      "The partner page currently advertises 40% lifetime RevShare or a CPA model.",
      "Weekly payout timing and minimum withdrawal can change, so verify inside the partner dashboard.",
    ],
  },
  {
    slug: "secrets-ai",
    name: "Secrets AI",
    tagline: "A private AI companion experience with image and video generation.",
    description:
      "Secrets AI is a strong reference point for realistic AI companion experiences and multimodal generation. The platform is intended for adults and publishes detailed safety policies.",
    website: "https://www.secrets.ai/",
    affiliateUrl: "https://www.secrets.ai/",
    commission: "40% RevShare",
    model: "Revenue share",
    bestFor: "Realistic companion experience",
    features: ["Companion chat", "Image generation", "Video generation", "Personas"],
    notes: [
      "The official affiliate page currently advertises a 40% RevShare offer.",
      "Secrets AI states that its service is for adults 18+ and publishes safety and moderation policies.",
    ],
  },
];

export function getPartner(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}

export const partnerSlugs = partners.map((partner) => partner.slug);
