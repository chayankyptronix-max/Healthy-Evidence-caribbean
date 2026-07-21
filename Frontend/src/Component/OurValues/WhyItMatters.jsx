import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import placeholderImg from "../../assets/person1.webp"; // Using an existing image as placeholder

const WhyItMatters = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const highlights = [
    "Ensuring equitable healthcare access across the region.",
    "Empowering policymakers with localized, reliable data.",
    "Fostering trust between patients and healthcare providers."
  ];

  return (
    <section className="bg-[#F8FAF8] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Image with Parallax */}
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-[#002B5C] rounded-3xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 opacity-10" />
            
            <motion.div 
              style={{ y }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4] lg:aspect-square"
            >
              <img 
                src={placeholderImg} 
                alt="Healthcare Professional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5C]/40 to-transparent" />
            </motion.div>
          </div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#002B5C] leading-tight mb-6">
                Why our values <br className="hidden lg:block" />
                matter in healthcare
              </h2>
              <p className="text-lg text-[#0B1F3A] leading-relaxed mb-10">
                In an era of rapid medical advancement and complex public health challenges, 
                values are not just corporate statements—they are the critical framework for 
                life-saving decisions. When evidence meets empathy, and innovation meets integrity, 
                we create resilient systems capable of truly caring for populations.
              </p>

              {/* Highlights */}
              <ul className="space-y-6">
                {highlights.map((text, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-[#149A37] shrink-0 mt-1" size={24} />
                    <span className="text-[#0B1F3A] font-medium text-lg leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
