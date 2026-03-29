export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Wood grain background — dark walnut surface */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 25% 40%, rgba(200, 136, 42, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 60%, rgba(139, 105, 20, 0.04) 0%, transparent 55%),
            repeating-linear-gradient(
              87deg,
              transparent 0px, transparent 3px,
              rgba(139, 105, 20, 0.025) 3px, rgba(139, 105, 20, 0.025) 5px
            ),
            repeating-linear-gradient(
              2deg,
              transparent 0px, transparent 8px,
              rgba(200, 136, 42, 0.012) 8px, rgba(200, 136, 42, 0.012) 10px
            ),
            linear-gradient(
              170deg,
              #1a1612 0%, #1f1a14 15%, #252017 30%,
              #1a1612 45%, #2a2218 55%, #1f1a14 70%,
              #252017 85%, #1a1612 100%
            )
          `,
        }}
      />

      {/* Decorative dovetail joint SVG */}
      <div className="absolute top-32 right-12 lg:right-24 opacity-[0.10] pointer-events-none">
        <svg width="120" height="180" viewBox="0 0 120 180" fill="none" stroke="#c8882a" strokeWidth="1.5">
          <path d="M30,10 L50,10 L60,50 L50,90 L30,90 L20,50 Z" className="draw-stroke" />
          <path d="M60,50 L80,40 L90,50 L90,90 L80,100 L60,90 Z" className="draw-stroke" style={{ animationDelay: '1.3s' }} />
          <line x1="30" y1="120" x2="90" y2="120" className="draw-stroke" strokeWidth="1" style={{ animationDelay: '1.6s' }} />
          <line x1="30" y1="140" x2="90" y2="140" className="draw-stroke" strokeWidth="1" style={{ animationDelay: '1.8s' }} />
          <line x1="30" y1="160" x2="90" y2="160" className="draw-stroke" strokeWidth="1" style={{ animationDelay: '2.0s' }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-40">
        {/* Small label */}
        <p className="font-body text-[10px] font-medium tracking-[0.35em] text-wood-muted mb-10 hero-reveal uppercase">
          Custom Woodwork — Chicago Area
        </p>

        {/* Headline */}
        <h1 className="font-playfair font-bold text-wood-text leading-[1.05] mb-2">
          <span
            className="block hero-reveal"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '0.04em' }}
          >
            Built by hand.
          </span>
          <span
            className="block hero-reveal-delayed"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '0.04em' }}
          >
            Finished to last.
          </span>
        </h1>

        {/* Amber accent line */}
        <div className="h-px w-24 bg-amber hero-line mt-10 mb-10" />

        {/* Subtext */}
        <p className="font-body text-[15px] text-wood-muted leading-relaxed max-w-md tracking-wide hero-reveal-delayed">
          Custom furniture and woodwork crafted with intention, from sustainably sourced hardwoods.
        </p>

        {/* CTA — understated text + line */}
        <button
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 group flex items-center gap-4 hero-reveal-delayed"
          style={{ animationDelay: '0.9s' }}
        >
          <span className="font-body text-[11px] font-medium tracking-[0.2em] text-amber uppercase transition-colors duration-500 group-hover:text-wood-text">
            View the work
          </span>
          <span className="w-8 h-px bg-amber transition-all duration-500 group-hover:w-12 group-hover:bg-wood-text" />
        </button>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
    </section>
  );
}
