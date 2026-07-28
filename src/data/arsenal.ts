export interface ArsenalCategory {
  id: string;
  /** Rendered as a shell-style section label, e.g. `./offensive` */
  slug: string;
  title: string;
  summary: string;
  items: string[];
}

export const arsenal: ArsenalCategory[] = [
  {
    id: "offensive",
    slug: "offensive",
    title: "Offensive Security",
    summary:
      "Finding the gap before someone else does — recon through to a written, reproducible finding.",
    items: [
      "Penetration Testing",
      "Bug Bounty Hunting",
      "RCE",
      "SSRF",
      "IDOR / BOLA",
      "Privilege Escalation",
      "Code Injection",
      "GraphQL Abuse",
      "Path Traversal",
      "XSS",
      "OWASP Top 10",
      "OSINT",
    ],
  },
  {
    id: "defensive",
    slug: "defensive",
    title: "Defensive & Governance",
    summary:
      "The other half of the job: proving controls exist, work, and hold up to an audit.",
    items: [
      "ISO/IEC 27001:2022",
      "Security Auditing",
      "Risk Assessment",
      "SIEM & Logging",
      "Hardening",
      "Incident Response",
    ],
  },
  {
    id: "tooling",
    slug: "tooling",
    title: "Tooling",
    summary:
      "What I reach for on an engagement, plus what I build when nothing fits.",
    items: [
      "Nmap",
      "Burp Suite",
      "Wireshark",
      "Metasploit",
      "Kali Linux",
      "Nikto",
      "Gobuster",
      "Hydra",
    ],
  },
  {
    id: "engineering",
    slug: "engineering",
    title: "Engineering",
    summary:
      "Security tooling is software. I ship it properly — typed, tested, containerised.",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "FastAPI",
      "Node.js",
      "Bash",
    ],
  },
  {
    id: "automation",
    slug: "automation",
    title: "Automation & Data",
    summary:
      "Async pipelines, scrapers, and agents that turn a manual afternoon into a cron job.",
    items: [
      "Asyncio",
      "Web Scraping",
      "Playwright",
      "Selenium",
      "BeautifulSoup",
      "Task Automation",
      "AI Agents",
    ],
  },
  {
    id: "platform",
    slug: "platform",
    title: "Platform",
    summary: "Where the work runs and how it gets there.",
    items: ["Linux", "Docker", "Git", "SQLite", "Vercel", "REST APIs"],
  },
];

/** Flat list powering the scrolling tech ticker under the hero. */
export const tickerItems: string[] = [
  "Penetration Testing",
  "ISO 27001 Lead Auditor",
  "OSINT",
  "Burp Suite",
  "Nmap",
  "Python",
  "Asyncio",
  "OWASP Top 10",
  "FastAPI",
  "Next.js",
  "Kali Linux",
  "Docker",
  "Wireshark",
  "API Security",
  "TypeScript",
  "Bash",
];
