import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Monitor, HeartPulse, Tv } from "lucide-react";

const projects = [
  {
    icon: Monitor,
    title: "NGDCI Admin UI",
    tech: ["Node.js", "Express", "Java", "UI5"],
    description:
      "End-to-end dashboard to monitor real-time onboarding status across multiple datacenters. Designed system architecture, backend APIs, UI, and data aggregation logic.",
  },
  {
    icon: HeartPulse,
    title: "Covid Management System",
    tech: ["React", "Spring Boot", "MySQL", "AWS"],
    description:
      "Full stack healthcare platform for booking tests, vaccinations, and managing patient workflows. Implemented admin features for hospitals, billing, and quarantine centers.",
  },
  {
    icon: Tv,
    title: "WatchParty App",
    tech: ["React", "Node.js", "WebSocket", "AWS"],
    description:
      "Real-time watch-together application where users can create a party and watch synchronized video with live chat functionality.",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className={`text-center text-muted-foreground max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Some of the impactful projects I've built
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.title}
                className={`group bg-card rounded-2xl p-6 card-elevated flex flex-col ${isVisible ? "animate-fade-up" : "opacity-0"}`}
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
