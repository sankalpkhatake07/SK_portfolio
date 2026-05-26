"use client";

import { useEffect, useState } from "react";
import { Github, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

type GitHubResponse = {
  profile: {
    bio?: string;
    followers?: number;
    public_repos?: number;
  } | null;
  repos: GitHubRepo[];
};

export function GitHubPanel() {
  const [data, setData] = useState<GitHubResponse | null>(null);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/github");
      const json = (await response.json()) as GitHubResponse;
      setData(json);
    };

    void load();
  }, []);

  return (
    <section className="mt-10 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9EEBFF]">GitHub Intelligence</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Live repository feed</h3>
        </div>
        <a
          href="https://github.com/sankalpkhatake07"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
        >
          <Github className="size-4 text-[#00D4FF]" /> Profile
        </a>
      </div>

      <p className="mt-3 text-sm text-white/70">
        {data?.profile?.bio ??
          "Pulling live repository data from the GitHub API to keep the portfolio current."}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Repos</p>
          <p className="mt-1 text-2xl font-bold text-white">{data?.profile?.public_repos ?? "--"}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Followers</p>
          <p className="mt-1 text-2xl font-bold text-white">{data?.profile?.followers ?? "--"}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">Live sync</p>
          <p className="mt-1 text-2xl font-bold text-[#00D4FF]">On</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {(data?.repos ?? []).slice(0, 4).map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#00D4FF] hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-semibold text-white">{repo.name}</h4>
              <span className="inline-flex items-center gap-1 text-xs text-white/65">
                <Star className="size-3.5 text-[#00D4FF]" /> {repo.stargazers_count}
              </span>
            </div>
            <p className="mt-2 max-h-10 overflow-hidden text-sm text-white/65">{repo.description ?? "No description provided."}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#9EEBFF]">
              {repo.language ?? "Unknown"}
            </p>
          </a>
        ))}
      </div>

      <Button asChild variant="ghost" className="mt-5 w-full">
        <a href="https://github.com/sankalpkhatake07" target="_blank" rel="noreferrer">
          View GitHub Activity
        </a>
      </Button>
    </section>
  );
}
