import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EligibilitySection: React.FC = () => {
  const eligibilityItems = [
    {
      title: "الفئة العمرية",
      description: "يجب أن يكون عمرك بين 18 و 30 عامًا",
    },
    {
      title: "الحضور",
      description: "الالتزام بحضور جميع الجلسات التدريبية المقررة",
    },
    {
      title: "الدافع",
      description: "لديك الرغبة في تطوير مهاراتك المهنية والاستعداد لسوق العمل",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="eligibility" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center font-poppins font-bold text-3xl md:text-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          شروط التقديم
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.ul
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {eligibilityItems.map((item, index) => (
              <motion.li key={index} className="flex items-start" variants={itemVariants}>
                <CheckCircle className="h-6 w-6 text-secondary mt-1 ml-3" />
                <div>
                  <h3 className="font-poppins font-bold text-xl mb-1">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-xl mb-3 text-accent">الأماكن محدودة جدًا! سارع بالتسجيل</p>
            <Button asChild className="bg-secondary hover:bg-opacity-90 text-primary font-bold rounded-full">
              <a href="#register">سجل الآن!</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilitySection;
