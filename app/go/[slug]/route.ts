import { NextResponse } from "next/server";
import { getPartner } from "@/lib/partners";

export async function GET(_: Request, { params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) return NextResponse.redirect(new URL("/", "https://companion-lens.vercel.app"));
  return NextResponse.redirect(partner.affiliateUrl, 307);
}
