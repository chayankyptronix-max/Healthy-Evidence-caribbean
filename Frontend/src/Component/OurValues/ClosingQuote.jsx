import React from "react";
import { motion } from "framer-motion";

const ClosingQuote = () => {
  return (
    <section className="bg-[#F8FAF8] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
        
        {/* Decorative Quote Marks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] leading-none text-[#149A37]/10 font-serif select-none pointer-events-none -mt-10">
          &ldquo;
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <blockquote className="text-3xl md:text-5xl text-[#002B5C] leading-snug border-none p-0 mx-auto" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
            "Better evidence creates better health outcomes. It’s that simple, and that profound."
          </blockquote>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#149A37]" />
            <p className="text-sm font-semibold tracking-[2px] uppercase text-[#0B1F3A]">
              The HEC Promise
            </p>
            <div className="w-12 h-px bg-[#149A37]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClosingQuote;
