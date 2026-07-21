import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Healthcare Research",
    color: "#149A37",
    description:
      "We conduct rigorous, peer-reviewed research to generate credible evidence that informs clinical practice and public health strategies across the Caribbean region.",
  },
  {
    title: "Evidence & Policy",
    color: "#004B8D",
    description:
      "We translate complex health data into actionable policy recommendations, supporting governments and institutions to make informed, evidence-driven decisions.",
  },
  {
    title: "Health Data Analytics",
    color: "#2DBE4F",
    description:
      "Harnessing the power of data to identify health trends, measure outcomes, and drive strategic improvements in healthcare systems region-wide.",
  },
  {
    title: "Community Programs",
    color: "#002B5C",
    description:
      "Designing and delivering tailored community health initiatives that promote prevention, education, and equitable access to quality healthcare services.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Services = () => {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="uppercase tracking-[4px] text-[#149A37] font-semibold text-sm">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#002B5C] max-w-5xl leading-tight">
            We transform healthcare evidence into meaningful impact through
            research, collaboration, and innovation.
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-8">
            From evidence synthesis to community engagement, our services are designed to
            strengthen healthcare systems and improve lives across the Caribbean and beyond.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
  <motion.div
    key={index}
    variants={item}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white to-[#F4FBF6] p-10 border border-gray-100 shadow-md hover:shadow-2xl"
  >
    {/* Decorative Circle */}
    <div
      className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150"
      style={{
        background: service.color,
      }}
    />

    {/* Icon */}
    <div
      className="flex h-16 w-16 items-center justify-center rounded-2xl mb-8 text-white text-3xl font-bold shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${service.color}, #002B5C)`,
      }}
    >
      {index + 1}
    </div>

    <h3 className="text-3xl font-bold text-[#002B5C] mb-5">
      {service.title}
    </h3>

    <p className="text-gray-600 leading-8 mb-10">
      {service.description}
    </p>

    <button
      className="inline-flex items-center gap-3 font-semibold transition-all"
      style={{
        color: service.color,
      }}
    >
      Learn More

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-2"
      />
    </button>
  </motion.div>
))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;