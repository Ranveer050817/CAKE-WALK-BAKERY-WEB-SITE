import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/50 backdrop-blur-sm shadow-sm border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3D2B1F] rounded-full flex items-center justify-center text-[#D4AF37] font-serif text-xl font-bold italic">CW</div>
              <h1 className="font-serif text-2xl font-bold tracking-tight uppercase">Cake Walk <span className="text-[#D4AF37]">Bakery</span></h1>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#3D2B1F] hover:text-[#D4AF37] text-sm font-semibold uppercase tracking-widest transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[#3D2B1F] text-[#FAF7F2] hover:bg-[#3D2B1F]/90 transition-colors text-sm font-bold uppercase tracking-widest rounded-full flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#F3E5AB] text-[#3D2B1F] px-3 py-1 rounded-full text-xs font-bold">4.6 ★</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3D2B1F] hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-semibold uppercase tracking-widest text-[#3D2B1F] hover:bg-[#E8E2D9]/30 hover:text-[#D4AF37] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
