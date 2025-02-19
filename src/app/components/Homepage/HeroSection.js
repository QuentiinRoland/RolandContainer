"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const router = useRouter();

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleSolutionsClick = () => {
    router.push("/services");
  };

  const handleDevisClick = () => {
    router.push("/contact");
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative h-screen grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-12 lg:py-24 relative z-10 mx-4 sm:mx-8">
          <motion.div
            className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            ROLAND CONTAINER | LOCATION DE CONTAINERS
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-none font-bold mb-6 sm:mb-12 tracking-tight relative text-black"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            Simplifiez vos chantiers, louez nos conteneurs
            <motion.div
              className="absolute -bottom-2 sm:-bottom-4 left-0 w-16 sm:w-32 h-1 sm:h-2 bg-orange-500"
              initial={{ opacity: 0, x: -220 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Des solutions d'évacuement flexibles et sécurisées. Notre flotte de
            containers s'adapte à tous vos besoins logistiques.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={handleSolutionsClick}
              className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors text-sm sm:text-base"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 2 }}
            >
              Nos solutions
            </motion.button>
            <motion.button
              onClick={handleDevisClick}
              className="bg-white border-2 text-black border-black px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-50 transition-colors text-sm sm:text-base text-center"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              Demander un devis
            </motion.button>
          </div>
        </div>

        <div className="absolute lg:relative lg:col-span-7 inset-0 bg-black/5">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/wallpaperHero.jpg"
                alt="Camion de transport professionnel"
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 58.33vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-transparent lg:hidden" />
            </div>
          </div>

          <motion.div
            className="hidden lg:block absolute -left-24 bottom-0 w-32 sm:w-48 h-32 sm:h-48 bg-orange-500"
            initial={{ opacity: 0, y: 220 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
