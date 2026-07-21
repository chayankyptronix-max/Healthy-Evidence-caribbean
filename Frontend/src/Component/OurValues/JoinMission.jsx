import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const JoinMission = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#002B5C] to-[#004B8D] p-12 md:p-20 text-center shadow-2xl"
        >
          {/* Decorative background blur */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#149A37] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2DBE4F] rounded-full blur-[100px] opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !text-white leading-tight mb-8">
              Join us in improving healthcare across the Caribbean.
            </h2>
            <p className="text-lg md:text-xl !text-white/80 mb-12">
              Whether you are a researcher, a clinician, or a policy maker, your expertise 
              can help us shape a healthier, evidence-driven future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#149A37] hover:bg-[#2DBE4F] text-white font-semibold text-lg transition-all duration-300">
                Join Our Team
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#002B5C] border border-white/20 font-semibold text-lg backdrop-blur-sm transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default JoinMission;
