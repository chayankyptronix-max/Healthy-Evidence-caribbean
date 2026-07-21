import React from "react";
import { motion } from "framer-motion";

/* ── Staircase step data ── */
const timeline = [
  {
    year: "2018",
    title: "HEC Healthcare Founded",
    description:
      "HEC Healthcare was established with the vision of transforming healthcare consulting through evidence-based research, strategic partnerships, and innovation.",
    accent: "#149A37",
    stepColor: "from-[#149A37] to-[#2DBE4F]",
    indent: 0,       // stair indent (in rem units × 4 = Tailwind units)
  },
  {
    year: "2020",
    title: "Regional Expansion",
    description:
      "Expanded operations across the Caribbean, collaborating with healthcare providers, governments, and research organizations to improve patient outcomes.",
    accent: "#004B8D",
    stepColor: "from-[#002B5C] to-[#004B8D]",
    indent: 8,
  },
  {
    year: "2022",
    title: "Digital Healthcare Solutions",
    description:
      "Introduced data-driven healthcare analytics and digital transformation initiatives, enabling organizations to make faster, evidence-based decisions.",
    accent: "#004B8D",
    stepColor: "from-[#004B8D] to-[#149A37]",
    indent: 16,
  },
  {
    year: "Today",
    title: "Global Healthcare Advisory",
    description:
      "Today, HEC Healthcare continues to partner with healthcare leaders worldwide, delivering innovative consulting, research, and strategic solutions.",
    accent: "#149A37",
    stepColor: "from-[#149A37] to-[#002B5C]",
    indent: 24,
  },
];

/* ── The animated "draw" line inside each stair tread ── */
const drawLine = {
  hidden: { scaleX: 0, originX: 0 },
  show:   { scaleX: 1, originX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function StoryTimelineSection() {
  return (
    <section className="bg-[#F8FAF8] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[4px] text-xs font-semibold text-[#149A37]">
            Our Story
          </p>

          <h2
            className="mt-5 text-4xl md:text-5xl font-extrabold text-[#002B5C] leading-tight"
            style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
          >
            Building Healthcare Excellence
          </h2>

          <p
            className="mt-6 max-w-3xl text-lg leading-9 text-[#0B1F3A]/70"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            HEC Healthcare was founded with a clear purpose — to connect healthcare
            expertise, research, and innovation to create measurable impact across
            the Caribbean and beyond.
          </p>

          <p className="uppercase mt-16 tracking-widest text-xs font-semibold text-[#004B8D]">
            Our Journey
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            STAIRCASE LAYOUT
            Each step is progressively indented right,
            creating a ladder / staircase visual.
        ════════════════════════════════════════════ */}
        <div className="mt-12 flex flex-col gap-0">
          {timeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              /* Progressive indent = the stair effect */
              style={{ paddingLeft: `${step.indent * 4}px` }}
              className="flex flex-col"
            >
              {/* ── STAIR TREAD (horizontal platform) ── */}
              <div className="flex items-stretch">

                {/* Year badge — the riser label */}
                <div
                  className={`shrink-0 flex items-center justify-center
                              w-24 sm:w-28 px-4 py-4 rounded-tl-2xl rounded-bl-2xl
                              bg-gradient-to-br ${step.stepColor} text-white`}
                >
                  <span
                    className="text-lg sm:text-xl font-extrabold tracking-tight"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {step.year}
                  </span>
                </div>

                {/* Content card — the tread */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex-1 bg-white border border-gray-100
                             hover:border-transparent hover:shadow-xl
                             rounded-tr-2xl rounded-br-2xl
                             px-7 py-6 relative overflow-hidden
                             transition-all duration-300"
                >
                  {/* subtle left glow on hover */}
                  <div
                    className="absolute left-0 top-0 h-full w-1 rounded-l
                               transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to bottom, ${step.accent}, transparent)` }}
                  />

                  <h3
                    className="text-lg md:text-xl font-bold text-[#002B5C]
                               group-hover:text-[#149A37] transition-colors duration-300"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-2 text-sm md:text-base text-[#0B1F3A]/60 leading-7 max-w-2xl"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {step.description}
                  </p>

                  {/* animated underline on hover (grows L→R) */}
                  <motion.div
                    className="mt-4 h-[2px] rounded-full"
                    style={{ background: step.accent }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={drawLine}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  />
                </motion.div>
              </div>

              {/* ── STAIR RISER (vertical connector between steps) ── */}
              {index < timeline.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1, originY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                  className="self-start w-24 sm:w-28 flex justify-center"
                >
                  <div
                    className="w-[3px] h-10 rounded-full"
                    style={{
                      background: `linear-gradient(to bottom, ${step.accent}, ${timeline[index + 1].accent})`,
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* ── "Arrived" cap at the top stair ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ paddingLeft: `${(timeline.length - 1) * timeline[1].indent * 4}px` }}
            className="flex items-center gap-3 mt-0"
          >
            <div className="w-24 sm:w-28 flex justify-center">
              <div className="w-5 h-5 rounded-full bg-[#149A37] ring-4 ring-[#149A37]/25 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
            <span
              className="text-xs font-semibold text-[#149A37] uppercase tracking-[3px]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              And growing…
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default StoryTimelineSection;