import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  isDark: boolean;
  toggle: () => void;
}

export default function Navbar({ isDark, toggle }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-gradient">
          SB
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          {/* Toggle Switch */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="relative w-16 h-8 rounded-full transition-colors duration-300"
              style={{
                background: isDark ? 'hsl(var(--muted))' : 'hsl(var(--primary))',
              }}
              aria-label="Toggle theme"
            >
              <span
                className="absolute top-1 w-6 h-6 bg-background rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                style={{
                  left: isDark ? '4px' : 'calc(100% - 29px)',
                }}
              >
                {isDark ? (
                  <Moon size={14} className="text-muted-foreground" />
                ) : (
                  <Sun size={14} className="text-primary" />
                )}
              </span>
              <div className="absolute inset-0 flex items-center justify-between px-2.5">
                <Moon
                  size={14}
                  className={`transition-opacity ${isDark ? 'opacity-60' : 'opacity-30'}`}
                  style={{ color: isDark ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))' }}
                />
                <Sun
                  size={14}
                  className={`transition-opacity ${isDark ? 'opacity-30' : 'opacity-60'}`}
                  style={{ color: isDark ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Toggle Switch */}
          <button
            onClick={toggle}
            className="relative w-14 h-7 rounded-full transition-colors duration-300"
            style={{
              background: isDark ? 'hsl(var(--muted))' : 'hsl(var(--primary))',
            }}
            aria-label="Toggle theme"
          >
            <span
              className="absolute top-0.5 w-6 h-6 bg-background rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
              style={{
                left: isDark ? '2px' : 'calc(100% - 26px)',
              }}
            >
              {isDark ? (
                <Moon size={12} className="text-muted-foreground" />
              ) : (
                <Sun size={12} className="text-primary" />
              )}
            </span>
            <div className="absolute inset-0 flex items-center justify-between px-2">
              <Moon
                size={12}
                className={`transition-opacity ${isDark ? 'opacity-60' : 'opacity-30'}`}
                style={{ color: isDark ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))' }}
              />
              <Sun
                size={12}
                className={`transition-opacity ${isDark ? 'opacity-30' : 'opacity-60'}`}
                style={{ color: isDark ? 'hsl(var(--muted-foreground))' : 'hsl(var(--primary-foreground))' }}
              />
            </div>
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
