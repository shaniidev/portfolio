export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "pentest",
    index: "01",
    title: "Penetration Testing",
    description:
      "Black-box and grey-box assessments of web applications and APIs. You get a reproducible finding with proof, an impact rating, and the remediation — not a raw scanner dump.",
    tags: ["Web Apps", "APIs", "OWASP Top 10", "Reporting"],
  },
  {
    id: "vuln-research",
    index: "02",
    title: "Vulnerability Research",
    description:
      "The same work I do on bounty programs, pointed at your estate: authorisation flaws, injection, SSRF, and business-logic abuse that automated scanning consistently misses.",
    tags: ["RCE", "SSRF", "IDOR", "GraphQL", "Privilege Escalation"],
  },
  {
    id: "audit",
    index: "03",
    title: "Security Audit & ISO 27001 Readiness",
    description:
      "Control-by-control review against ISO/IEC 27001:2022 as a certified Lead Auditor. Gap analysis, evidence review, and a prioritised path to a passing audit.",
    tags: ["ISO 27001", "Gap Analysis", "Risk", "Policy"],
  },
  {
    id: "tooling",
    index: "04",
    title: "Security Tooling Development",
    description:
      "Custom scanners, recon pipelines, and automation built to your workflow. APIVulnMiner is the public example: async, containerised, OWASP-aware.",
    tags: ["Python", "Asyncio", "Docker", "CLI"],
  },
  {
    id: "fullstack",
    index: "05",
    title: "Secure Web Development",
    description:
      "Next.js and React applications built with the threat model in mind from the first commit — authentication, authorisation, and input handling done right.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "api",
    index: "06",
    title: "API Design & Development",
    description:
      "Scalable REST APIs in Python and FastAPI, with authentication, rate limiting, and validation treated as requirements rather than afterthoughts.",
    tags: ["FastAPI", "Python", "REST", "Auth"],
  },
  {
    id: "automation",
    index: "07",
    title: "Automation, Scraping & OSINT",
    description:
      "Ethical data collection and workflow automation — resilient scrapers, OSINT pipelines, and scripts that remove the repetitive parts of your week.",
    tags: ["Playwright", "Scraping", "OSINT", "Bash"],
  },
];
