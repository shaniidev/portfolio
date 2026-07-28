import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/shaniidev", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/shaniii/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:mirshantalpur@outlook.com", label: "Email", Icon: Mail },
];

const Footer = () => (
  <footer className="border-t border-border bg-surface/40">
    <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row">
      <div>
        <p className="font-mono text-sm text-foreground">
          <span className="text-primary">shan@talpur</span>
          <span className="text-muted-foreground">:~$ exit</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mir Shan Talpur. Built with Next.js and
          Tailwind CSS.
        </p>
      </div>

      <div className="flex items-center gap-2">
        {socials.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
