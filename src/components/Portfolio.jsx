import { useEffect } from 'react';

const PortfolioItem = ({ title, gradientBg, colSpan = 1 }) => {
  return (
    <div
      className={`group relative h-64 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 col-span-${colSpan}`}
      style={{ background: gradientBg }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
        <h3 className="font-playfair text-lg font-bold text-wood-text">{title}</h3>
        <div className="h-1 w-12 bg-amber-wood mt-2 animate-in" />
      </div>
    </div>
  );
};

export default function Portfolio() {
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

  const portfolioItems = [
    {
      title: 'Walnut Dining Table',
      gradient: `
        linear-gradient(135deg, #3d2817 0%, #2a1810 25%, #4a3220 50%, #2a1810 75%, #3d2817 100%),
        repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(200, 136, 42, 0.1) 2px, rgba(200, 136, 42, 0.1) 4px),
        linear-gradient(45deg, #1a1612, #252017)
      `,
    },
    {
      title: 'White Oak Bookcase',
      gradient: `
        linear-gradient(45deg, #4a4035 0%, #3d3428 25%, #5a5045 50%, #3d3428 75%, #4a4035 100%),
        repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(139, 105, 20, 0.08) 1px, rgba(139, 105, 20, 0.08) 3px),
        linear-gradient(180deg, #252017, #1a1612)
      `,
    },
    {
      title: 'Cherry Entry Console',
      gradient: `
        linear-gradient(110deg, #5a3a2e 0%, #3d2820 30%, #6a4a3e 60%, #3d2820 85%, #5a3a2e 100%),
        repeating-linear-gradient(25deg, transparent 0px, transparent 3px, rgba(200, 136, 42, 0.06) 3px, rgba(200, 136, 42, 0.06) 6px),
        linear-gradient(90deg, #1a1612, #252017)
      `,
    },
    {
      title: 'Maple Cutting Boards',
      gradient: `
        linear-gradient(75deg, #5a4a35 0%, #4a3a28 25%, #6a5a45 50%, #4a3a28 75%, #5a4a35 100%),
        repeating-linear-gradient(45deg, transparent 0px, transparent 2px, rgba(139, 105, 20, 0.07) 2px, rgba(139, 105, 20, 0.07) 4px),
        linear-gradient(270deg, #252017, #1a1612)
      `,
    },
    {
      title: 'Built-In Office',
      gradient: `
        linear-gradient(60deg, #3a2f28 0%, #2a1f18 20%, #4a3f38 40%, #2a1f18 60%, #3a2f28 100%),
        repeating-linear-gradient(15deg, transparent 0px, transparent 1px, rgba(200, 136, 42, 0.05) 1px, rgba(200, 136, 42, 0.05) 3px),
        linear-gradient(180deg, #1a1612, #252017)
      `,
    },
    {
      title: 'Live Edge Coffee Table',
      gradient: `
        linear-gradient(155deg, #4a3a2e 0%, #3d3220 25%, #5a4a3e 50%, #3d3220 75%, #4a3a2e 100%),
        repeating-linear-gradient(120deg, transparent 0px, transparent 2px, rgba(200, 136, 42, 0.08) 2px, rgba(200, 136, 42, 0.08) 4px),
        linear-gradient(45deg, #252017, #1a1612)
      `,
    },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-wood-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="font-playfair text-heading font-bold text-wood-text mb-4">
            Recent Work
          </h2>
          <p className="font-dm-sans text-wood-muted max-w-2xl mx-auto">
            Each piece tells a story. Here's a selection of recent projects.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="fade-in-on-scroll">
              <PortfolioItem
                title={item.title}
                gradientBg={item.gradient}
                colSpan={idx === 2 ? 1 : 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
