import { useEffect } from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative p-8 border border-amber-wood border-opacity-20 rounded-lg bg-wood-surface bg-opacity-50 backdrop-blur-sm transition-all duration-300 hover:border-amber-wood hover:border-opacity-100 hover:-translate-y-2 hover:shadow-2xl">
      {/* Icon */}
      <div className="mb-6 text-amber-wood text-4xl">{icon}</div>

      {/* Title */}
      <h3 className="font-playfair text-2xl font-bold text-wood-text mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-dm-sans text-sm text-wood-muted leading-relaxed">
        {description}
      </p>

      {/* Hover underline */}
      <div className="absolute bottom-0 left-0 h-1 bg-amber-wood w-0 group-hover:w-full transition-all duration-300" />
    </div>
  );
};

export default function Services() {
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
    <section className="py-24 px-6 bg-wood-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="font-playfair text-heading font-bold text-wood-text mb-4">
            Services
          </h2>
          <p className="font-dm-sans text-wood-muted max-w-2xl mx-auto">
            Every project is custom-designed and built to your specifications. Here's what I specialize in.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in-on-scroll">
            <ServiceCard
              icon="🪑"
              title="Custom Furniture"
              description="Dining tables, chairs, shelving, bedroom pieces — designed and crafted specifically for your space and needs."
            />
          </div>
          <div className="fade-in-on-scroll" style={{ animationDelay: '0.1s' }}>
            <ServiceCard
              icon="🚪"
              title="Built-Ins & Cabinetry"
              description="Kitchen islands, living room shelving, home office systems — seamlessly integrated into your home."
            />
          </div>
          <div className="fade-in-on-scroll" style={{ animationDelay: '0.2s' }}>
            <ServiceCard
              icon="✨"
              title="Small Batch & Specialty"
              description="Cutting boards, serving pieces, gifts, and one-of-a-kind commissions — handcrafted with intention."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
