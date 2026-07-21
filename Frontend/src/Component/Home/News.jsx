import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";

const news = [
  {
    image: news1,
    category: "Research",
    title: "New Study Highlights Evidence Gaps in Caribbean Primary Healthcare Systems",
  },
  {
    image: news2,
    category: "Healthcare",
    title: "HEC Partners with Regional Health Ministries to Strengthen Evidence Use in Policy",
  },
  {
    image: news3,
    category: "Community",
    title: "Community Health Initiative Reaches 10,000 Families Across Six Caribbean Nations",
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

const cardVariant = {
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

const News = () => {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <span className="uppercase tracking-[4px] text-[#149A37] font-semibold text-sm">
            Latest News
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#002B5C] leading-tight">
            Stay informed with the latest healthcare insights and
            evidence-driven updates.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl">
            From groundbreaking research findings to community health milestones,
            stay up to date with the stories shaping healthcare across the Caribbean.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}

              <div className="overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-8">

                <span className="inline-block px-4 py-1 rounded-full bg-[#149A37]/10 text-[#149A37] text-sm font-medium">
                  {item.category}
                </span>

                <h3 className="mt-5 text-2xl font-semibold text-[#002B5C] leading-snug">
                  {item.title}
                </h3>

                <button className="group/button mt-8 inline-flex items-center gap-2 text-[#149A37] font-semibold">

                  Read Article

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />

                </button>

              </div>

            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;