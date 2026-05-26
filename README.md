<<<<<<< HEAD
# Sankalp Khatake — Ultra Pro Portfolio

## 🚀 Features
- **3D Animated Hero Orb** (Three.js) with orbital rings, particle cloud, orbiting spheres
- **Live Particle Network** background with connecting lines
- **Custom Cursor** with smooth trailing effect
- **Typewriter Role Animation**
- **Animated Counters** (triggered on scroll)
- **Skill Filter Tabs** with smooth transitions
- **3D Card Tilt** on projects and certificates
- **Scroll Progress Bar**
- **Shimmer animations** on certificate cards
- **Timeline with pulsing dots** for experience
- **Mobile Responsive** with hamburger menu
- **Preloader** with progress bar
- **Contact Form** with success animation

## 📁 Structure
```
portfolio-ultra/
├── index.html        ← Main HTML
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← All JavaScript + Three.js
└── README.md
```

## 🖼️ Adding Certificate Images
Inside `index.html`, find each `.cert-card` block.
Replace the `.cc-visual` div content with:
```html
<img src="your-cert-image.jpg" style="width:100%; height:140px; object-fit:cover;" />
```

## 🎨 Color Scheme
| Color  | Hex       | Usage                  |
|--------|-----------|------------------------|
| Cyan   | `#00FFD1` | Primary accent, glow   |
| Blue   | `#0066FF` | Secondary, skills      |
| Purple | `#7B2FFF` | Accent, stack tags     |
| Orange | `#FF6B35` | Copyrights, highlights |
| Dark   | `#020B18` | Background             |

## 🌐 How to Run
Simply open `index.html` in any modern browser.
No build step needed — everything is self-contained.

## ✏️ Customization
- Edit data in `index.html` directly
- Color variables in `css/style.css` under `:root {}`
- Three.js orb settings in `js/main.js` in the hero orb section
=======
# Sankalp Khatake Portfolio

A premium futuristic AI engineer portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Three.js, React Three Fiber, Sanity, OpenAI, LangChain, and Resend.

## Features

- Cyberpunk glassmorphism UI with neon blue and purple gradients
- 3D AI orb and particle-driven hero scene
- Animated loading screen, scroll progress, and smooth Lenis scrolling
- Dark/light mode toggle
- GitHub API integration for live profile and repository data
- Sanity-backed projects CMS with API fallback
- OpenAI + LangChain AI assistant widget
- Resend-powered contact email API
- Fully responsive, mobile-first layout
- SEO metadata and social cards
- Production-ready component architecture for Vercel deployment

## Project Structure

- `app/` Next.js App Router routes, API handlers, layout, and page shell
- `components/` reusable UI, layout, effect, assistant, GitHub, three.js, and section components
- `data/site.ts` structured portfolio content and fallback data
- `sanity/` Sanity schema and config stubs for the project CMS
- `public/` static assets including the resume PDF

## Local Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Add these to `.env.local` for full production features:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_TOKEN=your_sanity_token

GITHUB_USERNAME=sankalpkhatake07
GITHUB_TOKEN=your_optional_github_token

OPENAI_API_KEY=your_openai_key
OPENAI_MODEL=gpt-4o-mini

RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=sankalpkhatake07@gmail.com
```

If an environment variable is missing, the app falls back gracefully to local data or a mock response.

The app also accepts `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` for the Studio config.

## Enabling Interactive Features (Quick)

1. Copy `.env.local.example` to `.env.local` and fill in your API keys and IDs.

2. Restart the dev server:

```bash
npm run dev
```

3. Interactive features enabled when keys are present:
- Sanity projects will be read from `/api/projects` when Sanity is configured.
- GitHub data (profile/repos) will use `GITHUB_USERNAME` and `GITHUB_TOKEN` for higher rate limits.
- The AI Assistant will call OpenAI when `OPENAI_API_KEY` is set; otherwise it returns a safe fallback.
- Contact form will send real emails via Resend when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set; otherwise it returns a mock success response.

4. If you use the dev server from another device on your LAN, set `ALLOWED_DEV_ORIGINS` in `.env.local` (comma-separated) or the default `http://localhost:3000,http://127.0.0.1:3000` will be used.

## Verifying Interactive Integrations

- Sanity: visit `/api/projects` in the browser; if it returns your Sanity data the CMS connection is live.
- GitHub: visit `/api/github`; it returns the public profile and repo list. If rate-limited, add `GITHUB_TOKEN`.
- OpenAI: use the assistant UI; with `OPENAI_API_KEY` set the assistant will produce model responses.
- Resend: submit the contact form and check the destination mailbox.

If you want, I can guide you to generate the required API keys and walk through adding them securely.

## Sanity CMS

The Sanity schema lives in `sanity/schemaTypes/`. To publish projects dynamically:

1. Create a Sanity project and dataset.
2. Add project documents using the `project` schema.
3. Set the Sanity environment variables above.
4. The portfolio will read from `/api/projects` and fall back to local project data if Sanity is unavailable.

## Deployment

- Build locally with `npm run build`
- Deploy to Vercel
- Configure the environment variables in Vercel project settings
- Point your custom domain to the Vercel deployment

## Notes

- The resume PDF is available at `/SK_GEN_UPDATED_03.pdf`.
- The AI assistant is safe to leave enabled without OpenAI credentials; it will show a fallback reply until the API key is configured.
- The contact form uses the Resend API route and will return a mock success response if `RESEND_API_KEY` is absent.
>>>>>>> 555ba9720307c412fbb22079e1775a0393043dde
