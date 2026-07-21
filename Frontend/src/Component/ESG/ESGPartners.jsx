import { motion } from "framer-motion";

const partners = [
  {
    name: "UN Global Compact",
    description: "Since 2021, we have been a committed participant of the UN Global Compact, adhering to its Ten Principles on human rights, labor, environment, and anti-corruption.",
  },
  {
    name: "CDP",
    description: "We disclose our environmental impact annually through CDP, demonstrating our commitment to environmental transparency and accountability.",
  },
  {
    name: "EcoVadis",
    description: "We are proud to have been awarded a Silver rating by EcoVadis, placing us in the top 25% of rated companies for our sustainability management system.",
  }
];

const ESGPartners = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-[800] text-[#002B5C] mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              {partner.name}
            </h3>
            {partner.name === "CDP" && (
              <div className="mb-4 h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xs uppercase">
                CDP Logo
              </div>
            )}
            <p className="text-[#0B1F3A] leading-relaxed">
              {partner.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ESGPartners;
