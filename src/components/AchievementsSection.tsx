import { Trophy, Award, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Trophy,
    title: "Invent For Customers",
    event: "AI based Candidate Verification for HRs",
    description: "Won a month long hackathon where we built an AI-powered solution for automated recognition of candidate documents and verification of the same using AI",
  },
  {
    icon: Award,
    title: "Innvent 2.0",
    event: "Test Automation using NLP",
    description: "Won a month long hackathon where we created an AI-based test automation framework that generates test cases and automates testing using NLP, significantly reducing manual effort and improving testing efficiency.",
  },
  {
    icon: Star,
    title: "CypherQuest",
    event: "Fast growing e-commerce",
    description: "Won a 24 hour hackathon where we built an end-to-end solution for a fast-growing e-commerce website, focusing on optimizing their supply chain management.",
  }
];

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 bg-secondary/30 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Achievements & <span className="text-gradient">Recognition</span>
        </h2>
        <p className={`text-center text-muted-foreground max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Hackathons, competitions, and recognitions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            return (
              <div
                key={i}
                className={`bg-card rounded-2xl p-6 card-elevated flex flex-col ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{achievement.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{achievement.event}</p>
                <p className="text-sm text-muted-foreground flex-1">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
