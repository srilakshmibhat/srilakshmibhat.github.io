import { ArrowDown, Mail, Linkedin, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
          Full Stack Developer
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hi, I'm{" "}
          <span className="text-gradient">Srilakshmi Bhat</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Building scalable microservices and high-performance, secure applications with Java, React & modern cloud technologies at SAP Labs.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="mailto:bhatsrilakshmi@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> Get in Touch
          </a>
          <a
            href="/SrilakshmiBhatResume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            <Download size={18} /> Resume
          </a>
        </div>

        <a href="#about" className="inline-flex animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <ArrowDown size={24} className="text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
}
