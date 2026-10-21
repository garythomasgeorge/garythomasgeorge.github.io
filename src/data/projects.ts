
export type ProjectType = "Enterprise" | "Personal" | "Open Source";

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  type: ProjectType;
  blurb: string;
  tags: string[];
  hasCaseStudy: boolean;
  featured?: boolean;
  metrics?: Metric[];
  links: ExternalLink[];
}

export const projects: Project[] = [
  {
    slug: "enterprise-virtual-assistant",
    name: "Enterprise Virtual Assistant",
    type: "Enterprise",
    blurb:
      "Product manager on a high-volume omnichannel chatbot: moving it to Google ADK and shipping its first generative AI features.",
    tags: ["Google ADK", "CX Agent Studio", "Vertex AI", "Dialogflow", "Cloud Run"],
    hasCaseStudy: true,
    featured: true,
    metrics: [
      { value: "300K+", label: "chatbot sessions / day" },
      { value: "78%", label: "containment" },
    ],
    links: [{ label: "Case Study", href: "/portfolio/enterprise-virtual-assistant" }],
  },
  {
    slug: "transcript-analysis",
    name: "Chat Transcript Analysis Tool",
    type: "Enterprise",
    blurb:
      "An internal Gemini tool that scores chatbot conversations for sentiment, writes summaries and generates agent metrics. I built it hands-on with Claude and other AI coding tools.",
    tags: ["Gemini", "LLM Evaluation", "Conversation Analytics", "Vertex AI", "Claude", "Antigravity"],
    hasCaseStudy: true,
    featured: true,
    metrics: [
      { value: "1,000+", label: "internal users" },
      { value: "~100", label: "daily active users" },
    ],
    links: [{ label: "Case Study", href: "/portfolio/transcript-analysis" }],
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
    links: [{ label: "Read on Medium", href: "https://medium.com/@garythomasgeorge/cx-agent-studio-the-evolution-of-googles-conversational-ai-stack-a-first-look-09d87a95a093" }],
  },
  {
    slug: "fedena-mobile",
    name: "Fedena Mobile App",
    type: "Enterprise",
    blurb:
      "0→1 launch of the Fedena Mobile App (Android + iOS) for school admins, parents, students, and teachers — drove a 30% adoption increase.",
    tags: ["Mobile", "Flutter", "Education SaaS", "0→1"],
    hasCaseStudy: true,
    links: [
      { label: "Case Study", href: "/portfolio/fedena-mobile" },
      { label: "App Store", href: "https://apps.apple.com/us/app/fedena-mobile-app/id1474936818" },
    ],
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
    slug: "fedena-id-cards",
    name: "Fedena ID Cards",
    type: "Enterprise",
    blurb:
      "Let schools design and print their own student and staff ID cards and certificates from Fedena records, instead of relying on outside print vendors.",
    tags: ["Education SaaS", "Web App", "Printing", "User Research"],
    hasCaseStudy: true,
    links: [{ label: "Case Study", href: "/portfolio/fedena-id-cards" }],
  },
  {
    slug: "univault",
    name: "UniVault Link Manager",
    type: "Personal",
    blurb:
      "iOS link manager app — save, organize, and revisit URLs with smart tagging.",
    tags: ["iOS", "Swift", "Personal Project"],
    hasCaseStudy: true,
    links: [
      { label: "Case Study", href: "/portfolio/univault" },
      { label: "App Store", href: "https://apps.apple.com/us/app/univault-link-manager/id6758565593" },
    ],
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
