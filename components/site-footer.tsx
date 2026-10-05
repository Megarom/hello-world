import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">C</span><span>CompanionLens</span></div>
          <p className="muted">Independent guides to AI companion and AI girlfriend services.</p>
        </div>
        <div className="footer-links">
          <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
          <Link href="/editorial-methodology">Methodology</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 CompanionLens</span>
        <span>Prices, features and policies can change. Verify before subscribing.</span>
      </div>
    </footer>
  );
}
