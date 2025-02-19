import React, { useState } from "react";
import { ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";
import ContainerAssistantModal from "../ContainerAssistantModal";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

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

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const handleDevisClick = () => {
    router.push("/contact");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/truck.jpeg"
          alt="Container storage"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>

      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
            <div className="flex flex-col justify-center h-full max-w-xl pt-20 lg:pt-0">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              >
                Trouvez le container
                <br />
                idéal pour votre
                <br />
                stockage
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Découvrez notre gamme complète de containers pour le stockage de
                vos biens. Des solutions adaptées à tous vos besoins, de 6m³ à
                30m³.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-start items-center gap-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium 
                           rounded-lg hover:bg-blue-700 transition-all duration-300 w-full sm:w-fit
                           text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setModalOpen(true)}
                >
                  <ArrowDownCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Lancer le questionnaire
                </motion.button>
                <motion.button
                  className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 
                           transition-colors duration-300 w-full sm:w-fit text-white
                           text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDevisClick}
                >
                  Réservez un devis
                </motion.button>
              </motion.div>
            </div>

            {/* Colonne de droite - Containers */}
            <div className="relative hidden lg:flex items-center">
              {[
                { size: "6m³", position: "left-4 top-[30%]", delay: 0.2 },
                { size: "12m³", position: "right-4 top-[40%]", delay: 0.4 },
                { size: "20m³", position: "left-4 top-[60%]", delay: 0.6 },
                { size: "30m³", position: "right-4 top-[70%]", delay: 0.8 },
              ].map((container, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${container.position}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6,
                    delay: container.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 rounded-xl
                             hover:bg-white/20 transition-all duration-300 cursor-pointer 
                             hover:border-blue-500 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <p className="text-2xl sm:text-3xl font-semibold text-white">
                      {container.size}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Version mobile des containers */}
            <div className="lg:hidden grid grid-cols-2 gap-4 pb-8">
              {[
                { size: "6m³", delay: 0.2 },
                { size: "12m³", delay: 0.4 },
                { size: "20m³", delay: 0.6 },
                { size: "30m³", delay: 0.8 },
              ].map((container, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6,
                    delay: container.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl
                             hover:bg-white/20 transition-all duration-300 cursor-pointer 
                             hover:border-blue-500 shadow-lg text-center"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <p className="text-xl sm:text-2xl font-semibold text-white">
                      {container.size}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContainerAssistantModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default HeroSection;
