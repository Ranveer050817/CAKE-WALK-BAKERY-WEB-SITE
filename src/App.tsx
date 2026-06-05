/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D2B1F] font-sans selection:bg-[#D4AF37]/30">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
