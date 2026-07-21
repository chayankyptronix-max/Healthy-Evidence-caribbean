import { motion } from "framer-motion";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const milestones = [
  { value: "20+",  label: "Years of Excellence",     icon: Award      },
  { value: "150+", label: "Research Projects",        icon: TrendingUp },
  { value: "18",   label: "Nations Served",           icon: Globe      },
  { value: "1.1K+",label: "Healthcare Professionals", icon: Users      },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const AchievementBanner = () => {
  return (
    <section className="relative bg-[#002B5C] py-24 overflow-hidden">

      {/* ── Animated background glows ── */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
                   bg-[#149A37]/15 blur-[130px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[420px] h-[420px] rounded-full
                   bg-[#004B8D]/30 blur-[110px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Decorative rings ── */}
      <div className="absolute top-1/2 left-[55%] -translate-y-1/2 pointer-events-none hidden lg:block">
        <motion.div
          className="w-[420px] h-[420px] rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-[#149A37]/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-16 rounded-full border border-white/5" />
      </div>

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: heading + CTA ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-[4px] text-xs font-semibold text-[#2DBE4F] mb-6"
            >
              Our Legacy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold !text-white leading-tight"
              style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
            >
              20+ years of
              <br />
              <span className="text-[#2DBE4F]">healthcare</span> excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.65 }}
              className="mt-7 text-base md:text-lg leading-8 !text-white/60 max-w-lg"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Health-Y Evidence Caribbean has been delivering evidence-based
              healthcare research, innovation, and strategic partnerships that
              strengthen healthcare systems across the Caribbean and beyond.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.55 }}
              whileHover={{ scale: 1.05, backgroundColor: "#149A37" }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-4 rounded-full bg-[#2DBE4F] text-white
                         font-semibold text-base shadow-xl shadow-[#149A37]/30 transition-colors duration-300"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Learn More
            </motion.button>
          </div>

          {/* ── Right: milestone cards ── */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative bg-white/5 hover:bg-white/10
                             border border-white/10 hover:border-[#149A37]/40
                             rounded-3xl p-7 overflow-hidden
                             transition-all duration-400 cursor-default"
                >
                  {/* card glow */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full
                                  bg-[#149A37]/0 group-hover:bg-[#149A37]/20
                                  blur-xl transition-all duration-500" />

                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl
                                  bg-gradient-to-br from-[#149A37] to-[#2DBE4F]
                                  shadow-lg shadow-[#149A37]/30 mb-5">
                    <Icon size={20} className="text-white" strokeWidth={1.8} />
                  </div>

                  <p
                    className="text-3xl md:text-4xl font-extrabold !text-white"
                    style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.03em" }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-1.5 text-sm text-white/50" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {m.label}
                  </p>

                  {/* bottom accent */}
                  <div className="mt-5 h-[2px] w-0 group-hover:w-full rounded-full
                                  bg-gradient-to-r from-[#149A37] to-[#2DBE4F]
                                  transition-all duration-500" />
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AchievementBanner;