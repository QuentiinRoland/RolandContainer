import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  // Variants pour les cartes de service
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Variants pour l'image
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Premier service */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Location de conteneurs multi-usages
            </h3>
            <p className="text-gray-600 mb-4">
              Une flotte de conteneurs adapté à vos besoins, offrant des
              solutions de transport fiables et efficaces pour tous types de
              marchandises.
            </p>
            <motion.div
              className="w-16 h-0.5 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Deuxième service */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} // Délai de 0.2s
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Conseil et accompagnement personnalisé
            </h3>
            <p className="text-gray-600 mb-4">
              Nos experts vous guident dans le choix du conteneur adapté selon
              la nature de vos déchets et l'ampleur de vos travaux.
            </p>
            <motion.div
              className="w-16 h-0.5 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Troisième service */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }} // Délai de 0.4s
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Service rapide, flexible et ponctuel
            </h3>
            <p className="text-gray-600 mb-4">
              Nous assurons une livraison et une collecte rapides selon vos
              disponibilités. Nous garantissons un service fiable et ponctuel.
            </p>
            <motion.div
              className="w-16 h-0.5 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Bouton avec animation */}
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="bg-orange-500 px-4 py-2 rounded-md shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demandez votre devis
          </motion.button>
        </motion.div>

        {/* Section image */}
        <div className="relative w-full pt-8 pl-8">
          <div className="absolute top-0 left-0 w-[98%] h-[96%] bg-gray-100 shadow-sm rounded-sm"></div>
          <div className="relative aspect-[16/9] w-full">
            <img
              src="/liftingTruckRoland.jpeg"
              alt="Camion benne en action"
              className="w-full h-full object-cover shadow-md rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
