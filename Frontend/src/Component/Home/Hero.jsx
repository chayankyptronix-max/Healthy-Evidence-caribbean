import React, { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

/* ── Slides data ── */
const slides = [
  {
    image: hero1,
    tag:   "Evidence-Based Research",
    title: "Advancing",
    highlight: "Health Evidence",
    subtitle: "for a Stronger Caribbean",
    description:
      "Empowering healthcare professionals, researchers, policymakers, and communities through trusted evidence.",
  },
  {
    image: hero2,
    tag:   "Pan-Caribbean Collaboration",
    title: "Connecting",
    highlight: "Researchers",
    subtitle: "Across the Caribbean",
    description:
      "Building stronger collaborations for sustainable healthcare and evidence-based policy.",
  },
  {
    image: hero3,
    tag:   "Science & Innovation",
    title: "Supporting",
    highlight: "Healthcare Innovation",
    subtitle: "Through Science",
    description:
      "Driving impactful research and innovative healthcare solutions for communities.",
  },
  {
    image: hero4,
    tag:   "Strategic Partnerships",
    title: "Creating",
    highlight: "Strategic Partnerships",
    subtitle: "For Better Health",
    description:
      "Working with governments, institutions, and organizations to improve healthcare systems.",
  },
  {
    image: hero5,
    tag:   "Community Impact",
    title: "Together for",
    highlight: "Health-Y Evidence",
    subtitle: "Caribbean",
    description:
      "Advancing knowledge, collaboration, and evidence to improve lives across the region.",
  },
];

/* ── Text animation variants (re-trigger per slide change) ── */
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Hero = () => {
  const swiperRef = useRef(null);
  const videoLink = "https://www.youtube.com/";
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const total = slides.length;
  const pad   = (n) => String(n + 1).padStart(2, "0");

  return (
    <section className="relative h-screen overflow-hidden">

      {/* ══ Swiper — slide effect (no fade) ══ */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        effect="slide"
        speed={900}
        loop
        grabCursor
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: false,
        }}
        navigation={{ prevEl: "#hero-prev", nextEl: "#hero-next" }}
        pagination={false}           /* custom pagination below */
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setAnimKey((k) => k + 1);  /* re-trigger text animation */
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">

              {/* Background image with zoom-in animation */}
              <motion.img
                key={`img-${index}-${animKey}`}
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
              />

              {/* Gradient overlay — stronger left, fades right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001A3A]/90 via-[#002B5C]/70 to-[#004B8D]/30" />

              {/* Bottom vignette */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#001A3A]/60 to-transparent" />

              {/* Decorative green glow */}
              <div className="absolute top-20 right-28 w-80 h-80 bg-[#2DBE4F]/15 blur-[110px] rounded-full pointer-events-none" />

              {/* ── Slide text content ── */}
              <div className="relative z-10 flex h-full items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full">
                  <div className="max-w-3xl">

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={animKey}
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                      >
                        {/* Tag pill */}
                        <motion.span
                          variants={textVariants}
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                     bg-[#149A37]/25 backdrop-blur-sm border border-[#149A37]/30
                                     text-[#4ADE80] text-xs font-semibold uppercase tracking-[3px] mb-8"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                          {slide.tag}
                        </motion.span>

                        {/* Heading */}
                        <motion.h1
                          variants={textVariants}
                          className="!text-white text-5xl lg:text-7xl font-light leading-tight"
                          style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
                        >
                          {slide.title}
                          <span className="block text-[#2DBE4F] font-bold">
                            {slide.highlight}
                          </span>
                          <span className="!text-white/90">
                            {slide.subtitle}
                          </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          variants={textVariants}
                          className="mt-7 text-lg text-gray-300 leading-8 max-w-xl"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                          variants={textVariants}
                          className="mt-10 flex flex-wrap gap-4"
                        >
                          <a
                            href={videoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 bg-[#149A37] hover:bg-[#2DBE4F]
                                       transition-all duration-300 px-8 py-4 rounded-full
                                       text-white font-semibold shadow-lg shadow-[#149A37]/30"
                          >
                            <Play size={16} fill="white" />
                            Watch Video
                          </a>

                          <button className="border border-white/30 backdrop-blur-sm px-8 py-4
                                             rounded-full text-white hover:bg-white hover:text-[#002B5C]
                                             transition-all duration-300">
                            Learn More
                          </button>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ══ Custom navigation arrows ══ */}
      <button
        id="hero-prev"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 flex items-center justify-center
                   rounded-full bg-white/10 hover:bg-[#149A37]
                   border border-white/20 hover:border-[#149A37]
                   text-white backdrop-blur-sm
                   transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        id="hero-next"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 flex items-center justify-center
                   rounded-full bg-white/10 hover:bg-[#149A37]
                   border border-white/20 hover:border-[#149A37]
                   text-white backdrop-blur-sm
                   transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* ══ Slide counter + progress bar ══ */}
      <div className="absolute bottom-16 left-6 lg:left-14 z-20 flex items-end gap-6">

        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-white text-2xl font-bold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {pad(activeIndex)}
            </motion.span>
          </AnimatePresence>
          <span className="text-white/40 text-sm font-medium">/ {pad(total - 1)}</span>
        </div>

        {/* Slide dots */}
        <div className="flex gap-2 mb-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                swiperRef.current?.swiper?.slideToLoop(i);
                setActiveIndex(i);
                setAnimKey((k) => k + 1);
              }}
              className={`rounded-full transition-all duration-400
                ${i === activeIndex
                  ? "w-8 h-2 bg-[#149A37]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ══ Scroll-down indicator ══ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-7 h-7 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;