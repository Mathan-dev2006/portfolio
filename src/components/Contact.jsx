import { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = 'mathandev2006@gmail.com';

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Please enter your name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return null;
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please provide a valid email address (e.g. name@company.com).';
        }
        return null;
      case 'message':
        if (!value.trim()) return 'Please enter your message.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return null;
      default:
        return null;
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      message: msgErr
    };

    setTouched({ name: true, email: true, message: true });
    setErrors(newErrors);

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setIsSubmitting(true);

    // Simulated async submission state with honest transparent client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
    }, 500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex flex-col items-start mb-16">
          <div className="section-label mb-3">05 — Contact</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Let's build something useful.
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            I'm actively seeking opportunities to learn, contribute and grow as a full-stack / frontend developer.
            Feel free to connect or send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Direct Channels</span>
              </h3>

              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider">
                    Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code text-sky-400 hover:text-sky-300 transition-colors cursor-pointer bg-sky-500/10 hover:bg-sky-500/20 px-2 py-0.5 rounded border border-sky-500/25"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm font-mono-code text-white hover:text-sky-300 transition-colors break-all font-medium"
                >
                  {emailAddress}
                </a>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Location:</span> Madurai, Tamil Nadu, India
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <GithubIcon className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">GitHub:</span>{' '}
                    <a
                      href="https://github.com/Mathan-dev2006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      Mathan-dev2006
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <LinkedinIcon className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">LinkedIn:</span>{' '}
                    <a
                      href="https://www.linkedin.com/in/mathandev2006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      mathandev2006
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Note box */}
            <div className="p-4 rounded-xl bg-sky-500/[0.04] border border-sky-500/15 text-xs text-zinc-300 leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                Looking for Junior / Entry-Level Full-Stack or Frontend (React) roles. Available for code tests, technical discussions, and interviews.
              </span>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank you for your message!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Your message passed client verification. For immediate replies or scheduling interviews, you can also email directly to{' '}
                    <span className="text-sky-400 font-mono-code font-semibold">{emailAddress}</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono-code text-zinc-300 uppercase tracking-wider mb-2 font-medium"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="e.g. Anand Kumar"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors ${
                        errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/[0.08] focus:border-sky-500/40'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono-code text-zinc-300 uppercase tracking-wider mb-2 font-medium"
                    >
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="e.g. anand@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors ${
                        errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/[0.08] focus:border-sky-500/40'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono-code text-zinc-300 uppercase tracking-wider mb-2 font-medium"
                    >
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Hi Mathan, we have an opening for a junior full-stack developer..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors ${
                        errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/[0.08] focus:border-sky-500/40'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-zinc-950 bg-sky-400 hover:bg-sky-300 disabled:opacity-50 transition-all duration-200 cursor-pointer shadow-lg shadow-sky-400/20 hover:shadow-sky-400/30 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Validating...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-500 font-mono-code">
                    * Client validation active. Direct inbox notification ready for server hook.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
