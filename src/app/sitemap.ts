import { websiteUrl } from "@/config";
import { locales } from "@/navigation";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesWithLocations = locales.map((locale) => [
    {
      url: websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${websiteUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${websiteUrl}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${websiteUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${websiteUrl}/${locale}/uses`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${websiteUrl}/${locale}/guestbook`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ]);

  return pagesWithLocations.flat() as MetadataRoute.Sitemap;
}
