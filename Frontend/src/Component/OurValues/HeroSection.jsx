import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#001A3A] min-h-[85vh] flex items-center overflow-hidden">
      {/* Abstract Floating Background Elements */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#149A37]/10 blur-[120px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#004B8D]/20 blur-[130px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-16">
        <div className="max-w-3xl">
          
          {/* Breadcrumb / Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 text-[#2DBE4F] text-xs font-semibold uppercase tracking-[3px] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DBE4F] animate-pulse" />
            Our Values
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="!text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
          >
            Driven by Evidence. <br />
            <span className="text-[#149A37]">United by Purpose.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-xl !text-gray-300 leading-relaxed max-w-xl"
          >
            At Health-Y Evidence Caribbean, our values are the compass that guides every 
            research initiative, every partnership, and every policy we help shape. 
            We are committed to integrity, innovation, and impact.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-12"
          >
            <button 
              onClick={() => {
                document.getElementById('philosophy-section').scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#002B5C] font-semibold text-base hover:bg-[#149A37] hover:text-white transition-all duration-300 shadow-xl shadow-black/10"
            >
              Explore Our Values
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
