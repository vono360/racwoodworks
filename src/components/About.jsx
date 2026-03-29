import { useEffect } from 'react';

const WorkshopSVG = () => (
  <svg
    viewBox="0 0 400 500"
    className="w-full h-full max-w-md mx-auto"
    style={{ opacity: 0.8 }}
  >
    {/* Workbench surface */}
    <rect x="50" y="280" width="300" height="40" fill="#8b6914" />
    <rect x="50" y="310" width="300" height="30" fill="#6b5210" opacity="0.6" />

    {/* Workbench legs */}
    <rect x="60" y="310" width="15" height="120" fill="#5a4a35" />
    <rect x="325" y="310" width="15" height="120" fill="#5a4a35" />

    {/* Vise */}
    <circle cx="80" cy="270" r="20" fill="none" stroke="#c8882a" strokeWidth="3" />
    <line x1="95" y1="270" x2="130" y2="270" stroke="#c8882a" strokeWidth="2" />

    {/* Lumber stack */}
    <rect x="200" y="180" width="50" height="120" fill="#a68a65" />
    <rect x="220" y="175" width="50" height="120" fill="#8b7a55" />
    <rect x="240" y="170" width="50" height="120" fill="#6b5a35" />

    {/* Tool rack */}
    <rect x="30" y="100" width="280" height="50" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.6" />

    {/* Tools on rack - simple geometric shapes */}
    <line x1="50" y1="100" x2="50" y2="150" stroke="#c8882a" strokeWidth="3" opacity="0.7" />
    <circle cx="50" cy="90" r="8" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.7" />

    <line x1="100" y1="100" x2="100" y2="160" stroke="#c8882a" strokeWidth="3" opacity="0.7" />
    <line x1="95" y1="165" x2="105" y2="165" stroke="#c8882a" strokeWidth="2" opacity="0.7" />

    <polygon points="150,100 155,150 145,150" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.7" />

    <rect x="190" y="120" width="20" height="30" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.7" />
    <circle cx="200" cy="165" r="8" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.7" />

    <line x1="250" y1="110" x2="250" y2="140" stroke="#c8882a" strokeWidth="3" opacity="0.7" />
    <circle cx="250" cy="100" r="10" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.7" />

    {/* Window */}
    <rect x="310" y="60" width="70" height="60" fill="none" stroke="#c8882a" strokeWidth="2" opacity="0.4" />
    <line x1="345" y1="60" x2="345" y2="120" stroke="#c8882a" strokeWidth="1" opacity="0.3" />
    <line x1="310" y1="90" x2="380" y2="90" stroke="#c8882a" strokeWidth="1" opacity="0.3" />

    {/* Decorative text */}
    <text x="200" y="420" textAnchor="middle" fill="#c8882a" fontSize="24" fontFamily="'Playfair Display'" opacity="0.6">
      Craftsman's Space
    </text>
  </svg>
);

export default function About() {
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
    <section id="about" className="py-24 px-6 bg-wood-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-heading font-bold text-wood-text text-center mb-16 fade-in-on-scroll">
          About
        </h2>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: SVG Workshop */}
          <div className="fade-in-on-scroll">
            <WorkshopSVG />
          </div>

          {/* Right: Text */}
          <div className="fade-in-on-scroll">
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-amber-wood mb-4">
                  Handcrafted with Purpose
                </h3>
                <p className="font-dm-sans text-wood-text leading-relaxed">
                  R.A.C. Woodworks is a one-person custom woodworking shop based in the Chicago suburbs.
                  Every piece is designed, cut, and finished by hand — no shortcuts, no flat-pack, no compromises.
                </p>
              </div>

              <div>
                <p className="font-dm-sans text-wood-text leading-relaxed">
                  I work with sustainably sourced hardwoods whenever possible, selecting each board for its grain,
                  figure, and character. Whether it's a dining table that will host a thousand memories or a
                  custom bookcase that fits your space perfectly, every project gets the same attention to detail.
                </p>
              </div>

              <div className="pt-6 border-t border-amber-wood border-opacity-20">
                <h4 className="font-playfair text-lg font-bold text-wood-text mb-3">
                  Why Work With Me
                </h4>
                <ul className="font-dm-sans text-sm text-wood-muted space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-wood mt-1">▪</span>
                    <span>Direct communication throughout the process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-wood mt-1">▪</span>
                    <span>Hand-finished details and premium materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-wood mt-1">▪</span>
                    <span>Custom design tailored to your space and style</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-wood mt-1">▪</span>
                    <span>Timeless pieces built to last generations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
