import { projects as fallbackProjects } from "@/data/site";
import { portfolioEnv } from "@/lib/env";

const projectQuery = `*[_type == "project"] | order(orderRank asc, _createdAt desc) {
  _id,
  title,
  description,
  stack,
  features,
  github,
  demo,
  imageUrl,
  liveUrl,
  orderRank
}`;

export async function GET() {
  const projectId = portfolioEnv.sanityProjectId;
  const dataset = portfolioEnv.sanityDataset;

  if (!projectId) {
    return Response.json({ projects: fallbackProjects, source: "fallback" });
  }

  try {
    const url = new URL(
      `https://${projectId}.api.sanity.io/v2023-08-01/data/query/${dataset}`
    );
    url.searchParams.set("query", projectQuery);

    const response = await fetch(url.toString(), {
      headers: portfolioEnv.sanityToken ? { Authorization: `Bearer ${portfolioEnv.sanityToken}` } : undefined,
    });

    if (!response.ok) {
      return Response.json({ projects: fallbackProjects, source: "fallback" });
    }

    const data = (await response.json()) as {
      result?: Array<{
        title?: string;
        description?: string;
        stack?: string[];
        features?: string[];
        github?: string;
        demo?: string;
        imageUrl?: string;
        liveUrl?: string;
      }>;
    };

    const projects =
      data.result?.map((item) => ({
        title: item.title ?? "Untitled Project",
        description: item.description ?? "No description provided.",
        stack: item.stack ?? [],
        features: item.features ?? [],
        github: item.github ?? "https://github.com",
        demo: item.demo ?? item.liveUrl ?? "#",
        imageUrl: item.imageUrl ?? null,
      })) ?? fallbackProjects;

    return Response.json({ projects, source: "sanity" });
  } catch {
    return Response.json({ projects: fallbackProjects, source: "fallback" });
  }
}
