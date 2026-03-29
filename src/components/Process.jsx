import { useEffect } from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="fade-in-on-scroll flex flex-col items-center text-center relative">
      {/* Step Number */}
      <div className="w-16 h-16 rounded-full border-2 border-amber-wood border-opacity-40 flex items-center justify-center mb-6 bg-wood-surface bg-opacity-30">
        <span className="font-playfair text-3xl font-bold text-amber-wood text-opacity-60">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-playfair text-2xl font-bold text-wood-text mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-dm-sans text-sm text-wood-muted max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default function Process() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 px-6 bg-wood-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-on-scroll">
          <h2 className="font-playfair text-heading font-bold text-wood-text mb-4">
            How It Works
          </h2>
          <p className="font-dm-sans text-wood-muted max-w-2xl mx-auto">
            From initial concept to final delivery, here's our process.
          </p>
        </div>

        {/* Process Steps with Connecting Line */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-wood via-amber-wood to-amber-wood bg-opacity-20" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <ProcessStep
              number="01"
              title="Consult"
              description="We discuss your vision, needs, budget, and timeline. Understanding your space and style is the foundation of everything."
            />
            <ProcessStep
              number="02"
              title="Design"
              description="I create initial sketches and design mockups. You review, provide feedback, and we refine until it's perfect."
            />
            <ProcessStep
              number="03"
              title="Build"
              description="The crafting begins. You'll receive progress photos and updates throughout the building process."
            />
            <ProcessStep
              number="04"
              title="Deliver"
              description="Final finishing touches, quality inspection, and delivery. Your piece arrives ready to become part of your home."
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center fade-in-on-scroll">
          <p className="font-dm-sans text-sm text-wood-muted max-w-2xl mx-auto leading-relaxed">
            Most projects take 6–12 weeks from initial consultation to delivery, depending on complexity and your timeline.
          </p>
        </div>
      </div>
    </section>
  );
}
