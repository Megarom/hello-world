import Link from "next/link";

const guides: Record<string,{title:string; kicker:string; intro:string; sections:Array<{h:string;p:string}>}> = {
  "ai-companion-privacy": {
    title: "AI Companion Privacy: 9 Things to Check Before You Subscribe",
    kicker: "Privacy guide",
    intro: "AI companions can process unusually personal conversations and generated media. Before subscribing, read the privacy policy with the same care you would use for any service handling sensitive personal information.",
    sections: [
      {h:"1. What gets stored?",p:"Look for retention language covering chats, prompts, images, voice data, account information and payment records."},
      {h:"2. Are conversations used for training?",p:"Check whether your conversations can be used for model improvement, human review or analytics, and whether you can opt out."},
      {h:"3. Can you delete your data?",p:"Find the account deletion process, retention exceptions and the distinction between deleting an account and deleting backups."},
      {h:"4. Where is the company located?",p:"The operator's jurisdiction affects the legal framework around data requests and consumer rights."},
      {h:"5. What happens to generated media?",p:"Generated images and videos may be stored separately from chat history. Read the relevant terms rather than assuming deletion is automatic."},
      {h:"6. How is billing described?",p:"Check the billing descriptor, renewal frequency, cancellation flow and refund policy before using a payment card."},
      {h:"7. Does the service have an adult age policy?",p:"For adult-oriented services, verify the minimum age and the provider's rules around prohibited content. Do not assume a fictional avatar removes all policy obligations."},
      {h:"8. Are real people allowed?",p:"Pay close attention to policies covering likeness, impersonation and non-consensual intimate content."},
      {h:"9. Keep your own boundaries",p:"Avoid entering secrets, passwords, financial information or identifying information you would not want processed by a third-party service."},
    ],
  },
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; return guides[slug] ? {title: guides[slug].title} : {}; }
export function generateStaticParams(){ return Object.keys(guides).map(slug=>({slug})); }
export const dynamicParams=false;

export default async function GuidePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const guide=guides[slug]; if(!guide) return <section className="section"><div className="container"><h1>Guide not found</h1><Link href="/">Back home</Link></div></section>;
  return <section className="section"><div className="container prose"><span className="kicker">{guide.kicker}</span><h1>{guide.title}</h1><p className="lead">{guide.intro}</p>{guide.sections.map(s=><section key={s.h}><h2>{s.h}</h2><p>{s.p}</p></section>)}<div className="notice"><strong>Last reviewed:</strong> October 2026. Provider policies can change; re-check the official terms before sharing personal information or subscribing.</div></div></section>;
}
