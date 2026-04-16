import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold font-serif tabular-nums tracking-tight text-white drop-shadow-sm">
                Voguemed
                <span className="text-accent ml-1 font-sans font-light">Istanbul</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              The trusted destination for medical tourism in Turkey, combining modern technology with premium service. We are here to make you feel special.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Treatments', 'Our Doctors', 'Contracted Hospitals', 'Accommodation', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:underline decoration-accent underline-offset-4">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Popular Treatments</h3>
            <ul className="space-y-4">
              {['Dental Aesthetics (Implant)', 'Hair Transplant & Treatments', 'Aesthetic Surgery', 'Eye Surgery', 'Bariatric Surgery', 'Medical Aesthetics'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:underline decoration-accent underline-offset-4">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-4 hover:text-white transition-colors">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span>Sisli, Istanbul / Turkey <br/> (Voguemed Plaza, 4th Floor)</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone size={20} className="text-accent shrink-0" />
                <a href="tel:+905551234567">+90 555 123 45 67</a>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail size={20} className="text-accent shrink-0" />
                <a href="mailto:info@voguemedistanbul.com">info@voguemedistanbul.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Voguemed Istanbul. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
