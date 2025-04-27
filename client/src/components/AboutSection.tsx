import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center font-poppins font-bold text-3xl md:text-4xl mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          عن البرنامج
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-6">
              برنامج تدريبي متكامل مُقدم من شركة{" "}
              <span className="font-medium text-primary">Learnova</span>، إحدى أكبر شركات التدريب في
              مصر والشرق الأوسط، بالتعاون مع{" "}
              <span className="font-medium text-primary">One Team</span>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              يهدف البرنامج إلى تطوير مهاراتك المهنية وإعدادك لسوق العمل من خلال سلسلة من الورش
              التدريبية المتخصصة والشهادات المعتمدة من شركة EFE.
            </p>
            <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
              <p className="text-lg font-medium text-primary">
                <i className="fas fa-star-of-life text-accent ml-2"></i>
                الفئة العمرية المستهدفة: من 18 إلى 30 عامًا
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent opacity-10 rounded-full"></div>
            <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary p-8 flex items-center justify-center">
                <div className="w-full h-full absolute inset-0 opacity-15">
                  <div className="w-full h-full bg-[url('/attached_assets/image_1745730872530.png')] bg-center bg-no-repeat bg-contain"></div>
                </div>
                <div className="z-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 w-full max-w-md">
                  <h3 className="text-white font-bold text-2xl text-center mb-4">برنامج تدريب احترافي</h3>
                  <p className="text-white text-center">تطوير مهارات مهنية متكاملة وإعداد للانخراط في سوق العمل بشكل فعال</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
