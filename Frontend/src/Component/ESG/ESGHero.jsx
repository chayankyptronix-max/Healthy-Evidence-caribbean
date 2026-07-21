import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const ESGHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#002B5C] to-[#004B8D] text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      {/* Decorative Circles inspired by the reference, styled in HEC colors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute right-[-10%] top-[-20%] w-[500px] h-[500px] rounded-full border-[40px] border-[#149A37]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute right-[5%] bottom-[-20%] w-[300px] h-[300px] rounded-full border-[30px] border-[#2DBE4F]"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#2DBE4F] font-semibold tracking-wider uppercase mb-4 text-sm"
          >
            Environmental, Social and Governance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[800] leading-tight mb-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Together for a sustainable future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            At Health Evidence Caribbean, our purpose is to improve healthcare outcomes while supporting our people, protecting our planet, and conducting business with the highest standards of integrity.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#introduction" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#149A37] hover:bg-[#2DBE4F] transition-colors text-white">
              <ArrowDownCircle size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ESGHero;
