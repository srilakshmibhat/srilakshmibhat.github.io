import { ArrowDown, Mail, Linkedin, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Image and Name Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-6">
          {/* Profile Image */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-hero rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img 
                src="/me.jpg" 
                alt="Srilakshmi Bhat" 
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>

          {/* Name Heading */}
          <div className="text-center md:text-left animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Heyy!<br />
              I'm <span className="text-gradient">Srilakshmi Bhat</span>
            </h1>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Building scalable microservices and high-performance, secure applications with Java, React & modern cloud technologies at SAP Labs.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
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

        <div className="flex justify-center">
          <a href="#about" className="inline-flex animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <ArrowDown size={24} className="text-muted-foreground animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
