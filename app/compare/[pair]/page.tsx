import { notFound } from "next/navigation";
import Link from "next/link";
import { getPartner, partners } from "@/lib/partners";

const allowed = ["kupid-ai-vs-ourdream-ai", "secrets-ai-vs-kupid-ai", "ai-girl-vs-flirti"];
export function generateStaticParams() { return allowed.map(pair => ({pair})); }
export const dynamicParams = false;

export async function generateMetadata({params}:{params:Promise<{pair:string}>}) {
  const {pair}=await params; const parts=pair.split("-vs-");
  const a=getPartner(parts[0]); const b=getPartner(parts[1]);
  return a&&b ? {title:`${a.name} vs ${b.name}: Which AI Girlfriend Is Better?`} : {};
}

export default async function ComparePage({params}:{params:Promise<{pair:string}>}) {
  const {pair}=await params; if(!allowed.includes(pair)) notFound();
  const [aSlug,bSlug]=pair.split("-vs-"); const a=getPartner(aSlug), b=getPartner(bSlug); if(!a||!b) notFound();
  return <section className="section"><div className="container">
    <div className="article-hero"><span className="kicker">Side-by-side comparison</span><h1>{a.name} vs {b.name}</h1><p className="lead">A practical comparison focused on the buying questions that matter most: format, visuals, customization and affiliate economics.</p></div>
    <div className="table-wrap"><table><thead><tr><th>Factor</th><th>{a.name}</th><th>{b.name}</th></tr></thead><tbody>
      <tr><td>Best for</td><td>{a.bestFor}</td><td>{b.bestFor}</td></tr>
      <tr><td>Model</td><td>{a.model}</td><td>{b.model}</td></tr>
      <tr><td>Affiliate offer</td><td>{a.commission}</td><td>{b.commission}</td></tr>
      <tr><td>Core features</td><td>{a.features.join(", ")}</td><td>{b.features.join(", ")}</td></tr>
    </tbody></table></div>
    <div className="grid-2" style={{marginTop:20}}>
      <div className="feature-card"><span className="eyebrow">{a.name}</span><h3>Why look at it</h3><p>{a.description}</p><Link className="comparison-link" href={`/reviews/${a.slug}`}>Open review →</Link></div>
      <div className="feature-card"><span className="eyebrow">{b.name}</span><h3>Why look at it</h3><p>{b.description}</p><Link className="comparison-link" href={`/reviews/${b.slug}`}>Open review →</Link></div>
    </div>
    <div className="notice" style={{marginTop:24}}>Winner depends on the use case. Before publishing a strong recommendation, add your own dated tests for image consistency, chat memory, billing, cancellation and privacy.</div>
  </div></section>;
}
