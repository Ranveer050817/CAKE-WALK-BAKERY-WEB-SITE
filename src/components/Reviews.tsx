import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Local Customer",
    rating: 5,
    text: "Tasty Cake & Biscuit and good Service.",
    date: "A month ago"
  },
  {
    id: 2,
    name: "Happy Foodie",
    rating: 5,
    text: "Always love visit the place sweet vibes and staff manner.",
    date: "3 months ago"
  },
  {
    id: 3,
    name: "Regular Visitor",
    rating: 4,
    text: "Quite a varieties of cakes available, and other food items also.",
    date: "Recently"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden border-t border-b border-[#D4AF37]/10">
      {/* Decorative texture/pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3D2B1F 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#3D2B1F] mb-6">
            Hear From Our Customers
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2 text-[#3D2B1F]">
            <span className="text-3xl font-bold">4.6</span>
            <div className="flex text-[#D4AF37]">
               {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i === 4 ? 'opacity-50' : ''} fill-current`} />
               ))}
            </div>
          </div>
          <p className="text-[#3D2B1F]/60 font-medium">Based on 91 genuine reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF7F2] p-8 rounded-2xl relative border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors shadow-sm"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />
              
              <div className="flex text-[#D4AF37] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i >= review.rating ? 'opacity-30' : ''} fill-current`} />
                ))}
              </div>
              
              <p className="text-[#3D2B1F] text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#3D2B1F] mb-1 font-serif">{review.name}</h4>
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
