import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  MessageSquare, 
  Search, 
  Bot, 
  Linkedin, 
  Award 
} from "lucide-react";

const benefits = [
  {
    icon: <FileText className="h-10 w-10" />,
    title: "كتابة السيرة الذاتية (CV)",
    description:
      "تعلم أسرار كتابة سيرة ذاتية احترافية تجذب انتباه مسؤولي التوظيف وتزيد من فرصك في الحصول على المقابلات.",
    color: "secondary",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "مهارات المقابلات الشخصية",
    description:
      "اكتشف أسرار المقابلات الشخصية واكتسب المهارات اللازمة لتقديم نفسك بثقة وتميز أمام لجان التوظيف.",
    color: "accent",
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "أدوات البحث عن عمل",
    description:
      "تعرف على أدوات فعالة للبحث عن الوظائف المناسبة لمهاراتك واهتماماتك في سوق العمل.",
    color: "accent2",
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "استخدام الذكاء الاصطناعي",
    description:
      "استخدام أحدث تقنيات الذكاء الاصطناعي لتعزيز فرصك في الحصول على وظيفة وتحسين مهاراتك المهنية.",
    color: "primary",
  },
  {
    icon: <Linkedin className="h-10 w-10" />,
    title: "بناء ملف LinkedIn",
    description:
      "تعلم كيفية بناء ملف LinkedIn احترافي يجذب انتباه مسؤولي التوظيف ويساعدك في توسيع شبكة علاقاتك المهنية.",
    color: "secondary",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "شهادة معتمدة",
    description:
      "احصل على شهادة معتمدة من شركة EFE تعزز من سيرتك الذاتية وتزيد من فرصك في سوق العمل.",
    color: "accent",
  },
];

const BenefitsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="benefits" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center font-poppins font-bold text-3xl md:text-4xl mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ما الذي ستتعلمه؟
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          مجموعة متكاملة من المهارات العملية التي ستساعدك في الحصول على وظيفة أحلامك
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 border-t-4 border-${benefit.color}`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={`text-${benefit.color} text-4xl mb-4`}>{benefit.icon}</div>
              <h3 className="font-poppins font-bold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
