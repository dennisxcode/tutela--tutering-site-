import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

const siteUrl = "https://tutelamtl.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/program`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/guides`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...guides.map((g) => ({
      url: `${siteUrl}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
