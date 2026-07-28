"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Terminal } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "about", id: "about" },
  { href: "#findings", label: "findings", id: "findings" },
  { href: "#arsenal", label: "arsenal", id: "arsenal" },
  { href: "#credentials", label: "credentials", id: "credentials" },
  { href: "#projects", label: "projects", id: "projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight whichever section currently owns the upper half of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link
          href="#hero"
          className="group -ml-2 inline-flex min-h-11 items-center gap-2.5 rounded-md px-2 font-mono text-sm font-medium"
        >
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">~/</span>
          <span className="text-foreground transition-colors group-hover:text-primary">
            shan
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 font-mono text-sm transition-colors duration-200",
                activeId === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-primary/50">/</span>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden font-mono sm:inline-flex">
            <Link href="#contact">contact</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border bg-surface">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col gap-1 px-4 pt-14">
                <p className="mb-4 font-mono text-xs text-muted-foreground">
                  $ ls ./sections
                </p>
                {[...navLinks, { href: "#contact", label: "contact", id: "contact" }].map(
                  ({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-md px-3 py-3 font-mono text-base text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <span className="text-primary/50">/</span>
                      {label}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
