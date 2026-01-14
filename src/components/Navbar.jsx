import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeXml,  } from "lucide-react";
import { Container } from './Container';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="border-b border-stroke-1 bg-n-9 sticky top-0 z-50">
      <Container>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <a href="#"
                className="flex items-center  font-bold  text-3xl md:text-xl"
            >
                
                <CodeXml className="mr-2"/>
                EZE
                <span className="text-p-3">CODE</span>
            </a>

          </Link>

          {/* Navigation mobile*/}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-n-1 hover:text-p-3 transition-colors font-medium"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1 relative w-8 h-8 p-1"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 bg-n-1 transition-all duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-n-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />    
            <span
              className={`block w-6 h-0.5 bg-n-1 transition-all duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-3 pt-2 border-t border-stroke-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="text-n-1 hover:text-p-3 transition-colors font-medium py-2 px-0"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
