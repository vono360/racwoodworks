import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    timeline: 'exploring',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', description: '', timeline: 'exploring' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('An error occurred. Please check your connection and try again.');
    }
  };

  const inputBase =
    'w-full bg-transparent border-b border-wood-muted/30 py-4 text-wood-text font-body text-[14px] placeholder:text-wood-muted/40 transition-all duration-500 focus:border-amber focus:outline-none';

  return (
    <section id="contact" className="relative py-40 px-8 lg:px-16 bg-wood-surface">
      <div className="max-w-[700px] mx-auto">
        <p className="reveal font-body text-[10px] font-medium tracking-[0.35em] text-wood-muted mb-4 uppercase">
          Start a Project
        </p>
        <h2
          className="reveal stagger-1 font-playfair font-bold text-wood-text mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.03em' }}
        >
          Get in Touch
        </h2>
        <p className="reveal stagger-2 font-body text-[14px] text-wood-muted leading-[1.8] mb-16 max-w-md">
          Have something in mind? I would love to hear about it. Every project starts with a conversation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="reveal stagger-2">
            <label htmlFor="name" className="block font-body text-[10px] font-medium tracking-[0.25em] text-wood-muted/70 mb-2 uppercase">
              Name
            </label>
            <input
              type="text" id="name" name="name" required
              value={formData.name} onChange={handleChange}
              className={inputBase} placeholder="Your name"
            />
          </div>

          <div className="reveal stagger-3">
            <label htmlFor="email" className="block font-body text-[10px] font-medium tracking-[0.25em] text-wood-muted/70 mb-2 uppercase">
              Email
            </label>
            <input
              type="email" id="email" name="email" required
              value={formData.email} onChange={handleChange}
              className={inputBase} placeholder="your@email.com"
            />
          </div>

          <div className="reveal stagger-4">
            <label htmlFor="description" className="block font-body text-[10px] font-medium tracking-[0.25em] text-wood-muted/70 mb-2 uppercase">
              Project Description
            </label>
            <textarea
              id="description" name="description" required rows="4"
              value={formData.description} onChange={handleChange}
              className={`${inputBase} resize-none`}
              placeholder="Describe your vision, space, and any special requirements..."
            />
          </div>

          <div className="reveal stagger-5">
            <label htmlFor="timeline" className="block font-body text-[10px] font-medium tracking-[0.25em] text-wood-muted/70 mb-2 uppercase">
              Timeline
            </label>
            <select
              id="timeline" name="timeline"
              value={formData.timeline} onChange={handleChange}
              className={inputBase}
              style={{ WebkitAppearance: 'none', appearance: 'none', cursor: 'pointer' }}
            >
              <option value="exploring">Just exploring</option>
              <option value="asap">As soon as possible</option>
              <option value="1-3-months">1 to 3 months</option>
              <option value="3-6-months">3 to 6 months</option>
            </select>
          </div>

          <div className="reveal stagger-6 pt-4">
            <button
              type="submit"
              className="group flex items-center gap-4 py-4 bg-transparent border-b border-amber text-amber font-body text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-500 hover:text-wood-text hover:border-wood-text"
            >
              <span>Send message</span>
              <span className="inline-block w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
            </button>
          </div>

          {submitted && (
            <div className="py-4 border-b border-amber/30">
              <p className="font-body text-[13px] text-amber">Message sent. I will be in touch within 24 to 48 hours.</p>
            </div>
          )}

          {error && (
            <div className="py-4 border-b border-red-500/30">
              <p className="font-body text-[13px] text-red-400">{error}</p>
            </div>
          )}
        </form>

        <div className="reveal mt-24">
          <div className="h-px w-full bg-amber/15 mb-10" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-body text-[13px] text-wood-muted">
              Free consultation. Response within 48 hours.
            </p>
            <a
              href="https://www.instagram.com/r.a.c.woodworks/"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber transition-colors duration-500 group-hover:text-wood-text">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
              <span className="font-body text-[12px] tracking-[0.1em] text-amber transition-colors duration-500 group-hover:text-wood-text">
                @r.a.c.woodworks
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
