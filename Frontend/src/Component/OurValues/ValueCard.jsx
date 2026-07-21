import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ValueCard = ({ value }) => {
  const Icon = value.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={`group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm transition-all duration-300 ${value.bgHover} hover:shadow-2xl ${value.glow} overflow-hidden`}
    >
      {/* Decorative Blob */}
      <div 
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ backgroundColor: value.color }}
      />

      {/* Icon Container */}
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${value.color}15`, color: value.color }}
      >
        <Icon size={28} strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#002B5C] mb-4">
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {value.description}
      </p>

      {/* Accent Line */}
      <div 
        className="mt-8 h-[3px] rounded-full w-0 group-hover:w-16 transition-all duration-500"
        style={{ backgroundColor: value.color }}
      />
    </motion.div>
  );
};

export default ValueCard;
