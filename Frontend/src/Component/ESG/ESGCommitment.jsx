import { motion } from "framer-motion";

const ESGCommitment = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#002B5C] to-[#001f42] py-24 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-[800] text-white leading-tight mb-8"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          SBTi has officially approved our near-term targets validated by the Science Based Targets initiative (SBTi)
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg mb-10"
        >
          This validation confirms that our climate action strategy is aligned with the latest climate science and the goals of the Paris Agreement, ensuring we do our part to limit global warming to 1.5°C.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-[#2DBE4F] hover:bg-[#149A37] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl">
            VIEW OUR TARGETS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ESGCommitment;
