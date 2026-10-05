import Link from "next/link";
import { partners } from "@/lib/partners";
import { PartnerCard } from "@/components/partner-card";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="kicker">Independent AI companion guide</span>
            <h1>Find the AI girlfriend that actually fits you.</h1>
            <p className="lead">Compare realistic AI girlfriend and companion services by what matters: chat quality, customization, image/video generation, pricing, privacy and affiliate-backed offers.</p>
            <div className="card-actions" style={{marginTop: 24}}>
              <Link className="btn btn-primary" href="/best-ai-girlfriend-apps">See the best options</Link>
              <Link className="btn btn-secondary" href="/affiliate-programs">Explore affiliate programs</Link>
            </div>
            <p className="muted small" style={{marginTop: 14}}>18+ only. Some providers offer adult-oriented features.</p>
          </div>
          <div className="hero-card">
            <span className="pill">What we compare</span>
            <h3 style={{marginTop: 14}}>A buyer-first framework</h3>
            <div className="metric-grid">
              <div className="metric"><strong>01</strong><span className="muted">Realism &amp; personality</span></div>
              <div className="metric"><strong>02</strong><span className="muted">Images &amp; video</span></div>
              <div className="metric"><strong>03</strong><span className="muted">Pricing &amp; limits</span></div>
              <div className="metric"><strong>04</strong><span className="muted">Privacy &amp; policy</span></div>
            </div>
            <p className="muted small" style={{marginTop: 18}}>We separate product facts from commercial terms and disclose affiliate relationships.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><span className="kicker">Current shortlist</span><h2>AI girlfriend sites worth investigating</h2></div><Link className="comparison-link" href="/ai-girlfriend-sites">View all →</Link></div>
          <div className="grid-3">{partners.map((partner) => <PartnerCard key={partner.slug} partner={partner} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="feature-card"><span className="eyebrow">For buyers</span><h3>Best AI girlfriend apps</h3><p>Start with a practical shortlist instead of scrolling through dozens of near-identical tools.</p><Link className="comparison-link" href="/best-ai-girlfriend-apps">See the shortlist →</Link></div>
          <div className="feature-card"><span className="eyebrow">For creators</span><h3>AI girlfriend affiliate programs</h3><p>See which programs currently advertise recurring revenue share or CPA offers.</p><Link className="comparison-link" href="/affiliate-programs">See affiliate terms →</Link></div>
          <div className="feature-card"><span className="eyebrow">Before you subscribe</span><h3>Privacy &amp; billing</h3><p>Intimate conversations create different privacy questions. Read the checklist before paying.</p><Link className="comparison-link" href="/guides/ai-companion-privacy">Read the guide →</Link></div>
        </div>
      </section>
    </>
  );
}
