export type CaseStudy = {
  slug: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  summary: string;
  role: string;
  duration: string;
  deliverables: string[];
  sections: Section[];
  next: { slug: string; title: string; num: string };
};

export type Section =
  | { type: "text"; heading: string; body: string }
  | { type: "stat-row"; stats: { label: string; value: string }[] }
  | { type: "image-full"; caption: string; accent: string }
  | { type: "image-split"; caption1: string; caption2: string; accent1: string; accent2: string }
  | { type: "pullquote"; quote: string };

export const cases: CaseStudy[] = [
  {
    slug: "visual-systems",
    num: "001",
    category: "Brand Identity / Motion",
    title: "VISUAL SYSTEMS",
    subtitle: "Building a modular identity that breathes",
    year: "2024",
    tags: ["Brand", "Motion", "Type"],
    summary:
      "A complete visual identity system for an independent media collective — built on geometric logic, variable type, and a motion grammar that scales from a favicon to a billboard.",
    role: "Creative Director & Designer",
    duration: "14 weeks",
    deliverables: ["Identity System", "Motion Guidelines", "Type Specimens", "Brand Book"],
    sections: [
      {
        type: "text",
        heading: "THE BRIEF",
        body: "The collective needed an identity that felt self-aware — one that could reference the history of graphic design without becoming nostalgic. The system had to work across print, digital, and moving image simultaneously, with zero compromise.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Touchpoints", value: "40+" },
          { label: "Type Weights", value: "6" },
          { label: "Motion Assets", value: "18" },
          { label: "Weeks", value: "14" },
        ],
      },
      {
        type: "image-full",
        caption: "Primary identity — constructed grid system",
        accent: "#8C1E77",
      },
      {
        type: "text",
        heading: "THE APPROACH",
        body: "Rather than starting with a logomark, we built the grid first. Every element — type, shape, spacing — derives from a single 12-column base unit. This gave us a system that could generate infinite compositions while remaining unmistakably coherent.",
      },
      {
        type: "image-split",
        caption1: "Colour field studies",
        caption2: "Type specimen — display weight",
        accent1: "#1a1614",
        accent2: "#141820",
      },
      {
        type: "pullquote",
        quote: "A system should be a constraint that feels like freedom.",
      },
      {
        type: "text",
        heading: "THE OUTCOME",
        body: "The identity launched across three cities simultaneously. Within six weeks, brand recognition in the target demographic jumped 34%. The motion system was later licensed to two partner organisations, validating the modular approach.",
      },
    ],
    next: { slug: "digital-release", title: "DIGITAL RELEASE", num: "002" },
  },
  {
    slug: "digital-release",
    num: "002",
    category: "Art Direction",
    title: "DIGITAL RELEASE",
    subtitle: "Launching an album in the attention economy",
    year: "2024",
    tags: ["Art Direction", "Campaign", "Digital"],
    summary:
      "Art direction for a full album rollout — from teaser visuals to release-day interactive experiences — coordinated across six platforms over eight weeks.",
    role: "Art Director",
    duration: "8 weeks",
    deliverables: ["Campaign Visuals", "Social Assets", "Microsite", "Press Kit"],
    sections: [
      {
        type: "text",
        heading: "THE BRIEF",
        body: "The artist wanted a rollout that felt like an event — something that built genuine anticipation without relying on algorithmic tricks. Every asset had to justify its existence.",
      },
      {
        type: "stat-row",
        stats: [
          { label: "Platforms", value: "6" },
          { label: "Assets", value: "120+" },
          { label: "Weeks", value: "8" },
          { label: "Reach", value: "2.4M" },
        ],
      },
      {
        type: "image-full",
        caption: "Hero campaign visual — release week",
        accent: "#2a1f1a",
      },
      {
        type: "pullquote",
        quote: "Every frame is a decision. Treat it like one.",
      },
      {
        type: "text",
        heading: "THE OUTCOME",
        body: "The campaign reached 2.4M people organically in the first 72 hours. The microsite saw 18-minute average session times — extraordinarily high for a music campaign. The press kit format was subsequently adopted as a template by the label.",
      },
    ],
    next: { slug: "visual-systems", title: "VISUAL SYSTEMS", num: "001" },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
