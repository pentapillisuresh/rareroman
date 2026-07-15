import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Clock, Building2, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const Footer = () => {
  const [officeIndex, setOfficeIndex] = useState(0);

  const offices = [
    {
      type: 'Headquarters',
      icon: Building2,
      address: 'Russian American Company, 134 Lincoln Street',
      city: 'Sitka, Alaska 99835',
      state: 'USA'
    }
  ];

  const nextOffice = () => {
    setOfficeIndex((prev) => (prev + 1) % offices.length);
  };

  const prevOffice = () => {
    setOfficeIndex((prev) => (prev - 1 + offices.length) % offices.length);
  };

  const CurrentIcon = offices[officeIndex].icon;

  return (
    <footer className="relative bg-black border-t border-[#D9AF58]/10 overflow-hidden mt-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9AF58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
               <div className="w-24 h-24 flex items-center justify-center">
    <img
      src="/images/logo4.png"
      alt="Logo"
      className="max-h-full object-contain"
    />
  </div>
              <div>
                <span className="font-serif text-xl font-bold text-white uppercase">Rare Roman</span>
                <span className="block text-[#D9AF58] text-[10px] tracking-wider">Antiques International</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
              Preserving history, discovering rarity, and connecting collectors worldwide with authentic Roman artifacts, rare coins, precious stones, and heritage collections.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D9AF58] hover:border-[#D9AF58]/40 hover:bg-[#D9AF58]/10 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D9AF58] hover:border-[#D9AF58]/40 hover:bg-[#D9AF58]/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collections Section */}
          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/collections/roman-coins" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Roman Coins
                </Link>
              </li>
              <li>
                <Link to="/collections/rare-metals" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Rare Metals
                </Link>
              </li>
              <li>
                <Link to="/collections/diamonds" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Diamonds & Precious Stones
                </Link>
              </li>
              <li>
                <Link to="/collections/artifacts" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Ancient Artifacts
                </Link>
              </li>
              <li>
                <Link to="/collections/heritage" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Heritage Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Company Section */}
          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#buying" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Buying Artifacts
                </Link>
              </li>
              <li>
                <Link to="/services#selling" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Selling & Valuation
                </Link>
              </li>
              <li>
                <Link to="/services#authentication" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Authentication Services
                </Link>
              </li>
              <li>
                <Link to="/services#consultation" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Private Consultation
                </Link>
              </li>
            </ul>

            <h3 className="font-serif text-white font-semibold mb-5 mt-8 text-sm tracking-widest uppercase">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section with Office Carousel */}
          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Our Office</h3>
            
            {/* Office Carousel */}
            <div className="bg-white/[0.03] rounded-xl border border-white/10 p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CurrentIcon className="w-4 h-4 text-[#D9AF58]" />
                  <span className="text-[#D9AF58] text-[10px] font-mono tracking-wider uppercase">
                    {offices[officeIndex].type}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={prevOffice}
                    className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D9AF58] hover:border-[#D9AF58]/40 transition-all duration-200"
                    aria-label="Previous office"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <span className="text-white/30 text-[10px] font-mono">
                    {officeIndex + 1}/{offices.length}
                  </span>
                  <button
                    onClick={nextOffice}
                    className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D9AF58] hover:border-[#D9AF58]/40 transition-all duration-200"
                    aria-label="Next office"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-white/50 text-xs leading-relaxed">
                  {offices[officeIndex].address}
                </p>
                <p className="text-white/50 text-xs">
                  {offices[officeIndex].city}
                </p>
                <p className="text-white/40 text-[10px]">
                  {offices[officeIndex].state}
                </p>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-1.5 mb-4">
              {offices.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setOfficeIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === officeIndex 
                      ? 'w-4 h-1.5 bg-[#D9AF58]' 
                      : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to office ${idx + 1}`}
                />
              ))}
            </div>

            {/* Contact Info */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D9AF58] shrink-0" />
                <div>
                  <span className="text-white/40 text-[8px] font-mono tracking-wider uppercase block">Toll Free</span>
                  <a href="tel:180074262119" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors font-sans">1-800-742-62119</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D9AF58] shrink-0" />
                <div>
                  <span className="text-white/40 text-[8px] font-mono tracking-wider uppercase block">Local</span>
                  <a href="tel:19077476119" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors font-sans">+1 907-747-6119</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D9AF58] shrink-0" />
                <a href="mailto:rareromanantiques@gmail.com" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors font-sans break-all">rareromanantiques@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#D9AF58] mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/60 text-[10px] font-mono block mb-0.5">International</span>
                  <span className="text-white/50 text-xs">Serving collectors worldwide</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D9AF58] mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/60 text-[10px] font-mono block mb-0.5">Working Hours (AST)</span>
                  <span className="text-white/50 text-xs">Mon-Fri: 9AM - 6PM<br />Sat: 10AM - 2PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-sans">© 2026 Rare Roman Antiques. All rights reserved. | Rudra x Romulus — Rare Antiques International</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white/30 text-xs hover:text-[#D9AF58] transition-colors duration-200 font-sans">
              Privacy Policy
            </Link>
            <Link to="/" className="text-white/30 text-xs hover:text-[#D9AF58] transition-colors duration-200 font-sans">
              Terms of Service
            </Link>
            <Link to="/" className="text-white/30 text-xs hover:text-[#D9AF58] transition-colors duration-200 font-sans">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;