export default function About() {
  return (
    <section id="about" className="relative py-0 bg-wood-dark overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[700px]">
        {/* Left half — tall wood grain panel */}
        <div
          className="relative w-full md:w-1/2 min-h-[280px] md:min-h-[700px]"
          style={{
            background: `
              repeating-linear-gradient(88deg, transparent 0px, transparent 4px, rgba(139, 105, 20, 0.06) 4px, rgba(139, 105, 20, 0.06) 7px),
              repeating-linear-gradient(2deg, transparent 0px, transparent 12px, rgba(200, 136, 42, 0.025) 12px, rgba(200, 136, 42, 0.025) 14px),
              linear-gradient(170deg, #252017 0%, #2a2218 20%, #1f1a14 40%, #252017 60%, #2a2218 80%, #1f1a14 100%)
            `,
          }}
        >
          {/* Abstract hand plane SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.22]">
            <svg width="280" height="400" viewBox="0 0 280 400" fill="none" stroke="#c8882a" strokeWidth="1">
              <rect x="60" y="140" width="160" height="45" rx="3" />
              <line x1="140" y1="140" x2="140" y2="185" />
              <rect x="120" y="110" width="40" height="30" rx="8" />
              <line x1="138" y1="185" x2="138" y2="210" strokeWidth="2" />
              <path d="M138,210 Q150,230 140,250 Q130,270 145,280" strokeWidth="1" />
              <line x1="30" y1="320" x2="250" y2="320" />
              <line x1="30" y1="325" x2="250" y2="325" />
              <line x1="80" y1="325" x2="80" y2="380" />
              <line x1="200" y1="325" x2="200" y2="380" />
              <line x1="80" y1="352" x2="200" y2="352" />
            </svg>
          </div>

          {/* Vertical text */}
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-8 reveal-left">
            <p
              className="font-body text-[11px] tracking-[0.4em] text-wood-muted uppercase"
              style={{ writingMode: 'vertical-rl' }}
            >
              Craftsman&apos;s Workshop
            </p>
          </div>
        </div>

        {/* Right half — text */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="px-6 md:px-8 lg:px-20 py-16 md:py-0 max-w-xl">
            <p className="reveal font-body text-[12px] md:text-[13px] font-medium tracking-[0.35em] text-wood-muted mb-4 uppercase">
              The Maker
            </p>
            <h2
              className="reveal stagger-1 font-playfair font-bold text-wood-text mb-8 md:mb-10"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '0.03em' }}
            >
              About R.A.C.
            </h2>

            <div className="space-y-6">
              <p className="reveal stagger-2 font-body text-[16px] text-wood-text/90 leading-[1.9]">
                R.A.C. Woodworks is a one-person custom woodworking shop based in the Chicago suburbs.
                Every piece is designed, cut, and finished by hand — no shortcuts, no flat-pack, no compromises.
              </p>

              <p className="reveal stagger-3 font-body text-[16px] text-wood-muted leading-[1.9]">
                I work with sustainably sourced hardwoods whenever possible, selecting each board
                for its grain, figure, and character. Whether it is a dining table that will host a
                thousand memories or a custom bookcase that fits your space perfectly, every project
                receives the same attention to detail.
              </p>

              <div className="reveal stagger-4 h-px w-16 bg-amber/30 my-8" />

              <div className="reveal stagger-5">
                <p className="font-body text-[12px] md:text-[13px] font-medium tracking-[0.3em] text-amber/70 mb-5 uppercase">
                  Why Work With Me
                </p>
                <ul className="space-y-3">
                  {[
                    'Direct communication throughout the process',
                    'Hand-finished details and premium materials',
                    'Custom design tailored to your space',
                    'Timeless pieces built to last generations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber/60 mt-2 shrink-0" />
                      <span className="font-body text-[16px] text-wood-muted leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
