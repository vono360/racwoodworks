import { useEffect, useRef } from 'react';

export default function Hero() {
  const chiseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chiseRef.current) {
        const scrolled = window.scrollY * 0.5;
        chiseRef.current.style.transform = `translateY(${scrolled}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* CSS Wood Grain Background */}
      <div
        className="absolute inset-0 drift-animation"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(200, 136, 42, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 105, 20, 0.08) 0%, transparent 50%),
            linear-gradient(45deg,
              #1a1612 0%,
              #252017 10%,
              #1f1a14 20%,
              #2a2420 30%,
              #1a1612 40%,
              #252017 50%,
              #1f1a14 60%,
              #2a2420 70%,
              #1a1612 80%,
              #252017 90%,
              #1a1612 100%
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 2px,
              rgba(139, 105, 20, 0.03) 2px,
              rgba(139, 105, 20, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 1px,
              rgba(200, 136, 42, 0.02) 1px,
              rgba(200, 136, 42, 0.02) 3px
            )
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0, 0 0',
        }}
      />

      {/* Decorative SVG Chisel */}
      <div
        ref={chiseRef}
        className="absolute top-1/4 right-10 opacity-20 pointer-events-none"
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="wood-accent"
        >
          {/* Chisel blade */}
          <rect x="85" y="20" width="30" height="100" stroke="#c8882a" strokeWidth="2" />
          {/* Chisel handle */}
          <rect x="70" y="120" width="60" height="40" stroke="#c8882a" strokeWidth="2" rx="5" />
          {/* Decorative lines */}
          <line x1="95" y1="20" x2="95" y2="120" stroke="#c8882a" strokeWidth="1" opacity="0.5" />
          <line x1="105" y1="20" x2="105" y2="120" stroke="#c8882a" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-hero font-bold text-wood-text leading-tight mb-4">
          Built by hand. <br /> Finished to last.
        </h1>
        <p className="font-dm-sans text-lg text-wood-muted mb-10 tracking-wide">
          Custom furniture and woodwork crafted in the Chicago area.
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('work');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-10 py-4 bg-amber-wood text-wood-dark font-dm-sans font-bold text-sm tracking-widest rounded hover:bg-amber-muted transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          SEE THE WORK
        </button>
      </div>
    </section>
  );
}
