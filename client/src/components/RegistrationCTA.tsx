import React from "react";
import { motion } from "framer-motion";
import { Award, User, FileText, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

const RegistrationCTA: React.FC = () => {
  return (
    <section id="register" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center">
              <motion.h2
                className="font-poppins font-bold text-3xl mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                سجّل الآن
              </motion.h2>
              <motion.p
                className="mb-6 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                احصل على فرصتك في برنامج التطوير المهني المجاني من Learnova و One Team
              </motion.p>

              <motion.ul
                className="space-y-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-secondary ml-2" />
                  <span>شهادة معتمدة من EFE</span>
                </li>
                <li className="flex items-center">
                  <User className="h-5 w-5 text-secondary ml-2" />
                  <span>مدربين محترفين</span>
                </li>
                <li className="flex items-center">
                  <FileText className="h-5 w-5 text-secondary ml-2" />
                  <span>مواد تدريبية متميزة</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-secondary ml-2" />
                  <span>بناء شبكة علاقات مهنية</span>
                </li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-bold text-accent">الأماكن محدودة!</p>
              </motion.div>
            </div>

            <div className="md:w-1/2 p-12 bg-white">
              <motion.h3
                className="font-poppins font-bold text-2xl mb-6 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                روابط التسجيل
              </motion.h3>

              <motion.a
                href="https://forms.gle/NaHvBK3Ggy1dr2W17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-primary hover:bg-primaryLight text-white rounded-lg py-4 px-6 mb-4 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-bold">نموذج التسجيل</span>
                <FaExternalLinkAlt />
              </motion.a>

              <motion.div
                className="space-y-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium text-gray-700">تابعنا على وسائل التواصل الاجتماعي:</p>

                <motion.a
                  href="https://www.facebook.com/share/p/1C21KZMQ7o/?mibextid=oFDknk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 px-6 transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>صفحتنا على فيسبوك</span>
                  <FaFacebook className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/p/DI68ZB5O7mK/?igsh=MWZzem1nZzlmeXJpZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 px-6 transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>حسابنا على انستغرام</span>
                  <FaInstagram className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
