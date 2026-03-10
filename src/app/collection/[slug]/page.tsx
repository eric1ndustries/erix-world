import { notFound } from "next/navigation";
import { getCaseBySlug, getAllSlugs } from "../../../lib/cases";
import BackNav from "./BackNav";
import CaseHero from "./CaseHero";
import CaseMeta from "./CaseMeta";
import CaseSections from "./CaseSections";
import NextCase from "./NextCase";
import ScrollRevealProvider from "../../components/ScrollRevealProvider";
import Cursor from "../../components/Cursor";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return { title: "Not Found" };
  return {
    title: `${c.title} — Erix`,
    description: c.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <ScrollRevealProvider>
      <Cursor />
      <BackNav title={c.title} />

      <main className="bg-ink text-bone">
        {/* Hero */}
        <CaseHero c={c} />

        {/* Summary band */}
        <div className="px-10 py-16 border-b border-bone/10 bg-bone/[0.02]">
          <div className="max-w-2xl">
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-accent mb-5">Overview</p>
            <p className="font-serif italic text-bone/60 leading-relaxed"
              style={{ fontSize: "clamp(15px, 1.6vw, 20px)" }}>
              {c.summary}
            </p>
          </div>
        </div>

        {/* Main content: sidebar + sections */}
        <div className="px-10 py-20 grid grid-cols-[200px_1fr] gap-16 items-start">
          <CaseMeta c={c} />
          <CaseSections sections={c.sections} />
        </div>

        {/* Next case */}
        <NextCase {...c.next} />
      </main>
    </ScrollRevealProvider>
  );
}
