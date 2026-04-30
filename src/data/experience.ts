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
    role: "Consultant / Product Owner",
    client: "Comcast — Xfinity Assistant",
    location: "Philadelphia",
    start: "Jun 2024",
    end: "Present",
    bullets: [
      "Managing roadmap and delivery of Xfinity Assistant chatbot.",
      "Migrating legacy IVR/chatbot systems to Google Dialogflow / ADK ecosystem.",
      "Launched field tech chatbot in 4 months; used by 100+ techs, 10,000+ chats/day.",
      "Built prototype for Conversational Agents Playbook → released to production → $9M+ savings.",
      "Led Sales and Internet Essentials modules for omnichannel IVR migration.",
      "Built internal AXIS conversational insights tool using Gemini LLMs (sentiment, summary, agent metrics).",
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
      "Launched Fedena Connect mobile app (Android + iOS) → 30% adoption increase.",
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
];

export const skillsBuild = [
  "Google ADK",
  "Vertex AI",
  "Conversational Agents",
  "CX Agent Studio",
  "Dialogflow",
  "Gemini APIs",
  "Flutter",
  "Firebase",
  "Astro",
  "GitHub",
];

export const skillsHow = [
  "0 → 1 product development",
  "Roadmap & backlog",
  "Cross-functional leadership",
  "Agile / Scrum (CSPO)",
  "User research",
  "Agentic system design",
];
