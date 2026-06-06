import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/lib/guides";
import { GuideArticle } from "@/components/guides/GuideArticle";

const siteUrl = "https://tutelamtl.ca";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  return {
    title: `${g.title.zh} | Tutela`,
    description: g.description.zh,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      title: g.title.zh,
      description: g.description.zh,
      url: `/guides/${g.slug}`,
      type: "article",
    },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title.zh,
    description: g.description.zh,
    inLanguage: "zh-CN",
    datePublished: g.updated,
    dateModified: g.updated,
    author: { "@type": "Organization", name: "Tutela" },
    publisher: { "@type": "Organization", name: "Tutela" },
    mainEntityOfPage: `${siteUrl}/guides/${g.slug}`,
  };

  return (
    <>
      <GuideArticle guide={g} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026") }}
      />
    </>
  );
}
