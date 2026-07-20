import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import officeImage from "../assets/officeImage.png";

const JoinUs = () => {
  return (
    <section className="bg-[#F8FAF8] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="uppercase tracking-[4px] text-[#149A37] font-semibold text-sm">
            Careers
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#002B5C] leading-tight">
            Join Us
          </h2>

          <div className="mt-5 w-40 h-1 rounded-full bg-[#149A37]" />
        </motion.div>

        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] sm:h-[580px] md:h-[650px] overflow-hidden rounded-[28px] sm:rounded-[40px]"
        >
          {/* Background Image */}
          <img
            src={officeImage}
            alt="Join Health-Y Evidence Caribbean"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#002B5C]/90 via-[#002B5C]/70 to-[#004B8D]/50" />

          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#149A37]/20 blur-[100px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center sm:justify-end px-6 sm:px-8 md:px-16">
            <div className="w-full max-w-xl text-white text-center sm:text-left">

              <motion.h1
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                A place to{" "}
                <span className="text-[#2DBE4F]">thrive</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-gray-200"
              >
                We believe that every employee should be given the opportunity
                to grow and thrive. We're built from teams of people from
                different backgrounds, living in different countries, who
                embrace and respect our different perspectives and strengths.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ scale: 1.05, backgroundColor: "#149A37" }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#2DBE4F] px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl transition w-full sm:w-auto"
              >
                Join Us
                <ArrowRight size={18} />
              </motion.button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JoinUs;