import { motion } from 'motion/react';
import { ChefHat, Heart, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ChefHat className="w-6 h-6 text-[#D4AF37]" />,
      title: "Master Bakers",
      description: "Our skilled artisans bring years of expertise to every creation."
    },
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: "Premium Quality",
      description: "We use only the finest ingredients to ensure exceptional taste."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#D4AF37]" />,
      title: "Baked with Love",
      description: "Every item is crafted with passion and dedication to excellence."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
                alt="Baker working with dough"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#3D2B1F] mb-6 leading-tight">
              A Legacy of Sweetness in Ranchi
            </h2>
            
            <p className="text-lg text-[#3D2B1F]/80 mb-8 leading-relaxed">
              Located near Dibadih Flyover on Argora Road, Cake Walk Bakery has been a beloved destination for dessert lovers and foodies alike. Our passion is delivering premium, freshly baked delights right to your table, whether you're celebrating a milestone or simply satisfying your sweet cravings.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F3E5AB]/40 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3D2B1F] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#3D2B1F]/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#3D2B1F] rounded-xl text-[#FAF7F2]">
              <div className="flex items-center gap-4">
                <div className="text-[#D4AF37] font-serif text-4xl font-bold italic">4.6</div>
                <div>
                  <div className="flex gap-1 mb-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-[#FAF7F2]/70">Trusted by over 90+ reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Star(props: any) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}
