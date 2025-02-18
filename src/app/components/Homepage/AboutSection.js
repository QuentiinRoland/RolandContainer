import React from "react";
import { themes } from "@/app/lib/theme-config";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Variants pour le texte avec fade et montée
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Variants pour les images avec fade et léger zoom
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Partie gauche avec texte */}
      <div>
        <motion.h2
          className="text-4xl text-black font-semibold"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A propos de Roland Container
        </motion.h2>

        <motion.p
          className="text-black mt-8"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Depuis plus de 40 ans, notre entreprise familiale met son savoir-faire
          et son expérience au service de la location de conteneurs pour
          particuliers et professionnels. Que ce soit pour vos chantiers de
          construction, vos travaux de rénovation ou la gestion de vos déchets,
          nous proposons des solutions sur mesure adaptées à vos besoins. Grâce
          à notre réactivité, notre large gamme de conteneurs et un service de
          proximité, nous assurons des prestations de qualité en toute
          simplicité. Faites confiance à une équipe passionnée, à l’écoute, et
          engagée à vous offrir une solution rapide et efficace.
        </motion.p>

        <motion.button
          className="mt-4 bg-orange-500 px-5 py-3 rounded-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nos services
        </motion.button>
      </div>

      {/* Partie droite avec images */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          className="col-span-2 md:col-span-1"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src="/earthworks.jpeg" className="w-full h-full rounded-lg" />
        </motion.div>

        <div className="grid grid-row-2 gap-4">
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-black text-white px-4 py-2 rounded-lg">
              <p className="text-xl text-center font-extralight">
                <motion.strong
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  + 40 ans
                </motion.strong>{" "}
                <br />
                d'expérience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute bg-gray-100 w-[20%] h-[22.5%] shadow-sm rounded-md" />
            <img
              src="/RolandContainer.png"
              className="relative w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
