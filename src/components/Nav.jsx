import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Work', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'nav-glass bg-wood-dark/85 border-b border-amber/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="text-left group">
          <span
            className="font-playfair text-[26px] font-bold tracking-[0.05em] text-wood-text transition-colors duration-500 group-hover:text-amber block"
            style={{ lineHeight: 1 }}
          >
            R.A.C.
          </span>
          <span
            className="font-body text-[9px] font-medium tracking-[0.4em] text-wood-muted mt-1 block uppercase"
          >
            Woodworks
          </span>
        </button>

        {/* Desktop links separated by thin vertical dividers */}
        <div className="hidden md:flex items-center">
          {links.map((link, i) => (
            <div key={link.id} className="flex items-center">
              {i > 0 && (
                <span className="w-px h-3 bg-amber/30 mx-8" />
              )}
              <button
                onClick={() => scrollTo(link.id)}
                className="hover-underline font-body text-[11px] font-medium tracking-[0.18em] text-wood-muted hover:text-wood-text transition-colors duration-500 uppercase"
              >
                {link.label}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-wood-text transition-all duration-500 ${mobileOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-wood-text transition-all duration-500 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-wood-text transition-all duration-500 ${mobileOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 bg-wood-dark/95 nav-glass ${
          mobileOpen ? 'max-h-64 border-b border-amber/20' : 'max-h-0'
        }`}
      >
        <div className="px-8 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-body text-[11px] font-medium tracking-[0.18em] text-wood-muted hover:text-wood-text transition-colors duration-500 text-left uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
