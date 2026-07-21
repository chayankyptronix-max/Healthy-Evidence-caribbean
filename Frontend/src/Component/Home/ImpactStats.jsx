// import React, { useState, useEffect, useRef } from "react";
// import { motion, useAnimationControls } from "framer-motion";
// import { Users, FlaskConical, Handshake } from "lucide-react";

// /* ════════════════════════════════════════════════════
//    Custom scroll-spy counter hook  (PRESERVED — no changes)
// ════════════════════════════════════════════════════ */
// function useCountUp(target, duration = 2500) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !started.current) {
//           started.current = true;
//           const startTime = performance.now();

//           const tick = (now) => {
//             const elapsed = now - startTime;
//             const progress = Math.min(elapsed / duration, 1);
//             // ease-out cubic
//             const eased = 1 - Math.pow(1 - progress, 3);
//             setCount(Math.round(eased * target));
//             if (progress < 1) requestAnimationFrame(tick);
//           };

//           requestAnimationFrame(tick);
//         }
//       },
//       { threshold: 0.4 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [target, duration]);

//   return [count, ref];
// }

// /* ════════════════════════════════════════════════════
//    Framer-Motion variants
// ════════════════════════════════════════════════════ */
// const cardVariants = {
//   hidden: { opacity: 0, y: 56, scale: 0.96 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.18,
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   }),
// };

// /* floating icon animation */
// const floatVariants = {
//   float: {
//     y: [0, -7, 0],
//     transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
//   },
// };

// /* animated underline (grows left → right) */
// const underlineVariants = {
//   hidden: { scaleX: 0, originX: 0 },
//   show: {
//     scaleX: 1,
//     originX: 0,
//     transition: { delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// /* ════════════════════════════════════════════════════
//    Data
// ════════════════════════════════════════════════════ */
// const stats = [
//   {
//     number: 1100,
//     suffix: "+",
//     title: "Healthcare",
//     subtitle: "Professionals",
//     description:
//       "Supporting clinicians, researchers, and policy makers throughout the Caribbean.",
//     gradient: "from-[#002B5C] to-[#004B8D]",
//     glowColor: "#004B8D",
//     icon: Users,
//     iconBg: "from-[#002B5C] to-[#004B8D]",
//   },
//   {
//     number: 20,
//     suffix: "+",
//     title: "Years of Scientific",
//     subtitle: "Innovation",
//     description:
//       "Delivering trusted evidence that shapes healthcare decisions at every level.",
//     gradient: "from-[#149A37] to-[#2DBE4F]",
//     glowColor: "#149A37",
//     icon: FlaskConical,
//     iconBg: "from-[#149A37] to-[#2DBE4F]",
//   },
//   {
//     number: 200,
//     suffix: "+",
//     title: "Global Research",
//     subtitle: "Partners",
//     description:
//       "Collaborating with institutions to improve regional and global healthcare outcomes.",
//     gradient: "from-[#004B8D] to-[#149A37]",
//     glowColor: "#2DBE4F",
//     icon: Handshake,
//     iconBg: "from-[#004B8D] to-[#149A37]",
//   },
// ];

// /* ════════════════════════════════════════════════════
//    StatCard
// ════════════════════════════════════════════════════ */
// const StatCard = ({ item, index }) => {
//   const [count, ref] = useCountUp(item.number, 2200);
//   const Icon = item.icon;

//   return (
//     <motion.div
//       ref={ref}
//       custom={index}
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-50px" }}
//       whileHover={{
//         y: -12,
//         scale: 1.03,
//         rotateX: 2,
//         rotateY: -2,
//         boxShadow: `0 32px 64px -12px ${item.glowColor}55`,
//         transition: { duration: 0.35, ease: "easeOut" },
//       }}
//       className={`group relative bg-gradient-to-br ${item.gradient}
//         rounded-[34px] shadow-xl min-h-[420px]
//         flex flex-col justify-between
//         px-10 py-10 overflow-hidden
//         cursor-default`}
//       style={{ transformStyle: "preserve-3d", willChange: "transform" }}
//     >
//       {/* ── Floating decorative blob (top-right) ── */}
//       <div
//         className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-10 pointer-events-none"
//         style={{ background: item.glowColor }}
//       />

//       {/* ── Shine sweep on hover ── */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100
//                    transition-opacity duration-500 pointer-events-none rounded-[34px]"
//         style={{
//           background:
//             "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
//           backgroundSize: "200% 100%",
//           animation: "none",
//         }}
//       />
//       {/* shine sweep via CSS keyframe injected inline */}
//       <style>{`
//         .card-shine:hover::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: 34px;
//           background: linear-gradient(
//             110deg,
//             transparent 20%,
//             rgba(255,255,255,0.14) 50%,
//             transparent 80%
//           );
//           animation: shineSwipe 0.75s ease forwards;
//           pointer-events: none;
//         }
//         @keyframes shineSwipe {
//           from { background-position: -200% center; }
//           to   { background-position:  200% center; }
//         }
//       `}</style>

//       {/* ── Top section: icon ── */}
//       <div>
//         <motion.div
//           variants={floatVariants}
//           animate="float"
//           className={`inline-flex items-center justify-center
//                       w-14 h-14 rounded-2xl mb-8
//                       bg-gradient-to-br ${item.iconBg}
//                       ring-2 ring-white/20 shadow-lg`}
//         >
//           <Icon size={24} className="text-white" strokeWidth={1.8} />
//         </motion.div>
//       </div>

