import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="/attached_assets/image_1745730872530.png" 
                  alt="ONE TEAM Logo" 
                  className="w-full h-full object-contain bg-primary"
                />
              </div>
              <span className="font-poppins font-bold text-xl ml-2">ONE TEAM</span>
            </div>
            <p className="mt-2 text-sm opacity-80">بالتعاون مع Learnova</p>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-end">
            <p>© {new Date().getFullYear()} One Team & Learnova. جميع الحقوق محفوظة.</p>
            <a 
              href="https://www.linkedin.com/in/mostafa-mohamed-409540336/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent2 transition-colors duration-300 mt-2 flex items-center"
            >
              <i className="fab fa-linkedin mr-1"></i>
              Mostafa Mohamed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
