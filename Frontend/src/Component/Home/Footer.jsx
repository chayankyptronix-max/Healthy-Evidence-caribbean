import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../../assets/HomeLogo.png";

const footerLinks = [
  {
    heading: "Services",
    links: [
      "Healthcare Research",
      "Evidence & Policy",
      "Health Data Analytics",
      "Community Programs",
      "Scientific Communications",
      "Capacity Building",
    ],
  },
  {
    heading: "Company",
    links: [
      "About Us",
      "Our Values",
      "What We Do",
      "Our Partners",
      "Careers",
      "Join Us",
      "News & Events",
      "Insights",
      "Locations & Contact",
    ],
  },
  {
    heading: "Legal and Governance",
    links: [
      "Terms of Use",
      "Privacy Notice",
      "Cookie Policy",
      "Data Protection",
      "Accessibility Statement",
      "Research Ethics",
      "Disclosure & Transparency",
      "Legal Documents",
      "Supplier Information",
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#002B5C] text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <img
              src={logo}
              alt="Health-Y Evidence Caribbean"
              className="h-16 w-auto object-contain brightness-0 invert mb-6"
            />

            <p className="text-gray-300 leading-7 text-sm max-w-xs">
              Advancing evidence-based healthcare across the Caribbean through
              research, collaboration, and innovation.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail size={15} className="text-[#2DBE4F] shrink-0" />
                <span>info@healthyec.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone size={15} className="text-[#2DBE4F] shrink-0" />
                <span>+1 (868) 000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin size={15} className="text-[#2DBE4F] shrink-0" />
                <span>Port of Spain, Trinidad & Tobago</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-[#149A37] hover:border-[#149A37] hover:text-white transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerLinks.map((col, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: colIndex * 0.1 }}
              >
                <h4 className="uppercase tracking-[3px] text-[#2DBE4F] font-semibold text-xs mb-6">
                  {col.heading}
                </h4>

                <ul className="space-y-3">
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-300 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Health-Y Evidence Caribbean. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
