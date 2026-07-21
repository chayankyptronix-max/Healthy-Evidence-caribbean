import React from "react";
import ctaBackground from "../../assets/cta-bg.png";

function CallToActionSection() {
  return (
    <section className="bg-[#F8FAF8]">

      {/* ── United as One (constrained width, padded) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Heading */}
          <div>
            <p className="uppercase tracking-[4px] text-xs font-semibold text-[#149A37] mb-5">
              Our Identity
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#002B5C] leading-tight"
              style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
            >
              Stronger Together,
              <br />
              <span className="text-[#149A37]">United as One</span>
            </h2>
          </div>

          {/* Right — Body text */}
          <div className="flex flex-col justify-start pt-2">
            <div className="w-12 h-[3px] rounded-full bg-[#149A37] mb-8" />
            <p
              className="text-[1.05rem] text-[#0B1F3A] leading-8"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Across every region we serve, Health-Y Evidence Caribbean stands united
              by a shared mission — to deliver rigorous, patient-centred health evidence
              that drives real decisions. We have grown through collaboration, built
              lasting partnerships, and carried forward the expertise that has defined
              our journey from the very beginning.
            </p>
            <p
              className="mt-6 text-[1.05rem] text-[#0B1F3A] leading-8"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              As we continue to expand our reach, we remain a fluid, multidisciplinary
              team — uniquely positioned to bridge the gap between science and policy,
              and to shape the future of health across the Caribbean and beyond.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-20" />
      </div>

      {/* ── Full-width CTA image ── */}
      <div
        className="relative w-full min-h-[600px] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#002B5C]/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h2
            className="text-4xl md:text-6xl font-extrabold !text-white"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Discover HEC Healthcare
          </h2>

          <p
            className="mt-6 text-lg md:text-xl !text-gray-200 leading-8"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Partner with healthcare experts committed to delivering evidence-based
            strategies, innovation, and sustainable healthcare solutions that create
            lasting impact.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="px-10 py-4 rounded-full bg-[#149A37] text-white font-semibold text-lg transition duration-300 hover:bg-[#2DBE4F]">
              Contact Us
            </button>
            <a
              href="/careers"
              className="text-white text-lg font-semibold underline underline-offset-4 hover:text-[#2DBE4F] transition"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default CallToActionSection;