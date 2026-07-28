/**
 * Credentials are deliberately split into two tracks.
 *
 * `verifiedCredentials` — certificates actually awarded, each ideally backed by
 * a public verification URL (Credly). These carry the weight.
 *
 * `training` — instructor-led courses completed. Listing these is useful, but
 * they are NOT certifications and are never rendered alongside the badges
 * above. Conflating "CEH training attended" with "CEH certified" is the
 * fastest way to lose a security reviewer's trust.
 */

export interface VerifiedCredential {
  id: string;
  name: string;
  issuer: string;
  /** Badge artwork in /public/images/badges. Null renders a typographic tile. */
  image: string | null;
  /** Public verification URL. Null renders the badge without a link. */
  verifyUrl: string | null;
  /** Short label used on the typographic fallback tile. */
  abbr: string;
}

export interface TrainingRecord {
  id: string;
  name: string;
  abbr: string;
  provider: string;
  focus: string;
}

export const verifiedCredentials: VerifiedCredential[] = [
  {
    id: "iso-27001-lead-auditor",
    name: "ISO/IEC 27001:2022 Lead Auditor",
    issuer: "Credly",
    image: "/images/badges/leadauditor.png",
    verifyUrl:
      "https://www.credly.com/badges/fa81feae-bf66-4e35-85b4-6419253a8380/public_url",
    abbr: "ISO 27001",
  },
  {
    id: "fortinet-fundamentals",
    name: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    image: "/images/badges/fortinet-certified-fundamentals-cybersecurity.png",
    verifyUrl:
      "https://www.credly.com/badges/c769bdca-4286-4806-a7c0-841e86941d46/public_url",
    abbr: "Fortinet",
  },
  {
    id: "google-cybersecurity",
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google · Coursera",
    image: "/images/badges/google-cybersecurity-certificate.png",
    // Set this to the Coursera or Credly public credential URL to make the
    // tile clickable like the other verified badges.
    verifyUrl: null,
    abbr: "Google Cyber",
  },
  {
    id: "lfc108-cybersecurity-essentials",
    name: "Cybersecurity Essentials (LFC108)",
    issuer: "The Linux Foundation",
    image: "/images/badges/lfc108-cybersecurity-essentials.png",
    verifyUrl:
      "https://www.credly.com/badges/7bf97b4d-7017-44d8-9e12-e79e44dcddbb/public_url",
    abbr: "LFC108",
  },
  {
    id: "cybersecurity-fundamentals",
    name: "Cybersecurity Fundamentals",
    issuer: "Credly",
    image: "/images/badges/cybersecurity-fundamentals.png",
    verifyUrl:
      "https://www.credly.com/badges/a9c084d3-2a06-4756-b7dd-28abf853a94e/public_url",
    abbr: "Cyber Fund.",
  },
  {
    id: "oracle-ai-foundations",
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    image: "/images/badges/oracle-infrastructure-ai-foundations-associate.png",
    verifyUrl: null,
    abbr: "OCI AI",
  },
];

export const training: TrainingRecord[] = [
  {
    id: "ceh-corvit",
    name: "Certified Ethical Hacker (CEH)",
    abbr: "CEH",
    provider: "Corvit Systems, Pakistan",
    focus:
      "Instructor-led course: active and passive reconnaissance, network scanning and enumeration, vulnerability analysis, system hacking methodology.",
  },
  {
    id: "ccna-corvit",
    name: "Cisco Certified Network Associate (CCNA)",
    abbr: "CCNA",
    provider: "Corvit Systems, Pakistan",
    focus:
      "Instructor-led course: routing and switching, IP addressing and subnetting, VLANs, network fundamentals and security basics.",
  },
];
