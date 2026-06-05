export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#FAF7F2]/80 py-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">
          
          <div>
            <div className="mb-4">
              <span className="font-serif text-3xl font-bold text-[#FAF7F2] tracking-tight">CAKE WALK</span>
            </div>
            <p className="text-sm">
              Premium bakery offering artisan cakes, pizzas, and delightful snacks in Ranchi.
            </p>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-[#D4AF37] transition-colors">Our Menu</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-bold mb-4 uppercase tracking-widest text-xs">Find Us</h4>
            <p className="text-sm leading-relaxed mb-2">
              88V2+CR3, Near Dibadih Flyover,<br/>
              Argora Road, Ranchi, Jharkhand 834002
            </p>
            <p className="text-sm">Phone: <a href="tel:+918434622700" className="text-[#D4AF37] hover:text-[#D4AF37]/80">+91 84346 22700</a></p>
          </div>

        </div>
        
        <div className="border-t border-[#FAF7F2]/10 mt-12 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center bg-[#3D2B1F]">
          <p>&copy; {new Date().getFullYear()} Cake Walk Bakery. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="opacity-50">Designed for taste.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
