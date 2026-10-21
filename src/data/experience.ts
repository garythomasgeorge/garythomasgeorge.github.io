export interface Experience {
  company: string;
  role: string;
  client?: string;
  product?: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  stack?: string[];
}

export const experience: Experience[] = [
  {
    company: "Capgemini",
    role: "Product Manager",
    client: "Fortune 50 Telecom — Omnichannel Virtual Assistant",
    location: "Philadelphia",
    start: "Jun 2024",
    end: "Present",
    bullets: [
      "Product manager for an omnichannel customer-service chatbot that handles 300K+ sessions a day across app, web and messaging, with 78% containment.",
      "Helping move IVR and chatbot modules from a legacy stack to Google ADK / Conversational Agents, coordinating 5 teams across 3 orgs.",
      "Took a field-tech assistant from 0 to launch in 4 months. It now serves 100+ technicians and handles 10,000+ chats a day.",
      "Prototyped a generative Conversational Agents Playbook and shipped it to production. It cut escalations to human agents and saves millions a year.",
      "Owned the Sales and affordable-plan enrollment modules in the omnichannel IVR migration.",
      "Built a Gemini-powered chat transcript analysis tool hands-on with Claude, Antigravity and other AI coding tools. I co-built the first version with the product director and an engineer, and it now has 1,000+ internal users with ~100 active each day.",
    ],
    stack: [
      "Google ADK",
      "Conversational Agents",
      "CX Agent Studio",
      "Vertex AI",
      "Cloud Run",
      "Dialogflow",
    ],
  },
  {
    company: "Foradian Technologies",
    role: "Product Manager",
    product: "Fedena SaaS SIS · Uzity SaaS LMS (40,000+ institutions)",
    location: "Bangalore",
    start: "Sep 2018",
    end: "Oct 2021",
    bullets: [
      "Consolidated messaging into integrated Email + WhatsApp platform → 40% productivity increase.",
      "Designed and launched Gradebook module across 10+ countries → 20% retention increase, 15% sales growth.",
      "Launched the Fedena Mobile App (Android + iOS) → 30% adoption increase.",
      "Drove gate management (QR/Barcode) and post-MVP owner dashboard → 30% productivity increase.",
    ],
  },
  {
    company: "Foradian Technologies",
    role: "Software Engineer / Business Analyst",
    location: "Bangalore",
    start: "Aug 2012",
    end: "Aug 2018",
    bullets: [
      "Researched and built new Fedena SIS features → 15% user engagement increase.",
      "Transitioned into proxy product owner role; translated customer needs into PRDs with CTO and engineering.",
    ],
  },
  {
    company: "Web Serves Inc",
    role: "Business Analyst (Volunteer)",
    location: "New York",
    start: "Jan 2022",
    end: "Dec 2022",
    bullets: [
      "Redesigned company website with SEO and digital marketing focus.",
      "Introduced Agile tracking tools (Intervals, Freedcamp); generated board-level reports.",
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
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
  },
  {
    name: "Product Analytics Certified",
    issuer: "Pendo × Mind the Product",
  },
  {
    name: "AI for Product Management (course completed)",
    issuer: "Pendo × Mind the Product · Google Cloud",
  },
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
