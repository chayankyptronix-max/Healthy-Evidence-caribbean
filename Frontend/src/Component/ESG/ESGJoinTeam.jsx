import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ESGJoinTeam = () => {
  return (
    <section className="w-full bg-[#F8FAF8] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#2DBE4F] font-semibold uppercase tracking-wider text-sm mb-2">Careers</p>
          <h2 className="text-3xl md:text-5xl font-[800] text-[#002B5C] mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Join our team
          </h2>
          <p className="text-[#0B1F3A] text-lg leading-relaxed mb-8">
            Be part of a team that is dedicated to making a positive impact on global health. We are always looking for passionate individuals who share our commitment to sustainability, ethics, and excellence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#149A37] hover:bg-[#2DBE4F] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md">
              Search and apply
            </button>
            <button className="bg-transparent border-2 border-[#002B5C] text-[#002B5C] hover:bg-[#002B5C] hover:text-white font-bold py-3 px-8 rounded-full transition-colors">
              Meet our people
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#149A37] flex flex-col sm:flex-row items-center justify-between"
        >
          <p className="text-[#002B5C] font-[800] text-xl mb-4 sm:mb-0" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Looking for our careers hub? <span className="text-[#149A37] ml-2 cursor-pointer hover:underline">Click here</span>
          </p>
          <ArrowRight className="text-[#149A37]" />
        </motion.div>
      </div>
    </section>
  );
};

export default ESGJoinTeam;