//       {/* ── Middle: number + label ── */}
//       <div className="flex-1 flex flex-col justify-center text-center">
//         <h1
//           className="text-[76px] md:text-[88px] font-extrabold text-white leading-none"
//           style={{ letterSpacing: "-0.04em", fontFamily: "'Manrope', sans-serif" }}
//         >
//           {count}{item.suffix}
//         </h1>

//         <div className="mt-5 text-white">
//           <p className="text-2xl font-semibold leading-snug">{item.title}</p>
//           <p className="text-2xl font-semibold leading-snug">{item.subtitle}</p>
//         </div>

//         <p className="mt-4 text-sm text-white/65 leading-7 max-w-[220px] mx-auto">
//           {item.description}
//         </p>
//       </div>

//       {/* ── Bottom accent line (grows on hover) ── */}
//       <div className="relative mt-8 h-[2px] w-full rounded-full bg-white/15 overflow-hidden">
//         <div
//           className="absolute inset-y-0 left-0 w-0 group-hover:w-full
//                      bg-white/60 rounded-full transition-all duration-500 ease-out"
//         />
//       </div>
//     </motion.div>
//   );
// };

// /* ════════════════════════════════════════════════════
//    ImpactStats  (main component — PRESERVED structure)
// ════════════════════════════════════════════════════ */
// const ImpactStats = () => {
//   return (
//     <section className="relative bg-[#F8FAF8] py-24 overflow-hidden">

//       {/* ── Animated background blobs ── */}
//       <motion.div
//         className="absolute top-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full
//                    bg-[#149A37]/8 blur-[100px] pointer-events-none"
//         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-60px] right-[-40px] w-[380px] h-[380px] rounded-full
//                    bg-[#004B8D]/8 blur-[90px] pointer-events-none"
//         animate={{ x: [0, -25, 0], y: [0, -18, 0] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute top-[40%] left-[50%] w-[260px] h-[260px] rounded-full
//                    bg-[#2DBE4F]/6 blur-[80px] pointer-events-none"
//         animate={{ x: [0, 20, 0], y: [0, 24, 0] }}
//         transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

//         {/* ── Heading ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-16"
//         >


//           {/* existing heading — PRESERVED */}
//           <h5 className="text-[#002B5C] text-2xl md:text-3xl font-bold inline-block relative">
//             Unlock Possibilities Together
//             {/* underline grows left → right */}
//             <motion.span
//               variants={underlineVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="absolute left-0 -bottom-3 h-1 w-40 bg-[#149A37] rounded-full block"
//             />
//           </h5>

//           {/* existing paragraph — PRESERVED */}
//           <h2 className="mt-10 text-4xl md:text-5xl leading-tight text-[#002B5C] font-light max-w-5xl">
//             Many minds, working together to create healthcare solutions that
//             transform lives through evidence-based innovation.
//           </h2>
//         </motion.div>

//         {/* ── Cards — PRESERVED grid layout ── */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {stats.map((item, index) => (
//             <StatCard key={index} item={item} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ImpactStats;


import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  HeartPulse,
  Database,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Healthcare Research",
    description:
      "Generating trusted evidence through high-quality research that supports better healthcare decisions.",
    icon: FlaskConical,
    color: "#149A37",
    bg: "from-[#149A37] to-[#2DBE4F]",
  },
  {
    title: "Evidence & Policy",
    description:
      "Transforming research findings into policies that improve healthcare systems across the Caribbean.",
    icon: HeartPulse,
    color: "#004B8D",
    bg: "from-[#004B8D] to-[#002B5C]",
  },
  {
    title: "Health Data Analytics",
    description:
      "Using modern analytics to discover trends and strengthen evidence-based healthcare planning.",
    icon: Database,
    color: "#2DBE4F",
    bg: "from-[#2DBE4F] to-[#149A37]",
  },
  {
    title: "Community Programs",
    description:
      "Empowering communities through education, collaboration, and sustainable health initiatives.",
    icon: Users,
    color: "#002B5C",
    bg: "from-[#002B5C] to-[#004B8D]",
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
    y: 50,
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
    <section className="bg-[#F8FAF8] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#149A37]/10 text-[#149A37] font-semibold tracking-wider uppercase">
            What We Do
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#002B5C]">
            Building Better Healthcare
            <span className="text-[#149A37]"> Together</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We combine research, innovation and collaboration to strengthen
            healthcare systems throughout the Caribbean.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className="group relative"
              >
                {/* Floating Circle */}

                <div
                  className="absolute -top-5 -right-5 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition"
                  style={{
                    background: service.color,
                  }}
                />

                {/* Card */}

                <div className="relative bg-white rounded-[45px] p-10 shadow-lg border border-gray-100 h-full overflow-hidden">

                  {/* Decorative Blob */}

                  <div
                    className={`absolute -top-24 -left-24 w-56 h-56 rounded-full bg-gradient-to-br ${service.bg} opacity-10 group-hover:scale-125 transition duration-700`}
                  />

                  {/* Icon */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${service.bg} flex items-center justify-center shadow-xl mb-10`}
                  >
                    <Icon size={42} color="white" />
                  </motion.div>

                  {/* Title */}

                  <h3 className="text-2xl font-bold text-[#002B5C] mb-5">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-600 leading-8">
                    {service.description}
                  </p>

                  {/* Learn More */}

                  <button
                    className="mt-10 flex items-center gap-3 font-semibold transition"
                    style={{
                      color: service.color,
                    }}
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition"
                    />
                  </button>

                  {/* Bottom Line */}

                  <div
                    className="mt-8 h-1 rounded-full w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      background: service.color,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;