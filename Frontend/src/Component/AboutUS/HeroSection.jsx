import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Shield, Globe, FlaskConical } from "lucide-react";

const pillars = [
  { icon: Shield,       label: "Evidence-Based"   },
  { icon: Globe,        label: "Pan-Caribbean"    },
  { icon: FlaskConical, label: "Research-Led"     },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F8FAF8] overflow-hidden flex items-center">

      {/* ══ Animated background blobs ══ */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full
                   bg-[#149A37]/10 blur-[130px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full
                   bg-[#004B8D]/10 blur-[110px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ══ Decorative right-side geometric block ══ */}
      <div className="absolute top-0 right-0 h-full w-[42%] hidden lg:flex flex-col pointer-events-none">

        {/* large navy quarter-circle */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 bg-[#002B5C] rounded-bl-[100px] relative overflow-hidden"
        >
          {/* inner glow */}
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#149A37]/20 blur-[80px]" />

          {/* floating ring 1 */}
          <motion.div
            className="absolute top-12 right-12 w-40 h-40 rounded-full border-[3px] border-[#149A37]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          {/* floating ring 2 */}
          <motion.div
            className="absolute top-24 right-24 w-20 h-20 rounded-full border-[2px] border-[#2DBE4F]/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* stat chips inside the block */}
          <div className="absolute bottom-10 left-10 flex flex-col gap-4">
            {[
              { value: "20+",  label: "Years"         },
              { value: "18",   label: "Nations"        },
              { value: "1.1K+",label: "Professionals"  },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.55 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm
                           border border-white/15 rounded-xl px-5 py-3"
              >
                <span className="text-2xl font-extrabold text-[#2DBE4F]"
                  style={{ fontFamily: "'Manrope',sans-serif", letterSpacing: "-0.03em" }}>
                  {s.value}
                </span>
                <span className="text-xs text-white/70 font-medium uppercase tracking-widest">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* bottom stripe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-28 bg-[#149A37] flex items-center justify-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-white/60" />
          <span className="text-white/80 text-xs uppercase tracking-[4px] font-semibold">
            Health-Y Evidence Caribbean
          </span>
          <div className="w-2 h-2 rounded-full bg-white/60" />
        </motion.div>
      </div>

      {/* ══ Dot grid overlay ══ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #002B5C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ══ Main content ══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full py-32 lg:py-0 lg:min-h-screen flex items-center">
        <div className="max-w-xl lg:max-w-2xl">

          {/* eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="uppercase tracking-[4px] text-xs font-semibold mb-8"
          >
            <span className="text-[#149A37]">WHO WE ARE</span>
            <span className="text-[#002B5C]/40 mx-2">/</span>
            <span className="text-[#002B5C]/70">ABOUT US</span>
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#002B5C]"
            style={{ fontFamily: "'Manrope',sans-serif", letterSpacing: "-0.02em" }}
          >
            Solving complex
            <br />
            <span className="text-[#149A37]">healthcare</span> challenges
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#149A37] to-[#2DBE4F]"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
            className="mt-8 text-lg md:text-xl text-[#0B1F3A]/65 leading-9 max-w-lg"
            style={{ fontFamily: "'Manrope',sans-serif" }}
          >
            We connect visionary minds, pioneering science, and advanced
            technology to drive real, measurable impact across the Caribbean
            and beyond.
          </motion.p>

          {/* Pillar pills */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
          >
            {pillars.map(({ icon: Icon, label }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-[#149A37]/10 text-[#149A37] text-xs font-semibold"
              >
                <Icon size={13} strokeWidth={2} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            <button className="inline-flex items-center gap-3 bg-[#149A37] hover:bg-[#2DBE4F]
                               text-white px-9 py-4 rounded-full font-semibold text-base
                               shadow-lg shadow-[#149A37]/30 transition-all duration-300 hover:scale-105">
              Our Story
              <ArrowRight size={16} />
            </button>

            <button className="px-9 py-4 rounded-full border-2 border-[#002B5C]
                               text-[#002B5C] font-semibold text-base
                               hover:bg-[#002B5C] hover:text-white
                               transition-all duration-300">
              Company Values &amp; Vision
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronDown size={32} className="text-[#149A37] animate-bounce" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;