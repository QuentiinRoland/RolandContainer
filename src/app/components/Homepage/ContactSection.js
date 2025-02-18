import React from "react";
import { Phone, Mail, Calendar, Truck, Clock, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Variants pour le conteneur principal
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

  // Variants pour les éléments enfants
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

  // Variants pour les lignes décoratives
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

  return (
    <div className="relative -mb-20 z-10">
      <motion.div
        className="relative overflow-hidden rounded-3xl mx-4 lg:mx-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="relative py-14 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Une question sur nos services ?
            </motion.h2>

            <motion.p
              className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Notre équipe d'experts est là pour vous conseiller sur le choix de
              votre container et répondre à toutes vos questions.
            </motion.p>

            <motion.button
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors mb-16"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.button>
          </div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-white transform -rotate-6"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-white transform rotate-6"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white transform rotate-6"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-white transform rotate-6"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-white transform rotate-6"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
