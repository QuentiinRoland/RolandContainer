import React from "react";
import { Phone, Mail, Calendar, Truck, Clock, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 0.1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const handleDevisClick = () => {
    router.push("/contact");
  };

  return (
    <div className="relative -mb-16 sm:-mb-20 z-10">
      <motion.div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl 
                   mx-3 sm:mx-4 lg:mx-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Content */}
        <div className="relative py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                         font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Une question sur nos services ?
            </motion.h2>

            <motion.p
              className="text-blue-100 text-base sm:text-lg mb-8 sm:mb-10 lg:mb-12 
                         max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0"
              variants={itemVariants}
            >
              Notre équipe d'experts est là pour vous conseiller sur le choix de
              votre container et répondre à toutes vos questions.
            </motion.p>

            <motion.button
              className="bg-white text-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 
                         rounded-lg font-medium text-sm sm:text-base
                         hover:bg-blue-50 transition-colors 
                         mb-8 sm:mb-12 lg:mb-16
                         w-full sm:w-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDevisClick}
            >
              Contactez-nous
            </motion.button>
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-white transform -rotate-3 sm:-rotate-6"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-white transform rotate-3 sm:rotate-6"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white transform rotate-3 sm:rotate-6"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-white transform -rotate-3 sm:-rotate-6"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-white transform rotate-3 sm:rotate-6"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
