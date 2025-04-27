import React from "react";
import { motion } from "framer-motion";

const GallerySection: React.FC = () => {
  // Gallery items with background images
  const galleryItems = [
    {
      title: "جلسات تدريبية تفاعلية",
      bgColor: "from-primary to-secondary",
    },
    {
      title: "التدريب على المقابلات",
      bgColor: "from-accent to-accent2",
    },
    {
      title: "تطوير المهارات المهنية",
      bgColor: "from-secondary to-accent",
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
              <div 
                className={`w-full h-full bg-gradient-to-br ${item.bgColor} p-8 flex items-center justify-center`}
              >
                <div className="w-full h-full absolute inset-0 opacity-15">
                  <div className="w-full h-full bg-[url('/attached_assets/image_1745730872530.png')] bg-center bg-no-repeat bg-contain"></div>
                </div>
                <h3 className="text-white font-bold text-2xl text-center z-10 drop-shadow-lg">{item.title}</h3>
              </div>
              <motion.div
                className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-bold text-lg px-4 text-center">{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
