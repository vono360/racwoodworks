const projects = [
  {
    title: 'Walnut Dining Table',
    wood: 'Black Walnut',
    description: 'Live-edge slab, hand-rubbed oil finish. Seats eight comfortably.',
    gradient: 'linear-gradient(135deg, #4a3020 0%, #6a4538 35%, #5a3828 65%, #4a3020 100%)',
    grain: 'repeating-linear-gradient(88deg, transparent 0px, transparent 3px, rgba(106, 69, 56, 0.5) 3px, rgba(106, 69, 56, 0.5) 5px)',
  },
  {
    title: 'White Oak Bookcase',
    wood: 'White Oak',
    description: 'Floor-to-ceiling built-in. Quartersawn oak with visible ray fleck.',
    gradient: 'linear-gradient(135deg, #6a6050 0%, #8a8070 35%, #7a7060 65%, #6a6050 100%)',
    grain: 'repeating-linear-gradient(92deg, transparent 0px, transparent 4px, rgba(138, 128, 112, 0.45) 4px, rgba(138, 128, 112, 0.45) 6px)',
  },
  {
    title: 'Cherry Entry Console',
    wood: 'Cherry',
    description: 'Narrow profile, dovetailed drawers. Finished to deepen with age.',
    gradient: 'linear-gradient(135deg, #6a4538 0%, #8a5548 35%, #7a4d40 65%, #6a4538 100%)',
    grain: 'repeating-linear-gradient(85deg, transparent 0px, transparent 3px, rgba(138, 85, 72, 0.45) 3px, rgba(138, 85, 72, 0.45) 5px)',
  },
  {
    title: 'Maple Cutting Boards',
    wood: 'Hard Maple',
    description: 'End-grain construction. Food-safe mineral oil and beeswax finish.',
    gradient: 'linear-gradient(135deg, #7a6a50 0%, #9a8a70 35%, #8a7a60 65%, #7a6a50 100%)',
    grain: 'repeating-linear-gradient(90deg, transparent 0px, transparent 4px, rgba(154, 138, 112, 0.4) 4px, rgba(154, 138, 112, 0.4) 6px)',
  },
  {
    title: 'Built-In Home Office',
    wood: 'Dark Walnut',
    description: 'Full wall system with floating desk, shelving, and hidden cable management.',
    gradient: 'linear-gradient(135deg, #3a2f28 0%, #4a3f38 35%, #423528 65%, #3a2f28 100%)',
    grain: 'repeating-linear-gradient(87deg, transparent 0px, transparent 3px, rgba(74, 63, 56, 0.5) 3px, rgba(74, 63, 56, 0.5) 5px)',
  },
  {
    title: 'Live Edge Coffee Table',
    wood: 'Elm',
    description: 'Natural edge preserved. Butterfly keys stabilize a dramatic crack.',
    gradient: 'linear-gradient(155deg, #5a4a3e 0%, #6a5a4e 30%, #4d4230 60%, #5a4a3e 100%)',
    grain: 'repeating-linear-gradient(95deg, transparent 0px, transparent 5px, rgba(106, 90, 78, 0.4) 5px, rgba(106, 90, 78, 0.4) 8px), repeating-linear-gradient(175deg, transparent 0px, transparent 12px, rgba(77, 66, 48, 0.25) 12px, rgba(77, 66, 48, 0.25) 14px)',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 md:py-40 bg-wood-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
        <p className="reveal font-body text-[12px] md:text-[13px] font-medium tracking-[0.35em] text-wood-muted mb-4 uppercase">
          Selected Projects
        </p>
        <h2
          className="reveal stagger-1 font-playfair font-bold text-wood-text mb-12 md:mb-24"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '0.03em' }}
        >
          Recent Work
        </h2>
      </div>

      <div className="space-y-1">
        {projects.map((project, i) => {
          const reversed = i % 2 !== 0;
          return (
            <div
              key={project.title}
              className="reveal w-full"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[200px]`}>
                <div
                  className="relative w-full md:w-[38%] min-h-[200px] md:min-h-[220px] overflow-hidden"
                  style={{ background: `${project.grain}, ${project.gradient}` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px)' }}
                  />
                </div>
                <div className={`flex-1 flex items-center bg-wood-surface/50 ${reversed ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className={`px-6 md:px-8 lg:px-16 py-8 md:py-0 max-w-lg ${reversed ? 'md:text-right' : ''}`}>
                    <p className="font-body text-[12px] font-medium tracking-[0.3em] text-amber/70 mb-3 uppercase">
                      {project.wood}
                    </p>
                    <h3 className="font-playfair text-[24px] font-semibold text-wood-text tracking-wide mb-3">
                      {project.title}
                    </h3>
                    <p className="font-body text-[16px] text-wood-muted leading-[1.7]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
