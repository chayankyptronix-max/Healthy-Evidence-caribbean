import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section id="philosophy-section" className="bg-[#F8FAF8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Heading */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#002B5C] leading-tight">
                Our core <br className="hidden md:block" />
                philosophy
              </h2>
              {/* Decorative accent */}
              <div className="mt-8 w-20 h-1.5 bg-[#149A37] rounded-full" />
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Accent Line (Desktop) */}
            <div className="hidden lg:block absolute left-[-40px] top-2 bottom-2 w-px bg-gradient-to-b from-[#149A37]/50 via-[#149A37]/20 to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-8 text-lg text-[#0B1F3A] leading-relaxed"
            >
              <p>
                At the heart of Health-Y Evidence Caribbean is a simple yet profound belief: 
                <strong> better evidence creates better health outcomes.</strong> We exist to bridge the 
                gap between rigorous scientific research and actionable healthcare policy in the Caribbean.
              </p>
              <p>
                We recognize that healthcare challenges are uniquely local but require world-class 
                solutions. By fusing advanced data analytics, health economics, and community-centric 
                research, we empower governments and providers to make decisions that are not only 
                evidence-based, but deeply human. Our philosophy is rooted in collaboration—because 
                transforming health systems cannot be achieved in isolation.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
