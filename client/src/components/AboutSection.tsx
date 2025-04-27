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
              <svg
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
              >
                <rect width="800" height="600" fill="#f8f9fa" />
                <path
                  d="M0,128L48,138.7C96,149,192,171,288,197.3C384,224,480,256,576,245.3C672,235,768,181,864,144C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  fill="#5E1C80"
                  opacity="0.1"
                />
                <g transform="translate(400, 300)">
                  <g transform="scale(0.8)">
                    {/* Meeting/Training representation */}
                    <rect x="-200" y="-100" width="400" height="200" rx="10" fill="#f1f1f1" />
                    <circle cx="-120" cy="0" r="40" fill="#5E1C80" opacity="0.7" />
                    <circle cx="-40" cy="0" r="40" fill="#5E1C80" opacity="0.5" />
                    <circle cx="40" cy="0" r="40" fill="#5E1C80" opacity="0.5" />
                    <circle cx="120" cy="0" r="40" fill="#5E1C80" opacity="0.7" />
                    <rect x="-180" y="-80" width="360" height="10" rx="5" fill="#ccc" />
                    <rect x="-180" y="70" width="360" height="10" rx="5" fill="#ccc" />
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
