import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary via-accent2 to-accent flex items-center justify-center">
                <span className="text-white font-bold">OT</span>
              </div>
              <span className="font-poppins font-bold text-xl ml-2">ONE TEAM</span>
            </div>
            <p className="mt-2 text-sm opacity-80">بالتعاون مع Learnova</p>
          </div>

          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} One Team & Learnova. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
