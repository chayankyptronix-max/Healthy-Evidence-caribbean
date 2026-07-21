import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, TrendingUp, Globe, Lightbulb, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Heart,       title: "People-First Culture",    desc: "We put wellbeing and growth at the centre of everything we do."       },
  { icon: Globe,       title: "Global Reach",            desc: "Work with partners and communities across 18+ nations."               },
  { icon: TrendingUp,  title: "Career Growth",           desc: "Structured pathways, mentorship, and continuous learning support."    },
  { icon: Lightbulb,   title: "Innovative Work",         desc: "Drive real change through evidence, research, and creative thinking." },
  { icon: ShieldCheck, title: "Inclusive Environment",   desc: "Diverse perspectives celebrated, every background valued."           },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  show:   { opacity: 1, x: 0,  scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const JoinUs = () => {
  return (
    <section className="relative bg-[#F8FAF8] py-24 overflow-hidden">

      {/* ── Soft ambient blobs ── */}
      <motion.div
        className="absolute top-[-60px] right-[-80px] w-[380px] h-[380px] rounded-full
                   bg-[#149A37]/8 blur-[100px] pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-[-60px] w-[320px] h-[320px] rounded-full
                   bg-[#004B8D]/8 blur-[90px] pointer-events-none"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Heading + CTA ── */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="uppercase tracking-[4px] text-[#149A37] font-semibold text-xs">
                Careers
              </span>

              <h2
                className="mt-5 text-5xl md:text-6xl font-bold text-[#002B5C] leading-tight"
                style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
              >
                A place to{" "}
                <span className="text-[#149A37]">thrive</span>
              </h2>

              {/* animated underline */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 h-[3px] w-40 rounded-full bg-gradient-to-r from-[#149A37] to-[#2DBE4F]"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-8 text-base md:text-lg leading-8 text-[#0B1F3A]/70 max-w-md"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                We believe every employee deserves the opportunity to grow and thrive.
                We are built from teams of people from different backgrounds, living in
                different countries, united by a shared mission to improve health across
                the Caribbean.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.55 }}
                whileHover={{ scale: 1.05, backgroundColor: "#149A37" }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-3 px-10 py-4 rounded-full
                           bg-[#2DBE4F] text-white font-semibold text-base
                           shadow-xl shadow-[#149A37]/25 transition-colors duration-300"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Join Us
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

            </motion.div>
          </div>

          {/* ── Right: Benefit cards ── */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ x: 6, scale: 1.015 }}
                  className="group flex items-start gap-5 bg-white
                             border border-gray-100 hover:border-[#149A37]/30
                             rounded-2xl px-7 py-6
                             shadow-sm hover:shadow-lg hover:shadow-[#149A37]/10
                             transition-all duration-300 cursor-default"
                >
                  {/* Icon box */}
                  <div
                    className="shrink-0 flex items-center justify-center
                               w-12 h-12 rounded-xl
                               bg-gradient-to-br from-[#149A37] to-[#2DBE4F]
                               shadow-md shadow-[#149A37]/25
                               group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon size={20} className="text-white" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      className="text-base font-bold text-[#002B5C]
                                 group-hover:text-[#149A37] transition-colors duration-300"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {b.title}
                    </h4>
                    <p
                      className="mt-1 text-sm text-[#0B1F3A]/60 leading-6"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {b.desc}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <ArrowRight
                    size={16}
                    className="ml-auto shrink-0 text-gray-200
                               group-hover:text-[#149A37] group-hover:translate-x-1
                               transition-all duration-300 mt-1"
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JoinUs;