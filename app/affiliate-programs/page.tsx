import { partners } from "@/lib/partners";

export const metadata = { title: "AI Girlfriend Affiliate Programs: Recurring & CPA Offers" };

export default function AffiliatePrograms() {
  return <section className="section"><div className="container">
    <div className="article-hero"><span className="kicker">Publisher guide</span><h1>AI Girlfriend Affiliate Programs</h1><p className="lead">For publishers, the most interesting offers in this niche are generally recurring revenue share or high-value CPA. The exact economics depend on retention, traffic quality and geography.</p></div>
    <div className="table-wrap"><table><thead><tr><th>Platform</th><th>Public offer</th><th>Model</th><th>Good fit for</th><th></th></tr></thead><tbody>{partners.map(p => <tr key={p.slug}><td><strong>{p.name}</strong></td><td>{p.commission}</td><td>{p.model}</td><td>{p.bestFor}</td><td><a className="comparison-link" href={p.affiliateUrl} target="_blank" rel="sponsored nofollow noopener">Official site ↗</a></td></tr>)}</tbody></table></div>
    <div className="notice" style={{marginTop: 20}}>Affiliate rates are commercial terms, not product quality scores. Verify the live terms inside each program before you publish exact payout claims.</div>
    <div className="prose" style={{marginTop: 34}}><h2>What matters more than the headline commission</h2><p>A 50% revenue share is meaningless if the product has poor conversion or weak retention. Track clicks, registrations, paid conversions, refund rate and revenue per visitor. For each program, keep a separate sheet for GEO, plan type, first purchase, rebills and payout threshold.</p></div>
  </div></section>;
}
