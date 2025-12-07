import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"; 
import Hero from "@/app/components/Hero";
import TechStack from "@/app/components/TechStack";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import ScrollAnimation from "@/app/components/ScrollAnimation";

// --- TYPES ---
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: any;
  techStack: string[];
  demoLink?: string;
  repoLink?: string;
}

interface Certificate {
  _id: string;
  title: string;
  issuer: string;
  image: any;
  link: string;
}

// --- DATA FETCHING ---
async function getData() {
  const query = `{
    "projects": *[_type == "project"] {
      _id, title, slug, description, image, techStack, demoLink, repoLink
    },
    "certificates": *[_type == "certificate"] {
      _id, title, issuer, image, link
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const { projects, certificates } = await getData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      <Hero />
      
      <TechStack />
      
      <ScrollAnimation>
        <About />
      </ScrollAnimation>

      <section id="projects" className="container mx-auto px-4 py-24">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Featured Projects
          </h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <ScrollAnimation key={project._id} delay={index * 0.1}>
                <div className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full">
                
                <div className="relative h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    {project.image ? (
                    <Image 
                        src={urlFor(project.image).url()} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">No Image</div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                            {project.title}
                        </h3>
                        
                        <div className="flex gap-3">
                            {project.repoLink && (
                                <Link href={project.repoLink} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                    <Github className="w-5 h-5" />
                                </Link>
                            )}
                            {project.demoLink && (
                                <Link href={project.demoLink} target="_blank" className="text-muted-foreground hover:text-blue-500 transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </div>

                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack?.map((tag) => (
                        <span key={tag} className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 border-y border-border">
        <div className="container mx-auto px-4">
            <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            </ScrollAnimation>
            
            <div className="flex flex-wrap justify-center gap-6">
                {certificates.map((cert: Certificate, index: number) => (
                    // Added delay for cascading effect
                    <ScrollAnimation key={cert._id} delay={index * 0.1} className="w-full max-w-sm">
                        <div className="relative group bg-background border border-border p-4 rounded-xl hover:border-blue-500 transition-colors h-full">
                            <div className="flex items-center gap-4">
                                {cert.image && (
                                    <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-border">
                                        <Image 
                                            src={urlFor(cert.image).url()} 
                                            alt={cert.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-lg leading-tight">{cert.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                </div>
                            </div>
                            
                            {cert.link && (
                                <Link 
                                    href={cert.link} 
                                    target="_blank"
                                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
      </section>

      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>

    </main>
  );
}