import React from "react";
import { motion } from "framer-motion";

const GallerySection: React.FC = () => {
  // Gallery items with background colors and descriptions
  const galleryItems = [
    {
      title: "جلسات تدريبية تفاعلية",
      description: "تعلم من خلال ورش عمل عملية تمنحك المهارات اللازمة للنجاح",
      bgColor: "bg-primary",
    },
    {
      title: "التدريب على المقابلات",
      description: "احصل على خبرة واقعية في المقابلات من خلال تدريبات محاكاة احترافية",
      bgColor: "bg-accent",
    },
    {
      title: "تطوير المهارات المهنية",
      description: "طور مهاراتك في كتابة السيرة الذاتية والتواصل المهني والعرض التقديمي",
      bgColor: "bg-secondary",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="gallery">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-xl h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className={`h-48 ${item.bgColor} flex items-center justify-center`}>
                <h3 className="text-white font-bold text-2xl text-center px-4">{item.title}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
