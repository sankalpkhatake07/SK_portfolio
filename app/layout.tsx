import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientEffects } from "@/components/effects/client-effects";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { PageLoader } from "@/components/effects/page-loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sankalpkhatake.dev"),
  title: {
    default: "Sankalp Khatake | AI Engineer Portfolio",
    template: "%s | Sankalp Khatake",
  },
  description:
    "Futuristic AI Engineer portfolio of Sankalp Khatake featuring Generative AI, Computer Vision, IoT, and product-grade engineering.",
  keywords: [
    "Sankalp Khatake",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "Computer Vision",
    "IoT",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Sankalp Khatake | AI Engineer Portfolio",
    description:
      "Building intelligent AI systems with Generative AI, Computer Vision, IoT, and Edge Intelligence.",
    type: "website",
    url: "https://sankalpkhatake.dev",
    siteName: "Sankalp Khatake Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Khatake | AI Engineer Portfolio",
    description:
      "Building intelligent AI systems with Generative AI, Computer Vision, IoT, and Edge Intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white selection:bg-[#00D4FF]/30">
        <PageLoader />
        <ScrollProgress />
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
