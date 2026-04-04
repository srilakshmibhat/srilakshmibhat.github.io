import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FunFactsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="funfacts" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          On a more <span className="text-gradient">casual note</span>
        </h2>
        
        <div className={`max-w-3xl mx-auto mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            When I'm not coding, you'll find me exploring new cafes for the perfect cup of coffee ☕ <br />
            Listening to music while debugging 🎵, or planning my next adventure to Japan 🗾. <br />
            I love playing badminton, pool, chess and video games, and I'm always up for a good game! 🏸 <br />
            I also workout regularly 💪, and I'm a big fan of outdoor activities like hiking and cycling 🚴‍♂️.
          </p>
        </div>
      </div>
    </section>
  );
}
