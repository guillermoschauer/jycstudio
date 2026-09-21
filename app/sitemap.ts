import type { MetadataRoute } from "next";
import { SITE, getCaseSlugs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/casos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getCaseSlugs().map((slug) => ({
      url: `${SITE.url}/casos/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
