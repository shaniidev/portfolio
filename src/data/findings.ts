/**
 * Reported vulnerability findings.
 *
 * These twelve are a representative selection by vulnerability class, not a
 * complete record — see `findingsSummary` for the totals.
 *
 * Every entry is "unnamed": none of these reports are publicly disclosed, so
 * targets are described by category only. `sector` values are deliberately
 * broad — each matches many companies, so a reader learns the calibre of the
 * target without being able to identify it.
 *
 * `disclosure: "named"` exists so a single finding can be attributed later if
 * and when its report is publicly disclosed. Do not set it otherwise.
 *
 * There is deliberately no payout field. Reward status is never shown: most of
 * this work was rewarded, and flagging individual entries would wrongly imply
 * the unflagged ones were not.
 *
 * `severity` is intentionally null. Fill it in only with the rating the program
 * itself assigned — an unverified severity on a public page is exactly the kind
 * of claim a triager will check. The chip renders only when the field is set.
 */

export type Disclosure = "named" | "unnamed";
export type Severity = "Critical" | "High" | "Medium" | "Low" | null;

export interface Finding {
  id: string;
  /** Program name — rendered only when `disclosure` is "named". */
  target: string;
  /** Broad category shown in place of the name. Keep it non-identifying. */
  sector: string;
  disclosure: Disclosure;
  vulnClass: string;
  summary: string;
  severity: Severity;
}

export const findings: Finding[] = [
  {
    id: "oss-failsafe-bypass",
    target: "",
    sector: "Open-source developer tooling",
    disclosure: "unnamed",
    vulnClass: "Security Control Bypass",
    summary:
      "Bypassed a fail-safe security control, defeating a protection the tool was relied upon to enforce.",
    severity: null,
  },
  {
    id: "enterprise-hardcoded-creds",
    target: "",
    sector: "Enterprise web application",
    disclosure: "unnamed",
    vulnClass: "Hardcoded Credentials",
    summary:
      "Credentials shipped inside client-side code, readable by anyone able to fetch the bundle.",
    severity: null,
  },
  {
    id: "cicd-privesc-1",
    target: "",
    sector: "CI/CD platform",
    disclosure: "unnamed",
    vulnClass: "Privilege Escalation",
    summary:
      "A lower-privileged user could obtain permissions they were never granted, breaking the platform's role boundary.",
    severity: null,
  },
  {
    id: "cicd-privesc-2",
    target: "",
    sector: "CI/CD platform",
    disclosure: "unnamed",
    vulnClass: "Privilege Escalation",
    summary:
      "A second, independent escalation path in the same platform, found and reported separately.",
    severity: null,
  },
  {
    id: "secsaas-ssrf",
    target: "",
    sector: "Security SaaS platform",
    disclosure: "unnamed",
    vulnClass: "SSRF",
    summary:
      "Server-side request forgery, coercing the application into issuing attacker-controlled outbound requests.",
    severity: null,
  },
  {
    id: "secsaas-path-traversal",
    target: "",
    sector: "Security SaaS platform",
    disclosure: "unnamed",
    vulnClass: "Path Traversal",
    summary:
      "Traversal outside the intended directory, reaching files the application was never meant to serve.",
    severity: null,
  },
  {
    id: "exchange-hardcoded-creds",
    target: "",
    sector: "Cryptocurrency exchange",
    disclosure: "unnamed",
    vulnClass: "Hardcoded Credentials",
    summary:
      "Hardcoded credentials recovered from a trading platform's application.",
    severity: null,
  },
  {
    id: "private-rce",
    target: "",
    sector: "Private program",
    disclosure: "unnamed",
    vulnClass: "Remote Code Execution",
    summary:
      "Arbitrary code execution on the target host — full compromise of the application server.",
    severity: null,
  },
  {
    id: "private-code-injection",
    target: "",
    sector: "Private program",
    disclosure: "unnamed",
    vulnClass: "Code Injection",
    summary:
      "User-controlled input reaching an interpreter, allowing injected code to run in the application's context.",
    severity: null,
  },
  {
    id: "private-graphql-pii",
    target: "",
    sector: "Private program",
    disclosure: "unnamed",
    vulnClass: "GraphQL — PII Exposure",
    summary:
      "GraphQL flaws exposing database records containing personally identifiable information.",
    severity: null,
  },
  {
    id: "private-idor-pii",
    target: "",
    sector: "Private program",
    disclosure: "unnamed",
    vulnClass: "IDOR — PII Leak",
    summary:
      "Insecure direct object references returning other users' personal data with no authorisation check.",
    severity: null,
  },
  {
    id: "private-xss",
    target: "",
    sector: "Private program",
    disclosure: "unnamed",
    vulnClass: "Cross-Site Scripting",
    summary:
      "Script execution in the context of other users' sessions on an authenticated surface.",
    severity: null,
  },
];

/**
 * Headline totals for the section. `reported` covers the full body of work,
 * of which the twelve entries above are only a class-by-class sample.
 */
export const findingsSummary = {
  reported: "50+",
  /** Derived, so it stays correct as the list above grows. */
  get classes() {
    return new Set(findings.map((finding) => finding.vulnClass)).size;
  },
};

/**
 * Where the work is reported. Bug bounty *platforms* are safe to name — they
 * identify no target. Individual programs are not listed.
 */
export const disclosurePlatforms: string[] = [
  "YesWeHack",
  "Vendor security programs",
  "Open-source projects",
  "Private programs",
];
