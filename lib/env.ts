const fallbackSanityDataset = "production";
const fallbackGitHubUsername = "sankalpkhatake07";
const fallbackContactEmail = "sankalpkhatake07@gmail.com";
const fallbackOpenAIModel = "gpt-4o-mini";

export const portfolioEnv = {
  sanityProjectId: process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  sanityDataset:
    process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? fallbackSanityDataset,
  sanityToken: process.env.SANITY_TOKEN ?? "",
  sanityStudioProjectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID ?? "",
  sanityStudioDataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET ?? fallbackSanityDataset,
  githubUsername: process.env.GITHUB_USERNAME ?? fallbackGitHubUsername,
  githubToken: process.env.GITHUB_TOKEN ?? "",
  openAIKey: process.env.OPENAI_API_KEY ?? "",
  openAIModel: process.env.OPENAI_MODEL ?? fallbackOpenAIModel,
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  contactToEmail: process.env.CONTACT_TO_EMAIL ?? fallbackContactEmail,
} as const;
