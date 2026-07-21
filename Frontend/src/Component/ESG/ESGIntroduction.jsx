import { motion } from "framer-motion";

const ESGIntroduction = () => {
  return (
    <section id="introduction" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-[800] text-[#002B5C] mb-8 leading-tight"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Nurturing Communities. <br />
          Improving Lives.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#0B1F3A] space-y-6"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <p>
            At Health Evidence Caribbean, we believe that delivering better health outcomes goes hand in hand with our responsibility towards the communities we serve and the environment we all share. 
          </p>
          <p>
            Our Environmental, Social, and Governance (ESG) strategy is deeply embedded into our core operations, guiding how we conduct research, shape policies, and foster regional collaborations. We are committed to building a resilient, sustainable healthcare ecosystem in the Caribbean and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ESGIntroduction;
