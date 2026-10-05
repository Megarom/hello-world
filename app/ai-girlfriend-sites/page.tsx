import { partners } from "@/lib/partners";
import { PartnerCard } from "@/components/partner-card";

export const metadata = { title: "AI Girlfriend Sites: Compare the Best Options in 2026" };

export default function AiGirlfriendSites() {
  return <section className="section"><div className="container">
    <div className="article-hero"><span className="kicker">Directory</span><h1>AI Girlfriend Sites</h1><p className="lead">A practical directory of AI girlfriend and AI companion platforms. We focus on the features buyers actually compare: realism, customization, images, video, chat, price and policy.</p></div>
    <div className="notice"><strong>How to use this page:</strong> start with the category that matters most to you, then open the full review. Prices, credits and content policies can change quickly.</div>
    <div className="grid-2" style={{marginTop: 24}}>{partners.map((partner) => <PartnerCard key={partner.slug} partner={partner} />)}</div>
  </div></section>;
}
