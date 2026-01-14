import { Container } from "./Container";
import { social } from "../constants";
import { Link } from "react-router-dom";

/**
 * Footer Component
 * Appears on all pages (wrapped by Layout)
 * Contains:
 * - Brand/name section
 * - Navigation links
 * - Social media links
 * - Copyright info
 */
export const Footer = () => {
  return (
    <footer className="bg-n-7 border-t border-stroke-1 mt-12 lg:mt-20 py-8 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-n-1 font-bold mb-2">EZE<span className="text-p-3">CODE</span></h3>
            <p className="text-n-3 text-sm leading-relaxed">
              Crafting exceptional digital experiences with thoughtful design and solid engineering.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-n-2 font-semibold text-sm uppercase tracking-wider mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-n-3 hover:text-p-3 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-n-3 hover:text-p-3 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-n-3 hover:text-p-3 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-n-3 hover:text-p-3 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-n-2 font-semibold text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-4">
              {social.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-n-3 hover:text-p-3 transition-colors"
                  aria-label={link.alt}
                >
                  <img src={link.ico} alt={link.alt} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-stroke-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-n-4">
          <p>&copy; 2025 All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#/" target="_blank" rel="noreferrer" className="hover:text-n-2 transition-colors">
              Privacy Policy
            </a>
            <a href="#/" target="_blank" rel="noreferrer" className="hover:text-n-2 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};