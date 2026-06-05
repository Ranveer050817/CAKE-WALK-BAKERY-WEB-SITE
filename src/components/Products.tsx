import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Custom Birthday Cakes",
    category: "Cakes",
    price: "₹400+",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    description: "Luxurious custom-designed cakes for your special occasions."
  },
  {
    id: 2,
    name: "Artisan Pizza",
    category: "Pizza",
    price: "₹150+",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    description: "Wood-fired style gourmet pizzas with fresh premium toppings."
  },
  {
    id: 3,
    name: "Savory Puffs & Snacks",
    category: "Bakery Snacks",
    price: "₹30+",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    description: "Golden, flaky pastry puffs perfect for your evening tea."
  },
  {
    id: 4,
    name: "Premium Biscuits",
    category: "Biscuits",
    price: "₹80/box",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    description: "Handcrafted butter cookies and assorted artisan biscuits."
  },
  {
    id: 5,
    name: "Fresh Fruit Pastries",
    category: "Pastries",
    price: "₹60+",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=800&auto=format&fit=crop",
    description: "Delicate layered pastries topped with fresh seasonal fruits."
  },
  {
    id: 6,
    name: "Chocolate Truffles",
    category: "Cakes",
    price: "₹50+",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop",
    description: "Rich and decadent chocolate truffle slices."
  }
];

export default function Products() {
  return (
    <section id="menu" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">Our Menu</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#3D2B1F] mb-4">
            Popular Delights
          </h2>
          <p className="text-[#3D2B1F]/80 text-lg">
            From sweet indulgences to savory cravings, explore our wide range of freshly baked premium items (₹1–200+).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/10 hover:border-[#D4AF37]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#3D2B1F] uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#3D2B1F] font-serif">{product.name}</h3>
                  <span className="text-[#D4AF37] font-bold whitespace-nowrap">{product.price}</span>
                </div>
                <p className="text-[#3D2B1F]/70 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#3D2B1F] font-medium group-hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs"
                >
                  Order Now <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
