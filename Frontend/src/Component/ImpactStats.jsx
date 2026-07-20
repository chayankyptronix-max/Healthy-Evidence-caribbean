import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Custom scroll-spy counter hook (no external dep) ── */
function useCountUp(target, duration = 2500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

/* ── Stat card ── */
const StatCard = ({ item, index }) => {
  const [count, ref] = useCountUp(item.number, 2200);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className={`bg-gradient-to-br ${item.gradient}
      rounded-[32px]
      shadow-xl
      min-h-[420px]
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-10
      transition-all
      duration-500`}
    >
      <h1 className="text-7xl md:text-8xl font-extrabold text-white">
        {count}{item.suffix}
      </h1>

      <div className="mt-10 text-white text-3xl font-semibold leading-snug">
        <p>{item.title}</p>
        <p>{item.subtitle}</p>
      </div>
    </motion.div>
  );
};

/* ── Data ── */
const stats = [
  {
    number: 1100,
    suffix: "+",
    title: "Healthcare",
    subtitle: "Professionals",
    gradient: "from-[#002B5C] to-[#004B8D]",
  },
  {
    number: 20,
    suffix: "+",
    title: "Years of Scientific",
    subtitle: "Innovation",
    gradient: "from-[#149A37] to-[#2DBE4F]",
  },
  {
    number: 200,
    suffix: "+",
    title: "Global Research",
    subtitle: "Partners",
    gradient: "from-[#004B8D] to-[#149A37]",
  },
];

/* ── Component ── */
const ImpactStats = () => {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h5 className="text-[#002B5C] text-2xl md:text-3xl font-bold inline-block relative">
            Unlock Possibilities Together
            <span className="absolute left-0 -bottom-3 h-1 w-40 bg-[#149A37] rounded-full"></span>
          </h5>

          <h2 className="mt-10 text-4xl md:text-5xl leading-tight text-[#002B5C] font-light max-w-5xl">
            Many minds, working together to create healthcare solutions that
            transform lives through evidence-based innovation.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;