import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";

const insights = [
  {
    image: card1,
    title: "Healthcare Research",
    description:
      "Exploring evidence-based approaches to improve healthcare delivery, patient outcomes, and system efficiency across the Caribbean region.",
  },
  {
    image: card2,
    title: "Evidence & Policy",
    description:
      "Bridging the gap between scientific research and public health policy to drive meaningful, lasting change in healthcare governance.",
  },
  {
    image: card3,
    title: "Community Impact",
    description:
      "Empowering local communities with knowledge and tools that promote health equity, resilience, and well-being for every individual.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Insights = () => {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#149A37] uppercase tracking-[4px] font-semibold text-sm">
            Latest Insights
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#002B5C]">
            Discover the Latest Research & Evidence
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Explore our curated collection of research publications, policy briefs,
            and evidence summaries shaping healthcare across the Caribbean.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {insights.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden h-64">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <div className="w-14 h-1 bg-[#149A37] rounded-full mb-6"></div>

                <h3 className="text-2xl font-semibold text-[#002B5C] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {card.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-[#149A37] font-semibold group/button">
                  Read More
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </button>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;