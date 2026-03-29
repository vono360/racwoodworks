import { useState, useEffect } from 'react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'glass bg-opacity-30 bg-wood-dark backdrop-blur-md border-b border-amber-wood border-opacity-30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <h1 className="font-playfair text-3xl font-bold text-amber-wood">R.A.C.</h1>
          <p className="font-dm-sans text-xs tracking-widest text-wood-muted">WOODWORKS</p>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12 text-wood-text font-dm-sans text-sm tracking-wide">
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-amber-wood transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="hover:text-amber-wood transition-colors"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-amber-wood transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-amber-wood transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
