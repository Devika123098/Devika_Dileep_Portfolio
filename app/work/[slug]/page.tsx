import Link from "next/link";
import { RESUME_DATA } from "@/data";

export async function generateStaticParams() {
  return RESUME_DATA.projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = RESUME_DATA.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-40">
        <h1 className="text-4xl font-serif text-forest mb-4">Project Not Found</h1>
        <Link href="/" className="text-textMain underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <main className="w-full max-w-[1000px] mx-auto px-6 md:px-12 pt-40 mb-40">
      <Link href="/" className="inline-flex items-center gap-2 text-forest mb-8 hover:underline">
        ← Back to Home
      </Link>
      
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map(tag => (
            <span key={tag} className="px-3 py-1 border border-forest rounded-md text-[11px] font-bold text-forest uppercase bg-white tracking-wide">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-serif text-[42px] md:text-[64px] text-forest mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-[20px] font-sans text-textMain leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </header>

      <div className="w-full aspect-video bg-white border border-forest rounded-card shadow-hard mb-16 flex items-center justify-center">
         <p className="text-forest font-sans">Project Screenshot / Demo Placeholder</p>
      </div>

      <div className="prose prose-lg max-w-none font-sans text-textGray">
        <h3>About the Project</h3>
        <p>This section would contain more detailed case study information about {project.title}.</p>
        <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-forest font-bold underline">
                View Project Repository/Live Site
            </a>
        </p>
      </div>
    </main>
  );
}
