import type { MetadataRoute } from "next";
import { obras } from "../lib/obras";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    ...obras.map((obra) => ({
      url: `${baseUrl}/obras/${obra.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
