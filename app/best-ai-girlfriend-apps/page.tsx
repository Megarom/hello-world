import Link from "next/link";
import { partners } from "@/lib/partners";

export const metadata = { title: "Best AI Girlfriend Apps & Sites in 2026" };

export default function BestAiGirlfriendApps() {
  return <section className="section"><div className="container prose">
    <div className="article-hero"><span className="kicker">Buyer guide</span><h1>Best AI Girlfriend Apps &amp; Sites in 2026</h1><p className="lead">There is no single best AI girlfriend for everyone. The useful question is: which service matches the way you want to interact?</p></div>
    <h2>Our starting shortlist</h2>
    <div className="grid-2">{partners.map((p, i) => <article className="article-card" key={p.slug}><span className="eyebrow">#{i+1} · {p.bestFor}</span><h3>{p.name}</h3><p>{p.description}</p><p><strong>Best for:</strong> {p.bestFor}</p><Link className="comparison-link" href={`/reviews/${p.slug}`}>Read the full review →</Link></article>)}</div>
    <h2>How to choose</h2>
    <ol><li><strong>Start with the relationship format.</strong> Some products are chat-first; others are visual-first.</li><li><strong>Check the generation model.</strong> If images or video matter, inspect how many generations or credits you actually receive.</li><li><strong>Read billing carefully.</strong> Compare the renewal price, not just a discounted equivalent monthly price.</li><li><strong>Read privacy and safety terms.</strong> These services may process unusually intimate conversations and generated media.</li></ol>
    <p><Link className="comparison-link" href="/guides/ai-companion-privacy">Read our privacy checklist →</Link></p>
  </div></section>;
}
