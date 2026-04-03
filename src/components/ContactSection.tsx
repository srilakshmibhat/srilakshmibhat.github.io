import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-24 bg-secondary/30 transition-colors duration-300 overflow-hidden">
      {/* Background blobs matching hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className={`text-muted-foreground max-w-lg mx-auto mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <a
            href="mailto:bhatsrilakshmi@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> tmbhatsrilakshmi@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/srilakshmi-t-m-bhat-a925a4197/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card text-foreground font-medium card-elevated"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="tel:9916310298"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card text-foreground font-medium card-elevated"
          >
            <Phone size={18} /> 9916310298
          </a>
        </div>
      </div>
    </section>
  );
}
