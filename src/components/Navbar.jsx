import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section spy
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to Content Link for Keyboard / Screen Reader Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2 text-white no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            >
              <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center font-mono-code text-sm font-semibold text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-500/20 transition-all">
                M
              </span>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors leading-none">
                  MATHAN<span className="text-sky-400 ml-0.5">.M</span>
                </span>
                <span className="text-[10px] font-mono-code text-zinc-500 leading-none mt-1">
                  Full-Stack Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1 bg-[#121217]/80 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner shadow-black/40"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/35 font-semibold shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/Mathan-dev2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg border border-transparent hover:border-white/10 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mathandev2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg border border-transparent hover:border-white/10 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 hover:border-sky-500/40 px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenResume}
                className="text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/25 px-3 py-1.5 rounded-lg active:scale-95 transition-transform cursor-pointer"
              >
                Resume
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 text-zinc-200 hover:text-white rounded-lg bg-white/[0.05] border border-white/10 cursor-pointer active:scale-95 transition-transform"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[60px] z-50 bg-[#0a0a0c]/98 backdrop-blur-2xl px-6 pt-4 pb-10 flex flex-col justify-between overflow-y-auto border-t border-white/[0.08]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col gap-2 pt-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-xl min-h-[48px] transition-all ${
                      isActive
                        ? 'bg-sky-500/15 text-sky-300 border border-sky-500/25'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-sky-400" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-zinc-400">CONNECT</span>
                <span className="text-xs font-mono-code text-emerald-400">Madurai, TN, India</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Mathan-dev2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-zinc-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mathandev2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-zinc-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
