export default function Footer() {
  return (
    <footer className="relative bg-wood-dark pt-0 pb-12 md:pb-16 px-6 md:px-8 lg:px-16">
      <div className="h-px bg-gradient-to-r from-transparent via-amber/25 to-transparent mb-12 md:mb-16" />

      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex items-baseline gap-3">
          <span className="font-playfair text-[20px] font-bold text-wood-text tracking-[0.05em]">
            R.A.C.
          </span>
          <span className="font-body text-[11px] font-medium tracking-[0.4em] text-wood-muted uppercase">
            Woodworks
          </span>
        </div>

        <p className="font-body text-[14px] text-wood-muted tracking-[0.15em]">
          Handmade in Illinois.
        </p>

        <a
          href="https://www.instagram.com/r.a.c.woodworks/"
          target="_blank" rel="noopener noreferrer"
          className="text-wood-muted hover:text-amber transition-colors duration-500 p-2"
          aria-label="R.A.C. Woodworks on Instagram"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto mt-10 md:mt-12">
        <p className="font-body text-[13px] text-wood-muted/50 tracking-[0.15em] text-center sm:text-left">
          &copy; {new Date().getFullYear()} R.A.C. Woodworks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
