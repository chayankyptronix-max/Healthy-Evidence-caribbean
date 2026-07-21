import { FlaskConical, Users, ShieldCheck, Globe } from "lucide-react";

export const coreValues = [
  {
    id: "evidence-first",
    title: "Evidence First",
    description: "We believe in the power of data. Every decision, policy recommendation, and healthcare strategy we develop is rooted in rigorous, peer-reviewed scientific evidence.",
    icon: FlaskConical,
    color: "#004B8D", // Evidence Blue
    bgHover: "hover:bg-[#004B8D]/5",
    glow: "shadow-[#004B8D]/10",
  },
  {
    id: "innovation",
    title: "Continuous Innovation",
    description: "Healthcare is evolving, and so are we. We embrace forward-thinking methodologies and digital transformation to solve the Caribbean's most pressing health challenges.",
    icon: Globe, // Representing broader impact/innovation
    color: "#149A37", // HEC Green
    bgHover: "hover:bg-[#149A37]/5",
    glow: "shadow-[#149A37]/10",
  },
  {
    id: "collaboration",
    title: "Unified Collaboration",
    description: "We are stronger together. We foster deep partnerships across ministries, hospitals, and communities to build sustainable, inclusive healthcare ecosystems.",
    icon: Users,
    color: "#2DBE4F", // Bright Health Green
    bgHover: "hover:bg-[#2DBE4F]/5",
    glow: "shadow-[#2DBE4F]/10",
  },
  {
    id: "integrity",
    title: "Unwavering Integrity",
    description: "Trust is our foundation. We maintain the highest ethical standards in our research, ensuring transparency, privacy, and accountability in all our endeavors.",
    icon: ShieldCheck,
    color: "#002B5C", // Primary Navy
    bgHover: "hover:bg-[#002B5C]/5",
    glow: "shadow-[#002B5C]/10",
  },
];
