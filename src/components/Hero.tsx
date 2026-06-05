import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 bg-white">
      <div className="flex flex-col md:flex-row min-h-[70vh] max-w-7xl mx-auto">
        <div className="w-full md:w-3/5 px-8 py-16 md:p-16 xl:p-24 flex flex-col justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <div className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Est. Ranchi, Jharkhand
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black italic tracking-tight leading-[1.1] mb-6 text-[#3D2B1F]">
              Where Every <br className="hidden md:block"/> Bite Tells a Story.
            </h1>
            
            <p className="text-lg md:text-xl text-[#3D2B1F]/80 mb-10 max-w-2xl font-medium leading-relaxed">
              Experience the finest assortment of artisan cakes, gourmet pizzas, and premium bakery delicacies baked fresh every day at Cake Walk Bakery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="bg-[#3D2B1F] text-[#FAF7F2] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#3D2B1F]/90 transition-colors flex items-center justify-center gap-2 text-center"
              >
                Explore Our Menu
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="border-2 border-[#3D2B1F] text-[#3D2B1F] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#3D2B1F] hover:text-[#FAF7F2] transition-colors text-center"
              >
                Order for Delivery
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-2/5 relative h-[50vh] md:h-auto bg-[#E8E2D9] overflow-hidden">
          {/* Decorative Style overlaying the image */}
          <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(circle_at_center,_#3D2B1F_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
          
          <img
            src="https://images.unsplash.com/photo-1555507015-062e7ee7291a?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Bakery Interior"
            className="w-full h-full object-cover mix-blend-overlay opacity-80"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 border-4 border-[#D4AF37]/80 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20">
              <div className="w-56 h-56 border-2 border-dashed border-[#D4AF37] rounded-full flex items-center justify-center">
                 <span className="font-serif italic text-[#3D2B1F] text-2xl text-center font-bold">Signature<br/>Cakes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
