// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000";

  const now = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" },
    { path: "/producer", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/artists", priority: 0.8, changeFrequency: "weekly" },
    {
      path: "/artist-development",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/artist-development/apply",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      path: "/recording-studio-san-antonio",
      priority: 1,
      changeFrequency: "weekly",
    },
    { path: "/book", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}