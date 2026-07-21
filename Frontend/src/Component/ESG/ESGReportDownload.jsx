import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ESGReportDownload = () => {
  return (
    <section className="w-full bg-[#F8FAF8] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-2/3"
        >
          <h2 className="text-3xl font-[800] text-[#002B5C] mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Download our 2023 Sustainability Report
          </h2>
          <p className="text-[#0B1F3A] text-lg mb-6 leading-relaxed">
            Our comprehensive report details our progress, targets, and the tangible actions we are taking to embed sustainability and governance into the fabric of Health Evidence Caribbean. Dive deep into our data, case studies, and future roadmap.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3 flex justify-center md:justify-end"
        >
          <button className="bg-[#149A37] hover:bg-[#2DBE4F] text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="mr-2">DOWNLOAD REPORT</span>
            <Download size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ESGReportDownload;
