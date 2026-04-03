import { GraduationCap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/30 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="flex justify-center mb-6">
          <div className="inline-block px-6 py-2.5 rounded-full bg-primary/10 text-primary text-base font-medium animate-fade-up">
            Full Stack Developer with expertise in Java and React, passionate about building scalable and secure applications.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div className={`bg-card rounded-xl p-6 card-elevated ${isVisible ? "animate-slide-in-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium">M.Tech, BITS Pilani</p>
                <p className="text-sm text-muted-foreground">Software Engineering • CGPA: 8.4</p>
                <p className="text-xs text-muted-foreground">Aug 2022 – Jul 2024</p>
              </div>
              <div>
                <p className="font-medium">B.E, Dayananda Sagar Academy of Technology</p>
                <p className="text-sm text-muted-foreground">Computer Science and Engineering • CGPA: 9.2</p>
                <p className="text-xs text-muted-foreground">Jun 2018 – Jul 2022</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`bg-card rounded-xl p-6 card-elevated ${isVisible ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="text-accent" size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg">Certifications</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm">Space School — NASA, Houston, Texas (Yes, I went to NASA xD)</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm">CS50 — Harvard University</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm">Google IT Specialization — Coursera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
