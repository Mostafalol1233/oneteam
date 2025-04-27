import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-primary text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center ml-6">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/logo.jpg" 
                alt="ONE TEAM Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-poppins font-bold text-xl ml-2">ONE TEAM</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="px-3 py-2 hover:text-secondary transition">
            عن البرنامج
          </a>
          <a href="#benefits" className="px-3 py-2 hover:text-secondary transition">
            المميزات
          </a>
          <a href="#eligibility" className="px-3 py-2 hover:text-secondary transition">
            الشروط
          </a>
          <Button asChild className="bg-accent hover:bg-opacity-90 rounded-full">
            <a href="#register">سجّل الآن</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} aria-label="Menu" className="text-white">
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primaryDark overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              <a
                href="#about"
                className="block px-3 py-2 rounded hover:bg-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                عن البرنامج
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 rounded hover:bg-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                المميزات
              </a>
              <a
                href="#eligibility"
                className="block px-3 py-2 rounded hover:bg-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                الشروط
              </a>
              <a
                href="#register"
                className="block px-3 py-2 rounded-full bg-accent text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                سجّل الآن
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
