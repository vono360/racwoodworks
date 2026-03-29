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
      // TODO: Replace REPLACE_WITH_YOUR_FORM_ID with your actual Formspree form ID from formspree.io
      const response = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', description: '', timeline: 'exploring' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check that the form ID is configured correctly.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-wood-surface">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="font-playfair text-heading font-bold text-wood-text mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="font-dm-sans text-wood-muted max-w-xl mx-auto">
            Have an idea in mind? I'd love to hear about it. Fill out the form below and I'll get back to you within 24–48 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 fade-in-on-scroll">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-dm-sans text-sm font-medium text-wood-text mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-wood-dark text-wood-text border border-amber-wood border-opacity-30 rounded focus:outline-none focus:border-amber-wood focus:border-opacity-100 transition-colors font-dm-sans"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-dm-sans text-sm font-medium text-wood-text mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-wood-dark text-wood-text border border-amber-wood border-opacity-30 rounded focus:outline-none focus:border-amber-wood focus:border-opacity-100 transition-colors font-dm-sans"
              placeholder="john@example.com"
            />
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block font-dm-sans text-sm font-medium text-wood-text mb-2">
              Tell Me About Your Project
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-wood-dark text-wood-text border border-amber-wood border-opacity-30 rounded focus:outline-none focus:border-amber-wood focus:border-opacity-100 transition-colors font-dm-sans resize-none"
              placeholder="Describe your vision, style preferences, space constraints, and any special requests..."
            />
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block font-dm-sans text-sm font-medium text-wood-text mb-2">
              Preferred Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-wood-dark text-wood-text border border-amber-wood border-opacity-30 rounded focus:outline-none focus:border-amber-wood focus:border-opacity-100 transition-colors font-dm-sans"
            >
              <option value="asap">ASAP</option>
              <option value="1-3-months">1–3 months</option>
              <option value="3-6-months">3–6 months</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-amber-wood text-wood-dark font-dm-sans font-bold text-sm tracking-widest rounded hover:bg-amber-muted transition-all duration-300 hover:shadow-lg"
          >
            SEND MESSAGE
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-green-900 bg-opacity-30 border border-green-600 border-opacity-50 rounded text-green-200 font-dm-sans text-sm text-center">
              ✓ Message sent! I'll be in touch soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-900 bg-opacity-30 border border-red-600 border-opacity-50 rounded text-red-200 font-dm-sans text-sm text-center">
              {error}
            </div>
          )}
        </form>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-amber-wood border-opacity-20 text-center fade-in-on-scroll">
          <p className="font-dm-sans text-wood-muted text-sm mb-6">
            Response within 24–48 hours. All projects start with a free consultation.
          </p>
          <div className="space-y-4">
            <p className="font-dm-sans text-sm text-wood-text">
              Connect on Instagram for more behind-the-scenes looks at the workshop:
            </p>
            <a
              href="https://www.instagram.com/r.a.c.woodworks/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-wood text-amber-wood rounded hover:bg-amber-wood hover:text-wood-dark transition-all duration-300 font-dm-sans font-medium text-sm"
            >
              <span>@r.a.c.woodworks</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
