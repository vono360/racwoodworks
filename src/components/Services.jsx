const services = [
  {
    num: '01',
    title: 'Custom Furniture',
    description: 'Dining tables, desks, shelving, bedroom sets — designed and built to your exact specifications. Every joint hand-cut, every surface hand-finished.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c8882a" strokeWidth="1.2">
        <rect x="6" y="4" width="20" height="14" rx="1" />
        <line x1="10" y1="18" x2="10" y2="28" />
        <line x1="22" y1="18" x2="22" y2="28" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Built-Ins & Cabinetry',
    description: 'Kitchen islands, bookshelves, home offices — seamlessly integrated into your space. Measured, designed, and installed with precision.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c8882a" strokeWidth="1.2">
        <rect x="4" y="4" width="24" height="24" rx="1" />
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="4" y1="16" x2="28" y2="16" />
        <circle cx="12" cy="10" r="1" />
        <circle cx="22" cy="10" r="1" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Small Batch & Specialty',
    description: 'Cutting boards, serving pieces, gifts, and one-of-a-kind commissions. Small in scale, equal in craft and attention to detail.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c8882a" strokeWidth="1.2">
        <rect x="8" y="10" width="16" height="12" rx="2" />
        <line x1="8" y1="16" x2="24" y2="16" />
        <line x1="16" y1="6" x2="16" y2="10" />
        <circle cx="16" cy="5" r="1.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="relative py-40 px-8 lg:px-16 bg-wood-dark">
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal font-body text-[10px] font-medium tracking-[0.35em] text-wood-muted mb-4 uppercase">
          What I Build
        </p>
        <h2
          className="reveal stagger-1 font-playfair font-bold text-wood-text mb-24"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.03em' }}
        >
          Services
        </h2>

        <div>
          {services.map((s, i) => (
            <div key={s.num}>
              {i === 0 && <div className="h-px bg-amber/20" />}
              <div
                className="reveal py-12 md:py-16 grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-12 items-start"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-5 md:block">
                  <span className="font-playfair text-[40px] font-bold text-amber/25 leading-none">
                    {s.num}
                  </span>
                  <div className="md:hidden">{s.icon}</div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="hidden md:block mt-1">{s.icon}</div>
                  <h3 className="font-playfair text-[22px] font-semibold text-wood-text tracking-wide">
                    {s.title}
                  </h3>
                </div>
                <p className="font-body text-[14px] text-wood-muted leading-[1.8] max-w-lg">
                  {s.description}
                </p>
              </div>
              <div className="h-px bg-amber/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
