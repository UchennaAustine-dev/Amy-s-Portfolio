import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Github,
  ExternalLink,
  Calendar,
  Tag,
  Users,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    };
  }

  return {
    title: `${project.title} | Ammy Ogunbiyi - Backend Developer`,
    description: project.description,
    keywords: [
      ...project.technologies,
      project.category,
      project.primaryLanguage,
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://www.amidat.tech/projects/${project.slug}`,
      siteName: "Ammy Ogunbiyi - Backend Developer",
      title: `${project.title} | Backend Developer Project`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
          type: "image/svg+xml",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ammy Ogunbiyi`,
      description: project.description,
      creator: "@amidathtc",
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 pb-20">
      <div className="content-container mx-auto px-4 sm:px-6">
        {/* Back button */}
        <div className="mb-8 text-center">
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href="/#projects">
              <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="mb-2 sm:mb-0"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Completed</p>
                <p className="font-medium">{project.completedDate || "2023"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-primary/10 p-2 rounded-full">
                <Tag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Category</p>
                <p className="font-medium">
                  {project.category || "Backend Development"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:col-span-2 md:col-span-1">
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Team Size</p>
                <p className="font-medium">
                  {project.teamSize || "3 developers"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-12 border border-primary/10 mx-auto max-w-4xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
          />
        </div>

        {/* Project Content */}
        <div className="narrow-container px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Project Overview
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none mx-auto">
              {project.content ? (
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              ) : (
                <>
                  <p>
                    This {project.category || "backend development"} project was
                    designed to solve complex challenges in scalability and
                    performance. The system architecture was carefully planned
                    to handle high traffic loads while maintaining
                    responsiveness and data integrity.
                  </p>
                  <p>
                    One of the key technical challenges was implementing an
                    efficient caching strategy that would reduce database load
                    while ensuring data consistency. We solved this by using a
                    multi-layered caching approach with Redis for hot data and
                    implemented cache invalidation patterns.
                  </p>
                  <p>
                    The project was deployed using a containerized approach with
                    Docker and Kubernetes, allowing for seamless scaling and
                    deployment across multiple environments. Continuous
                    integration and deployment pipelines were set up to ensure
                    code quality and rapid iteration.
                  </p>
                </>
              )}
            </div>
          </div>

          <Separator className="my-8 max-w-2xl mx-auto" />

          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Key Features
            </h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {project.features ? (
                project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{feature.title}</p>
                      <p className="text-foreground/70 text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Scalable Architecture</p>
                      <p className="text-foreground/70 text-sm sm:text-base">
                        Designed to handle millions of requests per day with
                        horizontal scaling capabilities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced Caching</p>
                      <p className="text-foreground/70 text-sm sm:text-base">
                        Implemented multi-level caching strategy to optimize
                        performance and reduce database load.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Robust Security</p>
                      <p className="text-foreground/70 text-sm sm:text-base">
                        Implemented comprehensive security measures including
                        authentication, authorization, and data encryption.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Comprehensive Monitoring</p>
                      <p className="text-foreground/70 text-sm sm:text-base">
                        Set up detailed logging, metrics collection, and
                        alerting for proactive issue detection.
                      </p>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-muted/50 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-center">
              Technical Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  Primary Language
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {project.primaryLanguage || "Node.js"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  Database
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {project.database || "PostgreSQL"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  Architecture
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {project.architecture || "Microservices"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  Deployment
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {project.deployment || "Docker & Kubernetes"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  Testing
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {project.testing || "Jest, Supertest"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  CI/CD
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {project.cicd || "GitHub Actions"}
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {project.githubUrl && (
                <Button variant="outline" asChild className="flex-1">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    <span className="sm:inline">View Source Code</span>
                    <span className="inline sm:hidden">Code</span>
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild className="flex-1">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span className="sm:inline">Visit Live Project</span>
                    <span className="inline sm:hidden">Demo</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
