import { Building2, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teams = [
  {
    name: "SAP Datasphere (Business Data Cloud)",
    highlights: [
      "Spearheaded scalable applications using UI5 with Typescript, Node.js and modern JavaScript frameworks",
      "Contributed to end-to-end feature ownership in an agile development environment, including system design discussions, threat modelling, code reviews and production deployments, consistently delivering high-quality, maintainable code.",
    ],
  },
  {
    name: "CLM (Cloud Lifecycle Management)",
    highlights: [
      "Setup real-time features using WebSockets improving data freshness and reducing polling overhead by 35%.",
      "Created cron jobs for periodic data sync across microservices, improving data consistency and reducing manual intervention.",
    ],
  },
  {
    name: "CALM (Cloud Application Lifecycle Management)",
    highlights: [
      "Architected and formulated a real-time onboarding monitoring platform using ReactJs and Java, supporting 5+ global datacenters.",
      "Designed distributed data aggregation pipelines handling 10K+ records/day, reducing API latency by 30%.",
    ],
  },
  {
    name: "SAP Concur",
    highlights: [
      "Contributed to SAP Concur by working on the expense report module, specifically handling bill/receipt upload functionality.",
      "Created and maintained RESTful APIs using Node.js, Nest.js and Java (Spring Boot) for microservices integration.",
    ],
  },
  {
    name: "Enable Now",
    highlights: [
      "Implemented backend security features including HMAC signature, XSS protection, session hijacking, and geoblocking.",
      "Integrated AI/ML capabilities by working with generative AI services, AI Core, AI Hub, GitHub Co-pilot and Joule, building APIs to enable intelligent automation and endpoints retrieving data-driven real-time insights and summaries.",
    ],
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className={`text-center text-muted-foreground max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Building enterprise-grade solutions at scale
        </p>

        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="bg-card rounded-2xl p-8 card-elevated relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero rounded-l-2xl" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pl-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">SAP Labs</h3>
                <p className="text-primary font-medium">Developer</p>
                <p className="text-sm text-muted-foreground">Whitefield, Bangalore • Aug 2022 – Present</p>
              </div>
            </div>

            <div className="space-y-8 pl-4">
              {teams.map((team, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="font-display text-lg font-semibold text-primary">{team.name}</h4>
                  <div className="space-y-2">
                    {team.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <ChevronRight size={16} className="text-primary mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
