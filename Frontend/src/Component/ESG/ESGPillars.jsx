import { motion } from "framer-motion";
import { Users, Globe, Handshake, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Enabling our people",
    icon: <Users size={24} className="text-[#149A37] mb-4" />,
    items: [
      "Fostering diversity & inclusion",
      "Prioritizing health and well-being",
      "Continuous learning and development",
      "Empowering local researchers"
    ]
  },
  {
    title: "Supporting the planet",
    icon: <Globe size={24} className="text-[#149A37] mb-4" />,
    items: [
      "Reducing carbon footprint",
      "Sustainable office practices",
      "Climate-resilient health research",
      "Waste reduction initiatives"
    ]
  },
  {
    title: "Partnering with our suppliers",
    icon: <Handshake size={24} className="text-[#149A37] mb-4" />,
    items: [
      "Ethical sourcing policies",
      "Promoting local Caribbean vendors",
      "Supplier diversity programs",
      "Ensuring supply chain transparency"
    ]
  },
  {
    title: "Delivering responsible business",
    icon: <ShieldCheck size={24} className="text-[#149A37] mb-4" />,
    items: [
      "Robust data governance",
      "Strict ethical research standards",
      "Transparent reporting",
      "Zero tolerance for corruption"
    ]
  }
];

const ESGPillars = () => {
  return (
    <section className="w-full bg-[#002B5C] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#2DBE4F] font-semibold uppercase tracking-wider text-sm mb-2">Our Framework</p>
          <h2 className="text-3xl md:text-5xl font-[800] text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>
            ESG is everyone's business at HEC
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Our strategic framework drives impact across four interconnected pillars, ensuring that our growth is sustainable, equitable, and responsible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {pillar.icon}
              <h3 className="text-2xl font-[800] text-[#002B5C] mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[#0B1F3A]">
                    <span className="text-[#2DBE4F] mr-3 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGPillars;
