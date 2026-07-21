import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import logo from "../../assets/HomeLogo.png";

const footerColumns = [
  {
    heading: "SERVICES",
    links: [
      "Healthcare Consulting",
      "HEOR & Market Access",
      "Scientific Communications",
      "Creative Communications",
      "Patient Engagement",
    ],
  },
  {
    heading: "COMPANY",
    links: [
      "About Us",
      "Our Values",
      "Environmental, Social & Governance",
      "Our Commitment to Rare Disease",
      "Careers",
      "Reasons to Join",
      "News & Insights",
      "Events",
      "Locations & Contact",
    ],
  },
  {
    heading: "LEGAL AND GOVERNANCE",
    links: [
      "Terms of Use",
      "Privacy Notice",
      "Cookie Policy",
      "IT Security Measures",
      "Gender Pay Gap",
      "Modern Slavery Statement",
      "Legal Statements & Documents",
      "Global Ethical Business Conduct Code",
      "Suppliers",
    ],
  },
];

const socials = [
  { icon: FaXTwitter,    label: "X / Twitter" },
  { icon: FaLinkedinIn,  label: "LinkedIn"    },
  { icon: FaInstagram,   label: "Instagram"   },
  { icon: FaFacebookF,   label: "Facebook"    },
];

function AboutUsFooter() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── Top link columns ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-[0.7rem] font-bold tracking-[3px] text-gray-400 uppercase mb-6">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.95rem] text-[#0B1F3A] hover:text-[#149A37] transition-colors duration-200"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100" />

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col items-center gap-6 relative">

        {/* Logo */}
        <img src={logo} alt="HEC Healthcare" className="h-10 w-auto object-contain opacity-80" />

        {/* Social icons */}
        <div className="flex items-center gap-7">
          {socials.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="text-gray-400 hover:text-[#149A37] transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs text-gray-400 text-center leading-6"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          © {new Date().getFullYear()} Health-Y Evidence Caribbean. All rights reserved.{" "}
          <span className="text-[#149A37] font-semibold">HEC Healthcare</span> is a registered trademark.
        </p>

        {/* Scroll-to-top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`absolute right-6 lg:right-10 bottom-8
                      p-2 rounded-full border border-gray-200
                      text-gray-400 hover:text-[#149A37] hover:border-[#149A37]
                      transition-all duration-300
                      ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          <ArrowUp size={18} />
        </button>
      </div>

    </footer>
  );
}

export default AboutUsFooter;
