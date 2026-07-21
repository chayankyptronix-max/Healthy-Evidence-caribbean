import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import person5 from "../../assets/person5.jpg";
import person6 from "../../assets/person6.jpg";
import person7 from "../../assets/person7.jpg";
import person8 from "../../assets/person8.jpg";
import person9 from "../../assets/person9.jpg";

const leaders = [
    {
        name: "Dr. Michael Anderson",
        position: "Chief Executive Officer",
        image: person1,
        bio: "Dr. Michael Anderson brings over 25 years of executive leadership in global healthcare strategy and policy. A graduate of Johns Hopkins School of Medicine, he has led cross-border health evidence initiatives across North America, Europe, and the Caribbean. Under his stewardship, HEC Healthcare has grown from a regional consultancy into a globally recognised centre of excellence for health economics and outcomes research. He is a passionate advocate for equitable access to care and evidence-driven health policy reform.",
    },
    {
        name: "James Carter",
        position: "Chief Operating Officer",
        image: person2,
        bio: "James Carter oversees the operational backbone of HEC Healthcare, ensuring that every project is delivered with precision, accountability, and client focus. With a background in management consulting and an MBA from London Business School, James has spent 18 years optimising healthcare delivery systems across Latin America and the Caribbean. He champions a culture of operational excellence and has been instrumental in scaling the organisation's capacity to serve multinational clients.",
    },
    {
        name: "David Mitchell",
        position: "Chief Technology Officer",
        image: person3,
        bio: "David Mitchell leads HEC Healthcare's digital transformation agenda, building robust data platforms and analytical tools that power evidence generation at scale. A computer scientist turned health informatician, David holds a PhD in Biomedical Data Science from MIT. He has pioneered the adoption of real-world evidence technologies in Caribbean health systems, helping governments and providers make faster, smarter decisions with patient-level data.",
    },
    {
        name: "William Harris",
        position: "Chief Medical Officer",
        image: person4,
        bio: "Dr. William Harris is a board-certified internist and public health physician with deep expertise in clinical evidence synthesis and health technology assessment. He leads HEC's Medical Affairs division, ensuring scientific rigour across all research outputs. With over 200 peer-reviewed publications, Dr. Harris is a respected voice in Caribbean health policy circles and serves on several regional advisory boards focused on non-communicable disease prevention and management.",
    },
    {
        name: "Christopher Lewis",
        position: "Chief Financial Officer",
        image: person5,
        bio: "Christopher Lewis brings two decades of financial leadership in life sciences and professional services. A Chartered Accountant by training, he has managed portfolios exceeding USD 300 million across healthcare consultancies and pharmaceutical firms. At HEC Healthcare, Christopher drives financial strategy, sustainable growth planning, and investment in research infrastructure. He is committed to ensuring the organisation's long-term financial resilience in service of its mission.",
    },
    {
        name: "Daniel Walker",
        position: "Vice President, Engineering",
        image: person6,
        bio: "Daniel Walker leads HEC Healthcare's engineering and technology solutions teams, building the platforms that enable real-world evidence collection, analysis, and dissemination. With extensive experience in cloud architecture and health data interoperability, Daniel has delivered enterprise-grade systems for health ministries and hospital networks across the Caribbean region. He is a strong proponent of open-source tools and data standards in health informatics.",
    },
    {
        name: "Benjamin Scott",
        position: "Director of Operations",
        image: person7,
        bio: "Benjamin Scott is responsible for day-to-day project management, resource allocation, and quality assurance across HEC Healthcare's portfolio. Known for his meticulous attention to detail and people-first leadership style, Benjamin has overseen the successful delivery of more than 150 health research and consulting engagements. He holds a Master's in Health Systems Management and is a certified Project Management Professional (PMP).",
    },
    {
        name: "Emily Johnson",
        position: "Director of Human Resources",
        image: person8,
        bio: "Emily Johnson shapes the talent strategy and workplace culture at HEC Healthcare. With a background in organisational psychology and HR leadership at global consulting firms, she has built the hiring, learning, and development frameworks that attract and retain top health science talent across the Caribbean. Emily is a champion for diversity, equity, and inclusion and leads HEC's mentorship programme for emerging health professionals.",
    },
    {
        name: "Sophia Martinez",
        position: "Director of Research",
        image: person9,
        bio: "Dr. Sophia Martinez leads HEC Healthcare's research division, overseeing the design and execution of health economics studies, systematic reviews, and outcomes modelling projects. A pharmacist and health economist by training, Sophia holds dual postgraduate degrees from the University of the West Indies and the University of Toronto. She has contributed to landmark health technology assessments submitted to Caribbean and international regulatory bodies, and is passionate about translating research into actionable policy.",
    },
];

