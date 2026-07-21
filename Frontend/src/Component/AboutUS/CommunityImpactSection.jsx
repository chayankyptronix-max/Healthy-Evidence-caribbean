import React from "react";
import communityBg from "../../assets/community-bg.jpg";

function CommunityImpactSection() {
  return (
    <section className="w-full">

      {/* ── Full-width background image ── */}
      <div
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${communityBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#002B5C]/60" />

        {/* Content — constrained internally for readability */}
        <div className="relative z-10 max-w-3xl px-10 md:px-16 lg:px-24 py-20">

          {/* Accent Line */}
          <div className="w-20 h-1 bg-[#149A37] rounded-full mb-8" />

          {/* Heading */}
          <h2
            className="text-4xl md:text-6xl font-extrabold !text-white leading-tight"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Empowering Communities,
            <br />
            Transforming Healthcare
          </h2>

          {/* Main Paragraph */}
          <p
            className="mt-8 text-xl leading-10 !text-gray-100"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            At HEC Healthcare, we believe that meaningful healthcare extends beyond
            hospitals and clinics. By collaborating with governments, healthcare
            providers, researchers, and community organisations, we create sustainable
            strategies that improve patient outcomes and strengthen healthcare systems
            across the Caribbean and beyond.
          </p>

          {/* Button */}
          <button
            className="mt-12 px-10 py-4 rounded-full bg-[#149A37] hover:bg-[#2DBE4F]
                       text-white text-lg font-semibold transition-all duration-300"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Explore Our Impact
          </button>

        </div>
      </div>

    </section>
  );
}

export default CommunityImpactSection;