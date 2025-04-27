import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Star = {
  id: number;
  top: string;
  left: string;
  size: string;
  opacity: string;
  duration: string;
}

const HeroSection: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Create stars for the background
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          opacity: `${Math.random() * 0.8 + 0.2}`,
          duration: `${Math.random() * 3 + 2}s`,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="relative pt-24 pb-20 min-h-screen flex items-center" id="hero">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden bg-primary">
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity, "1", star.opacity],
              }}
              transition={{
                duration: parseFloat(star.duration),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-32 md:h-48"
          >
            <path
              fill="#331244"
              d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Purple glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary opacity-20 blur-3xl"></div>

        {/* Retro grid */}
        <div className="retro-grid absolute bottom-0 left-0 w-full h-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 text-white text-center md:text-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
              <span className="text-secondary">منحة</span> متقدمة للتطوير المهني
            </h1>
            <div className="mb-8">
              <p className="text-xl mb-4">
                من شركة <span className="text-accent font-medium">Learnova</span> بالتعاون مع{" "}
                <span className="text-accent2 font-medium">One Team</span>
              </p>
              <p className="text-lg opacity-90">
                احصل على شهادة معتمدة من شركة EFE واكتسب مهارات مهنية قيمة{" "}
                <span className="bg-secondary bg-opacity-20 px-2 py-1 rounded-lg font-bold">
                  مجانًا تمامًا!
                </span>
              </p>
            </div>
            <div>
              <motion.a
                href="#register"
                className="inline-block bg-accent hover:bg-opacity-90 text-white font-bold rounded-full px-6 py-3 transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                سجل الآن
                <i className="fas fa-arrow-left ml-2"></i>
              </motion.a>
              <p className="mt-3 text-sm opacity-70">الأماكن محدودة! سارع بالتسجيل</p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Logo display with animated glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary via-accent2 to-accent rounded-full opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <div className="rounded-full w-full h-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/image_1745730872530.png" 
                  alt="ONE TEAM Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
