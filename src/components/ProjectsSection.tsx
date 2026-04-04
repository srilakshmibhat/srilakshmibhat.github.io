import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Monitor, HeartPulse, Tv, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    icon: Monitor,
    title: "NGDCI Admin UI",
    tech: ["Node.js", "Express", "Java", "UI5"],
    description:
      "End-to-end dashboard to monitor real-time onboarding status across multiple datacenters. Designed system architecture, backend APIs, UI, and data aggregation logic.",
    github: null,
  },
  {
    icon: Sparkles,
    title: "AI-Based Candidate Verification",
    tech: ["Python", "Machine Learning", "FastAPI"],
    description:
      "AI-powered system for automated candidate verification using facial recognition, document validation, and behavioral analysis to ensure authenticity during remote assessments.",
    github: null,
  },
  {
    icon: Tv,
    title: "WatchParty App",
    tech: ["React", "Node.js", "WebSocket", "AWS"],
    description:
    "Real-time watch-together application where users can create a party and watch synchronized video with live chat functionality.",
    github: "https://github.com/srilakshmibhat/WatchParty",
  },
  {
    icon: HeartPulse,
    title: "Covid Management System",
    tech: ["React", "Spring Boot", "MySQL", "AWS"],
    description:
      "Full stack healthcare platform for booking tests, vaccinations, and managing patient workflows. Implemented admin features for hospitals, billing, and quarantine centers.",
    github: "https://github.com/srilakshmibhat/CovidCare-Covid-Mgmt-System",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const handleProjectClick = (projectTitle: string, githubUrl: string | null) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    } else {
      toast({
        title: "Internal Project",
        description: `${projectTitle} is an internal application and is not publicly available.`,
        duration: 4000,
      });
    }
  };  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className={`text-center text-muted-foreground max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Some of the impactful projects I've built. Click to go to the GitHub repository.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <div
                onClick={() => handleProjectClick(proj.title, proj.github)}
                key={proj.title}
                className={`group bg-card rounded-2xl p-6 card-elevated flex flex-col cursor-pointer hover:scale-105 transition-transform ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
