import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-xl text-foreground/70 mb-8 max-w-md">
        The project you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/#projects">Back to Projects</Link>
      </Button>
    </div>
  );
}
