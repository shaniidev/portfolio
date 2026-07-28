import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// The site is served from its Vercel subdomain; no custom domain is planned.
const siteUrl = "https://shanii.vercel.app";

const siteDescription =
  "Penetration tester and bug bounty hunter. ISO/IEC 27001 Lead Auditor. Reported RCE, SSRF, privilege escalation, IDOR and GraphQL data exposure across vendor and private programs, and author of the open-source bug-reaper and Keyana security tooling.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mir Shan Talpur — Penetration Tester & Developer",
    template: "%s | Mir Shan Talpur",
  },
  description: siteDescription,
  keywords: [
    "penetration testing",
    "bug bounty hunter",
    "vulnerability research",
    "ISO 27001 Lead Auditor",
    "application security",
    "OSINT",
    "security tooling",
    "web application pentesting",
  ],
  authors: [{ name: "Mir Shan Talpur", url: siteUrl }],
  creator: "Mir Shan Talpur",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mir Shan Talpur",
    title: "Mir Shan Talpur — Penetration Tester & Developer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mir Shan Talpur — Penetration Tester & Developer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `dark` is fixed on <html>: this site has no light mode by design.
    <html lang="en" className="dark">
      <head>
        {/*
          Arms the scroll-reveal CSS before first paint. Because the hidden
          state is scoped to `html.js`, a failure to run this script leaves
          every section visible instead of blank.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
