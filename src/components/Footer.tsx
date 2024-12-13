import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-golden text-xl font-bold tracking-wider mb-4">
              Digi <span className="ml-1">Spark</span>
            </h3>
            <p className="text-sm">
            Where Ideas Spark into Action. <br/>
              We provide Innovative digital marketing solutions for your modern business.
            </p>
          </div>

          <div>
            <h4 className="text-golden font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-golden transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-golden transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className="hover:text-golden transition-colors"
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-golden transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-golden font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-golden" />
                <a 
                  href="tel:+919265002413"
                  className="hover:text-golden transition-colors"
                >
                  +91 92650 02413
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-golden" />
                <a 
                  href="mailto:digisparkx28@gmail.com"
                  className="hover:text-golden transition-colors"
                >
                  digisparkx28@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-golden" />
                <span>
                  Gotri, Vadodara <br />
                  390021
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-golden font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61557355432216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#1877F2] transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/digi.sparkx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E4405F] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/digi-spark/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Digi{' '}
            <span className="ml-1">Spark</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
