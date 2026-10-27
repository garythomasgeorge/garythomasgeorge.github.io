export interface LabelledBullet {
  label: string;
  text: string;
}

// A named initiative inside one role, e.g. two products at the same client
export interface ExperienceGroup {
  title: string;
  detail: string;
  bullets: LabelledBullet[];
}

export interface Experience {
  company: string;
  role: string;
  client?: string;
  officialTitle?: string;
  product?: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  groups?: ExperienceGroup[];
  stack?: string[];
}

// Mirrors the general (anonymized) Word resume in /resume
export const experience: Experience[] = [
  {
    company: "Capgemini",
    role: "Product Manager",
    client: "Fortune 50 Telecom",
    officialTitle: "Business Analyst",
    location: "Philadelphia, PA",
    start: "Jun 2024",
    end: "Present",
    bullets: [],
    groups: [
      {
        title: "Conversational AI Platform",
        detail: "chat, voice and messaging channels on Google ADK",
        bullets: [
          { label: "Scale", text: "own roadmap and delivery for the client's customer-service virtual assistant across app, web, messaging and voice (300K+ sessions a day, 78% containment) as it migrates from legacy systems to Dialogflow CX, Conversational Agents and Google ADK." },
          { label: "Field-tech launch", text: "launched a new field-technician channel in 4 months, coordinating 5 teams across 3 orgs. In pilot it serves 100+ technicians and handles 10,000+ chats a day." },
          { label: "Generative AI", text: "prototyped the Conversational Agents Playbook that became the assistant's first generative experience in production, saving millions a year by reducing escalations to human agents." },
          { label: "Voice", text: "led the Sales and affordable-plan enrollment modules in a multi-team move of legacy IVR to a unified Dialogflow-based voice and chat platform." },
          { label: "RCS messaging", text: "owned the legacy content authoring system used to create RCS messages and worked across teams to launch the client's RCS messaging channel." },
          { label: "Roadmap and delivery", text: "prioritize with support, conversation design, UX and engineering against CX metrics, and work with leadership on new areas such as Field Services and Inbound Sales." },
        ],
      },
      {
        title: "Chat Transcript Analysis Tool",
        detail: "internal conversation insights platform built with Gemini",
        bullets: [
          { label: "Scale", text: "analyzes 200K+ conversations a day, producing 15+ LLM-generated metrics per conversation, including sentiment, summary, resolution, escalation reason, repeat contact, customer effort and human-agent performance." },
          { label: "Adoption", text: "grew from a prototype to 1,000+ internal users (about 100 daily) across product, design, operations and analytics, used to find what drives negative sentiment and escalations." },
          { label: "AI-first ADLC", text: "built hands-on as a PM with Claude, Google Antigravity and other AI coding tools across requirements, prompt design, code and testing, shipping features in days instead of sprints." },
          { label: "Quality and team", text: "validated LLM scores against human-reviewed transcripts. Co-built v1 with the product director and an engineer, who later hardened the production pipeline and relay code." },
        ],
      },
    ],
  },
  {
    company: "Foradian Technologies",
    role: "Product Manager",
    product: "Fedena (multi-tenant SaaS student information system) and Uzity (SaaS LMS), used by 40,000+ institutions",
    location: "Bangalore, India",
    start: "Sep 2018",
    end: "Oct 2021",
    bullets: [
      "Designed and launched a configurable Gradebook module for 10+ countries (custom formulas, co-scholastic grading, school-designed report cards), resulting in a 20% increase in retention and 15% sales growth.",
      "Led strategy and launch of the Fedena Mobile App on Android and iOS for teachers, parents, administrators and school managers, resulting in a 30% increase in adoption and new customer segments.",
      "Shipped post-MVP features including gradebook mark entry, QR/barcode gate management and an owner dashboard, resulting in a 30% increase in user productivity.",
      "Consolidated messaging into an integrated Email + WhatsApp platform, resulting in a 40% productivity increase. Launched an admissions dashboard, an owner group portal and Fedena ID Cards, and built product-usage analytics on AWS QuickSight.",
    ],
  },
  {
    company: "Foradian Technologies",
    role: "Software Engineer / Business Analyst",
    location: "Bangalore, India",
    start: "Aug 2012",
    end: "Aug 2018",
    bullets: [
      "Built new Fedena features (15% increase in user engagement), then moved into a proxy product owner role writing PRDs with the CTO and engineering leads.",
    ],
  },
  {
    company: "Web Serves Inc",
    role: "Business Analyst (Volunteer)",
    location: "New York, NY",
    start: "Jan 2022",
    end: "Dec 2022",
    bullets: [
      "Redesigned the company website for SEO and digital marketing, prototyped client web apps in Figma, and introduced agile tracking and weekly board reporting. Delivered 100% of projects for the year.",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
}

export const education: Education[] = [
  {
    degree: "M.S. in Information Systems",
    school: "New Jersey Institute of Technology",
    location: "Newark, New Jersey, USA",
    start: "Jan 2022",
    end: "Dec 2023",
  },
  {
    degree: "Executive MBA",
    school: "NMIMS Bengaluru",
    location: "Bangalore, Karnataka, India",
    start: "Jan 2016",
    end: "Dec 2017",
  },
  {
    degree: "B.S. in Computer Science Engineering",
    school: "Biju Patnaik University of Technology",
    location: "Bhubaneswar, Odisha, India",
    start: "Jan 2008",
    end: "Dec 2012",
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Generative AI Leadership", issuer: "Google (valid Oct 2025 - Sep 2027)" },
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance" },
  { name: "AI for Product Management", issuer: "Pendo & Mind the Product" },
  { name: "Product Analytics Certified", issuer: "Pendo & Mind the Product" },
  { name: "Product Management for AI & Data Science", issuer: "365 Data Science" },
];

// Categorized skills for /resume, matching the Word resume's Skills section
export const skillGroups: { label: string; items: string }[] = [
  { label: "AI & Agentic Products", items: "Google ADK, Conversational Agents / GECX, CX Agent Studio, Dialogflow CX, Vertex AI, Gemini, OpenAI, Claude, RAG, LLM integration, agentic workflows, human-in-the-loop patterns, prompt design, LLM evaluation" },
  { label: "Contact Center Platforms", items: "Microsoft Dynamics 365, Nuance, Google CCAI, RCS messaging" },
  { label: "Product Management", items: "0-1 product development, roadmap & backlog, Agile/Scrum, user research, conversation design, CX metrics (containment, sentiment, resolution), data analysis, Jira" },
  { label: "Product Design & Prototyping", items: "Figma, Claude Design, Google Stitch, Canva" },
  { label: "AI-Assisted Development", items: "Claude Code, Codex, Cursor, Replit, Google Antigravity, GitHub" },
  { label: "Application Stack", items: "TypeScript, Python, SQL, React Native, Expo, Expo Router, React, Next.js, Flutter, Tailwind CSS, Node.js, Express, Firebase, Supabase, SQLite, RevenueCat, Google Cloud Run, Gemini API, OpenAI API" },
  { label: "Analytics & Experimentation", items: "Split.io, Snowflake, Looker, Tableau, PostHog, Mixpanel, AWS QuickSight" },
];

export const skillsBuild = [
  // AI & Conversational
  "Google ADK",
  "Vertex AI",
  "Conversational Agents",
  "CX Agent Studio",
  "Dialogflow",
  "Gemini APIs",
  // Mobile & Web
  "Flutter",
  "Swift / iOS",
  "Firebase",
  "React",
  "Astro",
  "Tailwind CSS",
  // Design & Analytics
  "Figma",
  "Looker",
  "Mixpanel",
  "SQL",
  // Dev & Workflow
  "Python",
  "GitHub",
  "Jira",
  "Notion",
];

export const skillsHow = [
  "0 → 1 product development — from problem discovery to shipped product",
  "Roadmap & backlog prioritization across competing stakeholder needs",
  "Cross-functional leadership with eng, design, data, and business teams",
  "Agile / Scrum delivery (CSPO certified) — sprints, retros, and release planning",
  "User research & discovery — interviews, journey mapping, and usability testing",
  "Agentic & conversational AI system design — flows, fallbacks, and HITL patterns",
  "Data-informed decisions using analytics, funnels, and experiment readouts",
  "Technical fluency across web, mobile, APIs, and cloud — enough to build prototypes",
];
