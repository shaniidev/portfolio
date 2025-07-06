import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
  category: string;
}

const projects: Project[] = projectsData;

// Define Skill Category type (optional but good practice)
interface SkillCategory {
  name: string;
  skills: string[];
}

// Sample Skills Data
const skillCategories: SkillCategory[] = [
  {
    name: "Cybersecurity",
    skills: ["Penetration Testing", "OSINT", "Vulnerability Assessment", "Security Auditing", "OWASP Top 10", "Nmap", "Burp Suite"],
  },
  {
    name: "Programming & Development",
    skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML", "CSS"],
  },
  {
    name: "Automation & Scraping",
    skills: ["Web Scraping", "Task Automation", "Selenium", "Playwright", "Beautiful Soup", "Requests"],
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "Linux", "Tailwind CSS", "shadcn/ui", "Vercel"],
  },
];

export default function Home() {
  return (
    <main>
      <SectionWrapper id="hero" className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
        <Image
          src="/images/avatar.png"
          alt="Mir Shan Talpur Avatar"
          width={160}
          height={160}
          priority
          className="rounded-full mb-6 border-2 border-primary/20 shadow-lg"
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Mir Shan Talpur
        </h1>

        <Badge variant="secondary" className="mb-6 text-lg py-1 px-4 rounded-full border-green-500/20">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Open to Opportunities
        </Badge>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          Hi, I&apos;m Mir Shan Talpur, a Full-Stack Developer and Penetration Tester who builds secure, intelligent applications and audits digital infrastructures. I specialize in Python, modern web technologies, and advanced security testing to create robust systems and identify critical vulnerabilities. Let&apos;s build something secure and smart together.
        </p>

        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Other sections will go here */}
      <SectionWrapper id="about">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        {/* Replaced prompts with narrative based on user details */}
        <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground">
          <p>
            With a Bachelor&apos;s degree in Computer Science (2020) and a deep-seated fascination for digital security that began with early explorations in networking and system interactions, my journey has evolved at the intersection of development and cybersecurity. Since 2019, I&apos;ve navigated the dynamic world of freelancing, initially building robust WordPress solutions with Elementor and PHP customization.
          </p>
          <p>
            My technical toolkit quickly expanded as I delved into Python and JavaScript, developing Discord bots, crafting GUI applications, and leveraging AI to accelerate learning and development. This path led me to build custom websites, Android applications, and cross-platform desktop tools using technologies like Electron and Python, broadening my full-stack capabilities while keeping security principles in mind.
          </p>
          <p>
            Currently, I am channeling my passion into a focused pursuit of cybersecurity excellence. I&apos;m actively enhancing my expertise through the Google Cybersecurity Professional Certificate program and intensive Certified Ethical Hacker (CEH) training at Corvit Systems, focusing on areas like active/passive information gathering and network scanning with tools like Nmap. My ambition is to build practical security tools – encompassing SIEM, logging, and pentesting utilities – and to rigorously apply advanced security techniques to create resilient and secure full-stack applications.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Certifications Section - Added */}
      <SectionWrapper id="certifications">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Badges</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
          {/* Updated first badge */}
          <Link href="https://www.credly.com/badges/fa81feae-bf66-4e35-85b4-6419253a8380/public_url" target="_blank" rel="noopener noreferrer" aria-label="ISO/IEC 27001:2022 Lead Auditor Badge">
            <Image
              src="/images/badges/leadauditor.png"
              alt="ISO/IEC 27001:2022 Lead Auditor Badge"
              width={120}
              height={120}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
          {/* Oracle Badge (no link) */}
          <Image
            src="/images/badges/oracle-infrastructure-ai-foundations-associate.png"
            alt="Oracle Cloud Infrastructure AI Foundations Associate Badge"
            width={120}
            height={120}
            className="transition-transform duration-300 hover:scale-105"
          />
          {/* New Fortinet Badge */}
          <Link href="https://www.credly.com/badges/c769bdca-4286-4806-a7c0-841e86941d46/public_url" target="_blank" rel="noopener noreferrer" aria-label="Fortinet Certified Fundamentals Cybersecurity Badge">
            <Image
              src="/images/badges/fortinet-certified-fundamentals-cybersecurity.png"
              alt="Fortinet Certified Fundamentals Cybersecurity Badge"
              width={120}
              height={120}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
          {/* New Cybersecurity Essentials Badge */}
          <Link href="https://www.credly.com/badges/7bf97b4d-7017-44d8-9e12-e79e44dcddbb/public_url" target="_blank" rel="noopener noreferrer" aria-label="Cybersecurity Essentials Badge">
            <Image
              src="/images/badges/lfc108-cybersecurity-essentials.png"
              alt="Cybersecurity Essentials Badge"
              width={120}
              height={120}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
          {/* New Cybersecurity Fundamentals Badge */}
          <Link href="https://www.credly.com/badges/a9c084d3-2a06-4756-b7dd-28abf853a94e/public_url" target="_blank" rel="noopener noreferrer" aria-label="Cybersecurity Fundamentals Badge">
            <Image
              src="/images/badges/cybersecurity-fundamentals.png"
              alt="Cybersecurity Fundamentals Badge"
              width={120}
              height={120}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              {project.imageUrl && (
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} Screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="bg-muted"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center mt-auto pt-4">
                 <Badge variant={project.category === 'Finished' ? 'default' : project.category === 'In-progress' ? 'outline' : 'secondary'}>
                   {project.category}
                 </Badge>
                 <div className="flex items-center gap-2">
                    {project.githubUrl && (
                    <Button asChild variant="outline" size="icon">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                        <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    )}
                    {project.liveUrl && (
                        <Button asChild variant="outline" size="icon">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                        </Button>
                    )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Services Section - Updated */}
      <SectionWrapper id="services">
        <h2 className="text-3xl font-bold text-center mb-12">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Service Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Full-Stack Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Building responsive, secure, and high-performance websites and applications using modern stacks like Next.js and React.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FastAPI API Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Designing and developing scalable, high-performance RESTful APIs with Python and FastAPI for your backend systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Penetration Testing & Tooling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Simulating real-world attacks, identifying vulnerabilities, and developing custom pentesting tools for security assessments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custom Automation & AI Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Building intelligent Python scripts, AI-powered agents, and custom tools to automate tasks and improve efficiency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web Scraping Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Developing robust web scrapers to ethically gather publicly available data for analysis, OSINT, and business intelligence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bash & Shell Scripting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Crafting powerful Bash and shell scripts for system administration, task automation, and streamlining command-line workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Contact Section - Updated */}
      <SectionWrapper id="contact">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-8 text-muted-foreground">
            I am actively seeking new opportunities and am available for freelance projects and full-time roles (remote, hybrid, or on-site). If you have a position that aligns with my skills, or just want to connect, please don&apos;t hesitate to get in touch.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {/* Updated contact links */}
            <Button asChild variant="outline">
              <a href="mailto:mirshantalpur@outlook.com">Email Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/shaniii/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
             <Button asChild variant="outline">
              <a href="https://github.com/shaniidev" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </div>
          {/* Placeholder for Contact Form */}
          {/* <p className="text-sm text-muted-foreground">Or fill out the form below:</p> */}
          {/* [Contact Form component will go here] */}
        </div>
      </SectionWrapper>

      </main>
  );
}
