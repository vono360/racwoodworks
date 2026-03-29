export default function Footer() {
  return (
    <footer className="bg-wood-dark border-t border-amber-wood border-opacity-20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-amber-wood">R.A.C.</h3>
            <p className="font-dm-sans text-xs tracking-widest text-wood-muted">WOODWORKS</p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="font-dm-sans text-sm text-wood-muted tracking-wide">
              Handmade in Illinois.
            </p>
          </div>

          {/* Instagram Link */}
          <div className="flex justify-end">
            <a
              href="https://www.instagram.com/r.a.c.woodworks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-wood hover:text-wood-text transition-colors"
              title="Visit R.A.C. Woodworks on Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-wood border-opacity-20 py-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-dm-sans text-xs text-wood-muted tracking-wide">
            © 2025 R.A.C. Woodworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
