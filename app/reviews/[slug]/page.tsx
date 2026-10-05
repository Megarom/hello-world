import { notFound } from "next/navigation";
import Link from "next/link";
import { getPartner, partnerSlugs } from "@/lib/partners";

export function generateStaticParams() { return partnerSlugs.map((slug) => ({slug})); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const p = getPartner(slug);
  return p ? { title: `${p.name} Review: Features, Pricing & Affiliate Terms` } : {};
}

export default async function ReviewPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const p = getPartner(slug);
  if (!p) notFound();
  return <section className="section"><div className="container prose">
    <div className="breadcrumbs"><Link href="/">Home</Link> / Reviews / {p.name}</div>
    <span className="kicker">Independent profile</span><h1>{p.name} review</h1><p className="lead">{p.description}</p>
    <div className="hero-card" style={{margin: "26px 0"}}><div className="partner-topline"><span className="pill">Best for: {p.bestFor}</span><span className="commission">Affiliate: {p.commission}</span></div><div className="tag-row">{p.features.map(f => <span className="tag" key={f}>{f}</span>)}</div><Link className="btn btn-primary" href={`/go/${p.slug}`} rel="sponsored nofollow">Visit {p.name}</Link><p className="muted small" style={{marginTop: 12}}>This button may use an affiliate link once the site's partner URL is configured.</p></div>
    <h2>What it is</h2><p>{p.description}</p>
    <h2>What stands out</h2><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
    <h2>Commercial terms</h2><ul>{p.notes.map(n => <li key={n}>{n}</li>)}</ul>
    <h2>What we would verify before recommending it</h2><p>Actual current subscription price, renewal price, credit consumption, image/video limits, cancellation flow, privacy policy, moderation rules and the quality of the free tier. Those details can change and should be verified against the provider before purchase.</p>
    <div className="notice"><strong>Editorial note:</strong> this MVP does not claim hands-on testing. We distinguish public product information from firsthand tests and will label tested reviews separately.</div>
  </div></section>;
}
