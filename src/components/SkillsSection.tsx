import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Layout, Server, Database, Wrench, TestTube } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "Angular", "HTML", "CSS", "UI5"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "Spring Boot"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SAP HANA"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Kubernetes", "Jenkins", "AWS"],
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: ["Mocha", "JUnit", "Jest", "Chai", "Selenium", "WebDriverIO"],
  },
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-secondary/30 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className={`text-center text-muted-foreground max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Technologies I work with on a daily basis
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`bg-card rounded-xl p-6 card-elevated ${isVisible ? "animate-scale-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
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
