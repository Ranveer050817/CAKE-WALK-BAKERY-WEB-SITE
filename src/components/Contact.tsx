import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">Visit Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#3D2B1F] mb-6">
              Drop by or order today
            </h2>
            <p className="text-[#3D2B1F]/80 text-lg mb-10 leading-relaxed">
              We're located in the heart of Ranchi. Call or message us on WhatsApp for custom cake orders or bulk party snacks.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F3E5AB]/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-lg mb-1">Our Location</h4>
                  <p className="text-[#3D2B1F]/70 leading-relaxed">88V2+CR3, Near Dibadih Flyover,<br/>Argora Road, Ranchi, Jharkhand 834002</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F3E5AB]/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-lg mb-1">Opening Hours</h4>
                  <p className="text-[#3D2B1F]/70">We are Open daily<br/>Closes at 10:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#F3E5AB]/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-lg mb-1">Contact Details</h4>
                  <p className="text-[#3D2B1F]/70 mb-2">+91 84346 22700</p>
                  
                  <div className="flex gap-3 mt-4">
                    <a href="tel:+918434622700" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3D2B1F] text-[#FAF7F2] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#3D2B1F]/90 transition-colors">
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                    <a href="https://wa.me/918434622700" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#25D366]/90 transition-colors">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Using an iframe to embed a styled/approximate map or just an aesthetic image with an overlay map button */}
            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/60 backdrop-blur-sm border border-[#D4AF37]/20">
                <div className="w-16 h-16 bg-[#FAF7F2] rounded-full shadow-sm flex items-center justify-center mb-4 text-[#D4AF37]">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D2B1F] mb-2 font-serif">Cake Walk Bakery</h3>
                <p className="text-[#3D2B1F]/80 font-medium mb-6">Near Dibadih Flyover</p>
                <a 
                  href="https://maps.google.com/?q=Cake+Walk+Bakery,+Argora+Road,+Ranchi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#3D2B1F] border border-[#3D2B1F]/10 hover:border-[#D4AF37] font-bold text-xs uppercase tracking-widest rounded-full transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
