import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

const HeroSection = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative h-screen grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center px-8 lg:px-16 py-24 relative z-10">
          {/* Sous-titre - Apparaît en premier */}
          <motion.div
            className="text-sm text-gray-500 mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0, // Premier élément, pas de délai
            }}
          >
            ROLAND CONTAINER | LOCATION DE CONTAINERS
          </motion.div>

          {/* Grand titre - Apparaît 2 secondes après */}
          <motion.h1
            className="text-[4rem] leading-none font-bold mb-12 tracking-tight relative text-black"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 1, // 2 secondes de délai
            }}
          >
            Simplifiez vos chantiers, louez nos conteneurs
            {/* Barre orange - Apparaît juste après le titre */}
            <motion.div
              className="absolute -bottom-4 left-0 w-32 h-2 bg-orange-500"
              initial={{ opacity: 0, x: -220 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.5, // 1 seconde après le titre
              }}
            ></motion.div>
          </motion.h1>

          {/* Description - Apparaît après la barre */}
          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 2, // 0.5 seconde après la barre
            }}
          >
            Des solutions d'évacuement flexibles et sécurisées. Notre flotte de
            containers s'adapte à tous vos besoins logistiques.
          </motion.p>

          {/* Boutons - Apparaissent en dernier */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="bg-black text-white px-8 py-4 flex items-center gap-2 hover:bg-gray-900 transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                delay: 3, // 0.5 seconde après la description
              }}
            >
              Nos solutions
            </motion.button>
            <motion.button
              className="bg-white border-2 text-black border-black px-8 py-4 hover:bg-gray-50 transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                delay: 3.2, // 0.2 seconde après le premier bouton
              }}
            >
              Demander un devis
            </motion.button>
          </div>
        </div>

        {/* Partie droite avec l'image en noir et blanc */}
        <div className="absolute lg:relative lg:col-span-7 inset-0 bg-black/7">
          {/* Image du camion en noir et blanc */}
          <div className="absolute inset-0">
            <img
              src="/wallpaperHero.jpg"
              alt="Camion de transport professionnel"
              className="object-cover w-full h-full "
            />
            {/* Overlay diagonal */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-transparent lg:hidden"></div>
          </div>

          <motion.div
            className="hidden lg:block absolute -left-24 bottom-0 w-48 h-48 bg-orange-500"
            initial={{ opacity: 0, y: 220 }} // Un seul objet avec les deux propriétés
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4, // Apparaît 0.4s après
              ease: "easeOut",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
