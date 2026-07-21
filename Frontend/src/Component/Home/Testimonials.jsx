import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sophia Williams",
    role: "Global Medical Director",
    review:
      "Health-Y Evidence Caribbean has become an invaluable partner in advancing evidence-based healthcare. Their evidence-driven approach and collaborative spirit have helped our organization improve decision-making and patient outcomes.",
  },
  {
    name: "Dr. Michael Thompson",
    role: "Clinical Research Lead",
    review:
      "The HEC team consistently delivers high-quality research and practical healthcare solutions. Their professionalism and commitment to excellence make them an outstanding organization to work with.",
  },
  {
    name: "Jennifer Clarke",
    role: "Healthcare Consultant",
    review:
      "Working alongside HEC has strengthened our strategic planning through reliable evidence, transparent collaboration, and innovative thinking.",
  },
  {
    name: "Dr. Alicia Brown",
    role: "Epidemiologist",
    review:
      "Every project reflects scientific rigor, integrity, and a deep commitment to improving healthcare across the Caribbean region.",
  },
  {
    name: "David Lewis",
    role: "Hospital Administrator",
    review:
      "The insights provided by HEC have transformed our healthcare programs and improved service delivery throughout our institution.",
  },
  {
    name: "Sarah Mitchell",
    role: "Research Collaborator",
    review:
      "An exceptional organization that blends research, innovation, and collaboration into meaningful healthcare impact.",
  },
  {
    name: "Lisa Roberts",
    role: "Community Health Leader",
    review:
      "Their dedication to community engagement and evidence-based healthcare has created lasting positive change for countless families.",
  },
  {
    name: "Dr. Kevin James",
    role: "Health Policy Advisor",
    review:
      "HEC's expertise has helped shape policies that are both scientifically sound and practically applicable in real-world healthcare settings.",
  },
  {
    name: "Daniel Morgan",
    role: "Global Health Specialist",
    review:
      "Their passion for improving healthcare through collaboration and trusted evidence truly sets them apart from other organizations.",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#0A1628] py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="uppercase tracking-[4px] text-[#2DBE4F] font-semibold text-sm">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold !text-white max-w-4xl leading-tight">
            Hear From Our Partners,
            Researchers & Healthcare Professionals
          </h2>

          <div className="mt-5 w-40 h-1 rounded-full bg-[#2DBE4F]" />
        </motion.div>

        {/* Carousel */}

        <div className="relative">

          {/* Left Button */}

          <button
            onClick={scrollPrev}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border-2 border-white/30 bg-white/10 text-white flex items-center justify-center hover:bg-[#149A37] hover:border-[#149A37] hover:text-white transition"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right Button */}

          <button
            onClick={scrollNext}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border-2 border-white/30 bg-white/10 text-white flex items-center justify-center hover:bg-[#149A37] hover:border-[#149A37] hover:text-white transition"
          >
            <ChevronRight size={26} />
          </button>

          {/* Embla */}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => {
                const isActive = index === selectedIndex;

                return (
                  <div
                    key={index}
                    className="flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_58%] px-4"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.92,
                        opacity: isActive ? 1 : 0.55,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className={`rounded-[32px] overflow-hidden transition-all duration-500
        ${
          isActive
            ? "bg-[#112240] text-white shadow-2xl shadow-black/40"
            : "bg-white/5 text-white shadow-lg border border-white/10"
        }`}
                    >
                      <div className="p-10 md:p-12">

                        {/* Quote */}

                        <Quote
                          size={52}
                          className={`mb-8 ${
                            isActive ? "text-[#2DBE4F]" : "text-[#149A37]"
                          }`}
                        />

                        {/* Review */}

                        <p
                          className={`text-lg md:text-xl leading-9 ${
                            isActive ? "text-gray-100" : "text-gray-400"
                          }`}
                        >
                          {testimonial.review}
                        </p>

                        {/* Divider */}

                        <div
                          className={`mt-10 mb-8 h-[1px] ${
                            isActive ? "bg-white/20" : "bg-white/10"
                          }`}
                        />

                        {/* User */}

                        <div className="flex items-center justify-between">

                          <div>

                            <h4
                              className={`text-xl font-semibold ${
                                isActive ? "text-white" : "text-gray-100"
                              }`}
                            >
                              {testimonial.name}
                            </h4>

                            <p
                              className={`mt-2 ${
                                isActive ? "text-gray-300" : "text-gray-400"
                              }`}
                            >
                              {testimonial.role}
                            </p>

                          </div>

                          {/* Decorative Circle */}

                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center
              ${
                isActive
                  ? "bg-[#149A37]"
                  : "bg-[#149A37]/10"
              }`}
                          >
                            <Quote
                              size={26}
                              className={
                                isActive
                                  ? "text-white"
                                  : "text-[#149A37]"
                              }
                            />
                          </div>

                        </div>

                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
