import { portfolioEnv } from "@/lib/env";

const username = portfolioEnv.githubUsername;

export async function GET() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (portfolioEnv.githubToken) {
    headers.Authorization = `Bearer ${portfolioEnv.githubToken}`;
  }

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 300 } }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&direction=desc`,
        { headers, next: { revalidate: 300 } }
      ),
    ]);

    const profile = profileResponse.ok ? await profileResponse.json() : null;
    const repos = reposResponse.ok ? await reposResponse.json() : [];

    return Response.json({
      username,
      profile,
      repos: Array.isArray(repos)
        ? repos.map((repo) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
          }))
        : [],
    });
  } catch {
    return Response.json({
      username,
      profile: null,
      repos: [],
    });
  }
}
