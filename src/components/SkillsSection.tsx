import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Layout, Server, Database, Wrench, TestTube, Cloud } from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus,
  SiReact, SiAngular, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiNestjs, SiSpring,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiKubernetes, SiJenkins,
  SiMocha, SiJest, SiSelenium, SiSap
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { IconType } from "react-icons";

const categories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "Java", icon: DiJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "UI5", icon: SiSap },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Java", icon: DiJava },
      { name: "Spring Boot", icon: SiSpring },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SAP HANA", icon: SiSap },
    ],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "AWS", icon: Cloud },
    ],
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: [
      { name: "Mocha", icon: SiMocha },
      { name: "JUnit", icon: DiJava },
      { name: "Jest", icon: SiJest },
      { name: "Chai", icon: SiMocha },
      { name: "Selenium", icon: SiSelenium },
      { name: "WebDriverIO", icon: SiNodedotjs },
    ],
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
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default inline-flex items-center gap-1.5"
                      >
                        <SkillIcon className="text-base" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
