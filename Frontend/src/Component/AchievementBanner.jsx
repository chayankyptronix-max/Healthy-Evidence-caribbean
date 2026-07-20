import { motion } from "framer-motion";

const AchievementBanner = () => {
  return (
    <section className="bg-[#F8FAF8] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] min-h-[480px] sm:min-h-[560px]"
        >
          {/* Background Image */}
          <img
            src="/src/assets/fireworks.png"
            alt="Achievement Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Navy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/90 via-[#002B5C]/75 to-[#004B8D]/70"></div>

          {/* Green Glow */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#149A37]/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 h-full flex items-center justify-center sm:justify-end">
            <div className="w-full max-w-xl mx-6 sm:mx-0 sm:mr-10 lg:mr-24 text-white py-12 sm:py-0">

              <motion.h2
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                20+ years of
                <br />
                healthcare excellence
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 text-base sm:text-lg leading-8 text-gray-200"
              >
                Health-Y Evidence Caribbean has been delivering
                evidence-based healthcare research, innovation,
                collaboration, and strategic partnerships that
                strengthen healthcare systems across the Caribbean
                and beyond.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#149A37" }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#2DBE4F] text-white font-semibold text-base sm:text-lg shadow-xl transition"
              >
                Learn More
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementBanner;