import React from "react";
import { Play } from "lucide-react";

import heroVideo from "../assets/hero-video2.mp4";

const Hero = () => {
  const videoLink =
    "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/85 via-[#002B5C]/60 to-[#004B8D]/35"></div>

      {/* Decorative Blur */}
      <div className="absolute top-24 right-32 w-96 h-96 bg-[#2DBE4F]/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#004B8D]/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[3px] sm:tracking-[6px] text-[#2DBE4F] font-semibold mb-5 text-xs sm:text-sm">
              Health-Y Evidence Caribbean
            </p>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-light">

              Advancing

              <span className="block font-bold text-[#2DBE4F]">
                Health Evidence
              </span>

              for a Stronger

              <span className="text-[#149A37] font-medium">
                Caribbean
              </span>

            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Empowering healthcare professionals, researchers,
              policymakers, and communities through trusted
              evidence, collaboration, and innovative digital
              solutions.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">

              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#149A37] hover:bg-[#2DBE4F] transition-all duration-300 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                <Play size={18} fill="white" />
                Watch Video
              </a>

              <button className="border border-white/40 backdrop-blur-md px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-white text-base sm:text-lg hover:bg-white hover:text-[#002B5C] transition w-full sm:w-auto">
                Learn More
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;