/* ─── Animation variants ─── */
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        scale: 0.94,
        y: 16,
        transition: { duration: 0.22, ease: "easeIn" },
    },
};

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Modal Component ─── */
function LeaderModal({ leader, onClose }) {
    /* Close on Escape */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        /* Lock body scroll while modal is open */
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Backdrop — click outside to close */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal panel */}
            <motion.div
                className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto
                   bg-[#F8FAF8] rounded-3xl shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                /* Prevent backdrop click from firing when clicking inside the card */
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center
                     rounded-full bg-white border border-gray-200 text-gray-400
                     hover:text-[#149A37] hover:border-[#149A37] transition-all duration-200
                     shadow-sm"
                >
                    <X size={16} />
                </button>

                {/* Top green accent bar */}
                <div className="h-1.5 w-full rounded-t-3xl bg-gradient-to-r from-[#149A37] to-[#004B8D]" />

                {/* Content */}
                <div className="flex flex-col items-center px-8 pt-10 pb-10 text-center">
                    {/* Profile photo */}
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-[#149A37]/30">
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Name */}
                    <h3
                        className="mt-6 text-2xl font-bold text-[#002B5C]"
                        style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }}
                    >
                        {leader.name}
                    </h3>

                    {/* Designation */}
                    <p
                        className="mt-1.5 text-sm font-semibold text-[#0B1F3A] tracking-wide uppercase"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                        {leader.position}
                    </p>

                    {/* Green divider */}
                    <div className="mt-5 mb-5 w-14 h-[2px] rounded-full bg-[#149A37]" />

                    {/* Biography */}
                    <p
                        className="text-[0.95rem] text-[#0B1F3A]/80 leading-8 text-left"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                        {leader.bio}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Main Section ─── */
function LeadershipSection() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <section className="bg-white py-28 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">

                    {/* ── Heading ── */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="uppercase tracking-[4px] text-xs font-semibold text-[#149A37] mb-5">
                            Who We Are
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight"
                            style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
                        >
                            Our leadership team
                        </h2>
                        <p
                            className="mt-5 text-base md:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                            Click on each executive member to read their bio.
                        </p>
                    </motion.div>

                    {/* ── Grid ── */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                onClick={() => setSelected(leader)}
                                className="group flex flex-col items-center text-center cursor-pointer"
                            >
                                {/* Photo circle */}
                                <div className="relative">
                                    <span className="absolute inset-0 rounded-full border-2 border-[#149A37] scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                                    <div className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top
                                 filter grayscale transition-all duration-500
                                 group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3
                                    className="mt-6 text-[1.05rem] font-bold text-[#0B1F3A] leading-snug
                             group-hover:text-[#149A37] transition-colors duration-300"
                                    style={{ fontFamily: "'Manrope', sans-serif" }}
                                >
                                    {leader.name}
                                </h3>

                                {/* Position */}
                                <p
                                    className="mt-1.5 text-sm text-gray-400 leading-relaxed"
                                    style={{ fontFamily: "'Manrope', sans-serif" }}
                                >
                                    {leader.position}
                                </p>

                                {/* Underline accent */}
                                <span className="mt-4 block h-[2px] w-0 rounded-full bg-[#149A37] group-hover:w-10 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ── Modal ── */}
            <AnimatePresence>
                {selected && (
                    <LeaderModal leader={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </>
    );
}

export default LeadershipSection;