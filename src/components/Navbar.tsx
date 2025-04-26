
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links (in Khmer)
  const navLinks = [
    { name: 'ទំព័រដើម', href: '#hero' },
    { name: 'អំពីយើង', href: '#about' },
    { name: 'សេវាកម្ម', href: '#services' },
    { name: 'ជោគជ័យ', href: '#testimonials' },
    { name: 'ដំណើរការ', href: '#process' },
    { name: 'ទំនាក់ទំនង', href: '#contact' },
  ];

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-japanNavy/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sakura dark:bg-sakura rounded-full flex items-center justify-center">
            <span className="font-bold text-japanNavy dark:text-white">JK</span>
          </div>
          <span className="font-bold text-lg text-japanNavy dark:text-white">ជប៉ុន-ខ្មែរ</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-japanNavy dark:text-white hover:text-sakura dark:hover:text-sakura transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-japanNavy dark:text-white"
            aria-label={mobileMenuOpen ? "បិទម៉ឺនុយ (Close menu)" : "បើកម៉ឺនុយ (Open menu)"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-japanNavy py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-japanNavy dark:text-white hover:text-sakura dark:hover:text-sakura transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
