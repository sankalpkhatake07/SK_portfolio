import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 py-10">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00D4FF]/80 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} Sankalp Khatake. Crafted for the AI future.</p>
          <div className="flex items-center gap-4">
            <Link href="#about" className="hover:text-white">About</Link>
            <Link href="#projects" className="hover:text-white">Projects</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/sankalpkhatake07" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2 hover:border-[#00D4FF] hover:text-[#00D4FF]"><Github className="size-4" /></a>
            <a href="https://linkedin.com/in/sankalp-khatake" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2 hover:border-[#00D4FF] hover:text-[#00D4FF]"><Linkedin className="size-4" /></a>
            <a href="mailto:sankalpkhatake07@gmail.com" className="rounded-full border border-white/20 p-2 hover:border-[#00D4FF] hover:text-[#00D4FF]"><Mail className="size-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
