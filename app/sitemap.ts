import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/#about", "/#skills", "/#projects", "/#experience", "/#contact"];

  return routes.map((route) => ({
    url: `https://sankalpkhatake.dev${route}`,
    lastModified: new Date(),
  }));
}
