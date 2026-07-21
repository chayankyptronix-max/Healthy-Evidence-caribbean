import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "25+",  label: "Years of Combined Expertise"     },
  { value: "150+", label: "Research Projects Delivered"     },
  { value: "18",   label: "Caribbean Nations Served"        },
  { value: "96%",  label: "Client Satisfaction Rate"        },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ImpactBridge() {
  return (
    <section className="bg-white py-20 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Eyebrow + heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[4px] text-xs font-semibold text-[#149A37] mb-4">
            Our Impact in Numbers
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#002B5C]"
            style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
          >
            A decade of evidence, a region transformed
          </h2>
          <p
            className="mt-4 text-base text-[#0B1F3A]/65 max-w-xl mx-auto leading-7"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Every number below represents a community reached, a policy shaped,
            or a life improved through science-driven healthcare solutions.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Number */}
              <span
                className="text-5xl md:text-6xl font-extrabold text-[#002B5C]
                           group-hover:text-[#149A37] transition-colors duration-300"
                style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </span>

              {/* Green tick */}
              <div className="mt-3 mb-3 w-8 h-[2px] rounded-full bg-[#149A37]" />

              {/* Label */}
              <p
                className="text-sm text-gray-500 leading-6 max-w-[130px]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ImpactBridge;
