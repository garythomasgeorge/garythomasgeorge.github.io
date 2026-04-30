// TODO: replace #TODO-* placeholders with real URLs before launch.
//   - #TODO-adk-hitl-medium  : Medium post for ADK HITL middleware
//   - #TODO-adk-hitl-github  : GitHub repo for ADK HITL middleware
//   - #TODO-cx-agent-medium  : Medium post for CX Agent Studio review
//   - #TODO-wordle-github    : GitHub repo for Customizable Wordle
//   - #TODO-fitbit-github    : GitHub repo for Fitbit Watchface
//   - #TODO-univault-app     : App Store URL for UniVault

export type ProjectType = "Enterprise" | "Personal" | "Open Source";

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  type: ProjectType;
  blurb: string;
  tags: string[];
  hasCaseStudy: boolean;
  featured?: boolean;
  links: ExternalLink[];
}

export const projects: Project[] = [
  {
    slug: "xfinity-assistant",
    name: "Xfinity Assistant — Comcast",
    type: "Enterprise",
    blurb:
      "Migrating Comcast's omnichannel virtual assistant to Google ADK and shipping generative AI features at scale.",
    tags: ["Google ADK", "CX Agent Studio", "Vertex AI", "Dialogflow", "Cloud Run"],
    hasCaseStudy: true,
    featured: true,
    links: [{ label: "Case Study", href: "/portfolio/xfinity-assistant" }],
  },
  {
    slug: "adk-hitl",
    name: "ADK Human-in-the-Loop Middleware",
    type: "Personal",
    blurb:
      "A pause-and-approve middleware for Google ADK agentic flows — open-source proof of concept.",
    tags: ["Google ADK", "Python", "Agentic Systems", "HITL"],
    hasCaseStudy: true,
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/google/adk-python-community/pull/110" },
      { label: "Read on Medium", href: "https://medium.com/@garythomasgeorge/why-google-adks-human-in-the-loop-story-has-a-production-gap-and-one-way-it-could-be-fixed-66aabef33a32" },
    ],
  },
  {
    slug: "cx-agent-studio",
    name: "CX Agent Studio Product Review",
    type: "Personal",
    blurb:
      "Independent product breakdown of Google CX Agent Studio — connecting enterprise patterns to ADK HITL concepts.",
    tags: ["CX Agent Studio", "Product Analysis", "Conversational AI"],
    hasCaseStudy: true,
    featured: true,
    links: [{ label: "Read on Medium", href: "https://medium.com/@garythomasgeorge/cx-agent-studio-the-evolution-of-googles-conversational-ai-stack-a-first-look-09d87a95a093" }],
  },
  {
    slug: "fedena-mobile",
    name: "Fedena Mobile App",
    type: "Enterprise",
    blurb:
      "0→1 launch of the Fedena Connect mobile app (Android + iOS) for school admins, parents, students, and teachers — drove a 30% adoption increase.",
    tags: ["Mobile", "Flutter", "Education SaaS", "0→1"],
    hasCaseStudy: true,
    links: [{ label: "Case Study", href: "/portfolio/fedena-mobile" }],
  },
  {
    slug: "gradebook",
    name: "Fedena Gradebook",
    type: "Enterprise",
    blurb:
      "Designed and launched the Gradebook module across 10+ countries — 20% retention lift, 15% sales growth.",
    tags: ["Education SaaS", "Product Design", "Internationalization"],
    hasCaseStudy: true,
    links: [{ label: "Case Study", href: "/portfolio/gradebook" }],
  },
  {
    slug: "univault",
    name: "UniVault Link Manager",
    type: "Personal",
    blurb:
      "iOS link manager app — save, organize, and revisit URLs with smart tagging.",
    tags: ["iOS", "Swift", "Personal Project"],
    hasCaseStudy: true,
    links: [{ label: "App Store", href: "#TODO-univault-app" }],
  },
  {
    slug: "wordle",
    name: "Customizable Wordle App",
    type: "Personal",
    blurb:
      "A Flutter clone of Wordle with custom word lists, difficulty modes, and themes.",
    tags: ["Flutter", "Dart", "Game"],
    hasCaseStudy: true,
    links: [{ label: "GitHub", href: "https://github.com/garythomasgeorge/daily_word_game" }],
  },
  {
    slug: "fitbit-watchface",
    name: "Custom Fitbit Watchface",
    type: "Personal",
    blurb:
      "A minimalist watchface built for the Fitbit SDK — daily goals, weather, and battery at a glance.",
    tags: ["Fitbit SDK", "JavaScript", "Wearables"],
    hasCaseStudy: true,
    links: [{ label: "GitHub", href: "https://github.com/garythomasgeorge/bars-and-circles-fibit" }],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
