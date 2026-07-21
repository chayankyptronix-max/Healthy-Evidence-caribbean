import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/HomeLogo.png";

const navItems = [
  {
    title: "Who we are",
    dropdown: [
      "About us",
      "Our values",
      "Environmental, social & governance",
      "Therapeutic areas",
    ],
  },
  {
    title: "What we do",
    dropdown: [
      "Consulting (Acsel Health)",
      "HEOR & market access",
      "Scientific communications",
      "Creative communications",
      "Patient engagement",
    ],
  },
  { title: "Insights" },
  { title: "News & Events" },
  { title: "Join us" },
  { title: "Contact us" },
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownClick = (link) => {
    const lowerLink = link.toLowerCase();
    if (lowerLink.includes("about")) navigate("/about");
    else if (lowerLink.includes("values")) navigate("/our-values");
    else if (lowerLink.includes("environmental") || lowerLink.includes("esg")) navigate("/esg");
  };

  // Auto-focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="w-full bg-[#F8FAF8] border-b border-gray-100 sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto h-20 md:h-24 flex items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <div className="flex items-center cursor-pointer shrink-0">
            <img
              src={logo}
              alt="Health-Y Evidence Caribbean"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop: Nav items OR Search bar */}
          <AnimatePresence mode="wait">
            {searchOpen ? (
              <motion.div
                key="search"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="hidden lg:flex flex-1 mx-10 items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm"
              >
                <Search size={18} className="text-[#149A37] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, research..."
                  className="flex-1 bg-transparent outline-none text-[#0B1F3A] placeholder-gray-400 text-sm"
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="text-gray-400 hover:text-[#002B5C] transition-colors"
                >
                  <X size={18} />
                </button>
              </motion.div>
            ) : (
              <motion.ul
                key="nav"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="hidden lg:flex items-center gap-8 xl:gap-10 text-[#1F2937] font-medium text-sm xl:text-base"
              >
                {navItems.map((item) => (
                  <li key={item.title} className="relative group">
                    <button className="flex items-center gap-1 hover:text-[#149A37] transition-colors whitespace-nowrap py-2">
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown
                          size={14}
                          strokeWidth={2.2}
                          className="text-[#149A37] transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                    </button>

                    {item.dropdown && (
                      <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl bg-white shadow-2xl border border-gray-100 py-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                        {item.dropdown.map((link) => (
                          <Link
                            key={link}
                            to={
                              link.toLowerCase().includes("about") ? "/about" : 
                              link.toLowerCase().includes("values") ? "/our-values" :
                              (link.toLowerCase().includes("environmental") || link.toLowerCase().includes("esg")) ? "/esg" : "#"
                            }
                            className="block px-6 py-2.5 text-sm text-[#0B1F3A] hover:bg-[#F8FAF8] hover:text-[#149A37] transition-all cursor-pointer"
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="cursor-pointer hover:text-[#149A37] transition-colors p-1"
                    aria-label="Open search"
                  >
                    <Search size={20} />
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Mobile: search + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="p-2 text-[#002B5C] hover:text-[#149A37] transition-colors"
              aria-label="Search"
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-[#002B5C] hover:text-[#149A37] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-[#F8FAF8]"
            >
              <div className="flex items-center gap-3 px-6 py-3">
                <Search size={18} className="text-[#149A37] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, research..."
                  className="flex-1 bg-transparent outline-none text-[#0B1F3A] placeholder-gray-400 text-sm py-2"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <img src={logo} alt="HEC" className="h-10 w-auto object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-400 hover:text-[#002B5C] transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav className="flex-1 px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.title ? null : item.title
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#0B1F3A] font-medium hover:bg-[#F8FAF8] hover:text-[#149A37] transition-all text-left"
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown
                          size={16}
                          className={`text-[#149A37] transition-transform duration-300 ${
                            openDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {item.dropdown && openDropdown === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.dropdown.map((link) => (
                            <Link
                              key={link}
                              to={
                                link.toLowerCase().includes("about") ? "/about" : 
                                link.toLowerCase().includes("values") ? "/our-values" : 
                                (link.toLowerCase().includes("environmental") || link.toLowerCase().includes("esg")) ? "/esg" : "#"
                              }
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-500 hover:text-[#149A37] transition-colors cursor-pointer"
                            >
                              {link}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center">
                  © {new Date().getFullYear()} Health-Y Evidence Caribbean
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;