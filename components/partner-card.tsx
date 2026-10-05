import Link from "next/link";
import { Partner } from "@/lib/partners";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="partner-card">
      <div className="partner-topline">
        <span className="eyebrow">{partner.bestFor}</span>
        <span className="commission">{partner.commission}</span>
      </div>
      <h3>{partner.name}</h3>
      <p>{partner.tagline}</p>
      <div className="tag-row">
        {partner.features.slice(0, 4).map((feature) => <span className="tag" key={feature}>{feature}</span>)}
      </div>
      <div className="card-actions">
        <Link className="btn btn-secondary" href={`/reviews/${partner.slug}`}>Read review</Link>
        <Link className="btn btn-primary" href={`/go/${partner.slug}`} rel="sponsored nofollow">Visit site</Link>
      </div>
    </article>
  );
}
