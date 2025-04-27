import React from "react";
import { motion } from "framer-motion";

const GallerySection: React.FC = () => {
  // Gallery items
  const galleryItems = [
    {
      title: "جلسات تدريبية تفاعلية",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f0f0f0" />
          <rect x="100" y="150" width="600" height="300" rx="20" fill="#e0e0e0" />
          <circle cx="400" cy="300" r="80" fill="#5E1C80" opacity="0.7" />
          <circle cx="250" cy="300" r="60" fill="#5E1C80" opacity="0.5" />
          <circle cx="550" cy="300" r="60" fill="#5E1C80" opacity="0.5" />
          <rect x="150" y="150" width="500" height="20" rx="10" fill="#ccc" />
        </svg>
      ),
    },
    {
      title: "التدريب على المقابلات",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f0f0f0" />
          <rect x="150" y="150" width="500" height="300" rx="20" fill="#e0e0e0" />
          <circle cx="300" cy="250" r="80" fill="#FF5A7E" opacity="0.7" />
          <circle cx="500" cy="250" r="80" fill="#5E1C80" opacity="0.5" />
          <rect x="200" y="400" width="400" height="20" rx="10" fill="#ccc" />
          <rect x="250" y="430" width="300" height="20" rx="10" fill="#ccc" />
        </svg>
      ),
    },
    {
      title: "تطوير المهارات المهنية",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f0f0f0" />
          <rect x="150" y="100" width="500" height="400" rx="20" fill="#e0e0e0" />
          <rect x="200" y="150" width="400" height="30" rx="15" fill="#00D4D4" opacity="0.7" />
          <rect x="200" y="200" width="300" height="30" rx="15" fill="#00D4D4" opacity="0.5" />
          <rect x="200" y="250" width="400" height="30" rx="15" fill="#00D4D4" opacity="0.7" />
          <rect x="200" y="300" width="350" height="30" rx="15" fill="#00D4D4" opacity="0.5" />
          <rect x="200" y="350" width="250" height="30" rx="15" fill="#00D4D4" opacity="0.7" />
          <rect x="200" y="400" width="400" height="30" rx="15" fill="#00D4D4" opacity="0.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center font-poppins font-bold text-3xl md:text-4xl mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          لمحات من البرنامج
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg h-64 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full h-full">{item.svg}</div>
              <motion.div
                className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-bold text-lg">{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
