import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ExternalLink, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { verifiedCredentials, training } from "@/data/credentials";
import type { VerifiedCredential } from "@/data/credentials";

const CredentialTile = ({ credential }: { credential: VerifiedCredential }) => {
  const content = (
    <>
      <div className="flex h-24 w-24 items-center justify-center">
        {credential.image ? (
          <Image
            src={credential.image}
            alt=""
            width={96}
            height={96}
            className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          // Typographic stand-in until the badge artwork is added.
          <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/5 text-center font-mono text-[0.65rem] leading-tight font-semibold text-primary transition-transform duration-300 group-hover:scale-105">
            {credential.abbr}
          </span>
        )}
      </div>

      <h4 className="mt-4 text-sm font-medium leading-snug text-foreground">
        {credential.name}
      </h4>
      <p className="mt-1 font-mono text-xs text-muted-foreground">
        {credential.issuer}
      </p>

      {credential.verifyUrl && (
        <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          verify
          <ExternalLink className="h-3 w-3" />
        </span>
      )}
    </>
  );

  const shellClasses =
    "group flex h-full flex-col items-center rounded-xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:border-primary/40 hover:bg-surface-raised";

  if (!credential.verifyUrl) {
    return <div className={shellClasses}>{content}</div>;
  }

  return (
    <Link
      href={credential.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Verify ${credential.name} (opens in a new tab)`}
      className={shellClasses}
    >
      {content}
    </Link>
  );
};

const Credentials = () => (
  <section id="credentials" className="relative scroll-mt-24 py-24 md:py-32">
    <div className="container mx-auto px-4">
      <SectionHeading
        command="gpg --verify ./credentials"
        title="Credentials"
        lead="Certifications earned and training completed — kept separate, because they are not the same thing."
      />

      {/* ---------- Track 1: awarded certifications ---------- */}
      <Reveal className="mb-6 flex items-center gap-3">
        <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
        <h3 className="font-mono text-sm font-medium text-foreground">
          Certifications earned
        </h3>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs text-muted-foreground">
          {verifiedCredentials.length}
        </span>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {verifiedCredentials.map((credential, index) => (
          <Reveal key={credential.id} delay={index * 0.05} className="h-full">
            <CredentialTile credential={credential} />
          </Reveal>
        ))}
      </div>

      {/* ---------- Track 2: training ---------- */}
      <Reveal className="mb-6 mt-16 flex items-center gap-3">
        <GraduationCap className="h-5 w-5 shrink-0 text-muted-foreground" />
        <h3 className="font-mono text-sm font-medium text-foreground">
          Training &amp; coursework
        </h3>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs text-muted-foreground">
          {training.length}
        </span>
      </Reveal>

      <Reveal className="mb-6">
        <p className="max-w-2xl text-sm text-muted-foreground">
          Instructor-led courses completed. These are listed as training, not as
          certifications — the exams are not part of them.
        </p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {training.map((record, index) => (
          <Reveal key={record.id} delay={index * 0.07} className="h-full">
            <article className="flex h-full gap-5 rounded-xl border border-dashed border-border-strong/70 bg-surface/60 p-6 transition-colors duration-300 hover:border-border-strong">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-muted font-mono text-xs font-semibold text-muted-foreground">
                {record.abbr}
              </span>
              <div>
                <h4 className="text-base font-medium text-foreground">
                  {record.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {record.provider}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {record.focus}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials;
