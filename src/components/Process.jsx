const steps = [
  {
    num: '01',
    title: 'Consult',
    description: 'We discuss your vision, space, budget, and timeline. Understanding what you need is the foundation of every project.',
  },
  {
    num: '02',
    title: 'Design',
    description: 'Sketches, material selection, and design refinement. We iterate together until every detail is right.',
  },
  {
    num: '03',
    title: 'Build',
    description: 'The making begins. You receive progress updates and photos as your piece takes shape in the workshop.',
  },
  {
    num: '04',
    title: 'Deliver',
    description: 'Final finishing, quality inspection, and careful delivery. Your piece arrives ready to last generations.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-40 px-8 lg:px-16 bg-wood-surface">
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal font-body text-[10px] font-medium tracking-[0.35em] text-wood-muted mb-4 uppercase">
          From Concept to Completion
        </p>
        <h2
          className="reveal stagger-1 font-playfair font-bold text-wood-text mb-24"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.03em' }}
        >
          The Process
        </h2>

        <div className="relative">
          <div
            className="absolute left-6 md:left-[60px] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(200, 136, 42, 0.3) 10%, rgba(200, 136, 42, 0.3) 90%, transparent)' }}
          />

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal relative grid grid-cols-[48px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="relative">
                  <span
                    className="font-playfair font-bold text-amber/20 leading-none block"
                    style={{ fontSize: 'clamp(48px, 5vw, 80px)' }}
                  >
                    {step.num}
                  </span>
                  <div className="absolute left-6 md:left-[60px] top-4 w-[7px] h-[7px] rounded-full bg-amber/60 -translate-x-[3px]" />
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="font-playfair text-[22px] font-semibold text-wood-text tracking-wide mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-[14px] text-wood-muted leading-[1.8] max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal stagger-6 mt-24 ml-0 md:ml-[168px]">
          <div className="h-px w-16 bg-amber/30 mb-6" />
          <p className="font-body text-[13px] text-wood-muted leading-[1.7] max-w-md">
            Most projects take 6 to 12 weeks from consultation to delivery, depending on complexity. Every timeline is discussed upfront.
          </p>
        </div>
      </div>
    </section>
  );
}
