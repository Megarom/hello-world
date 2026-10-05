import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">C</span>
          <span>CompanionLens</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/best-ai-girlfriend-apps">Best Apps</Link>
          <Link href="/ai-girlfriend-sites">Sites</Link>
          <Link href="/affiliate-programs">Affiliate Programs</Link>
          <Link href="/guides/ai-companion-privacy">Privacy Guide</Link>
        </nav>
      </div>
      <div className="age-strip">
        <div className="container">18+ audience. Some reviewed services may include adult-oriented features. Always check the provider's current age requirements and policies.</div>
      </div>
    </header>
  );
}
